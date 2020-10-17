import { NowRequest, NowResponse } from '@now/node'

import { return200, return500 } from './utils/response'
import { getTotalLiquidity } from './_shared'

export default async function(req: NowRequest, res: NowResponse): Promise<void> {

  try {
    const totalLiquidity = await getTotalLiquidity()

    return200(
      res,
      {
        return :{
          totalLiquidityUSD: totalLiquidity
        }
      },
      60 * 15 // cache for 15 minutes
    )
  } catch (error) {
    return500(res, error)
  }
}
