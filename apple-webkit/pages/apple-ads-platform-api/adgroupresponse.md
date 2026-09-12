> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgroupresponse](https://developer.apple.com/documentation/apple-ads-platform-api/adgroupresponse)

# AdGroupResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The response object for an ad group operation.

## Declaration

```
object AdGroupResponse
```

## Properties

- `result` — `AdGroup`: The affected `AdGroup` object in its post-operation state. Present on success. See [AdGroup](adgroup.md).
- `error` — `Error`: Structured details about what went wrong, of type `Error`. Present on failure, in place of `result`, for operational errors specific to the ad group request. HTTP-level errors (400, 401, 403, etc.) return a separate `ErrorResponse` body as the top-level response instead. See [Error](error.md).

<a id="Discussion"></a>

## Discussion

The `AdGroupResponse` object is the single-item response envelope returned by create, update, and delete ad group operations.

<a id="Example"></a>

### Example

```json
{
  "result": {
    "id": 555666777,
    "name": "AwayFinder iOS — New Users 18-34",
    "adAccountId": 123456789,
    "campaignId": 444555666,
    "pricingModel": "CPT",
    "status": "ENABLED",
    "systemStatus": "RUNNING",
    "displayStatus": "RUNNING",
    "startTime": "2025-09-01T00:00:00.000",
    "endTime": "2025-12-31T23:59:59.000",
    "automatedKeywordsOptIn": false,
    "targeting": {
      "deviceClass": {
        "include": [
          "IPHONE"
        ]
      },
      "minAge": {
        "include": [
          "18"
        ]
      },
      "maxAge": {
        "include": [
          "34"
        ]
      }
    },
    "deleted": false,
    "creationTime": "2025-01-10T08:00:00.000",
    "modificationTime": "2025-06-01T10:00:00.000"
  }
}
```

## See Also

- [AdGroup](adgroup.md): Primary unit governing targeting, bid strategy, pricing model, and scheduling within a campaign.
- [AdGroupCreate](adgroupcreate.md): The request body for creating a new ad group.
- [AdGroupUpdate](adgroupupdate.md): The request body for updating an existing ad group.
- [AdGroupQueryResponse](adgroupqueryresponse.md): The response object for an ad group query, containing matched results and pagination metadata.
- [AdGroupTargeting](adgrouptargeting.md): The comprehensive audience and placement configuration for an ad group.
- [AdGroupTargetingCreate](adgrouptargetingcreate.md): The targeting configuration for creating a new ad group, specifying audience dimensions to include or exclude.
- [AdGroupTargetingUpdate](adgrouptargetingupdate.md): The targeting configuration for updating an existing ad group, specifying audience dimensions to include or exclude.
- [BidStrategy](bidstrategy.md): Defines how an ad group or campaign competes in auctions, including bid type, optimization goal, and bid amount.
- [BidStrategyCreate](bidstrategycreate.md): The creation payload for configuring a bid strategy on an ad group or campaign.
- [BidStrategyUpdate](bidstrategyupdate.md): The request body for updating a bid strategy on an ad group or campaign.
- [CPAGoal](cpagoal.md): A deprecated cost-per-acquisition goal value. Use `bidStrategy` with `MAX_CONVERSIONS` instead.
- [CPAGoalCreate](cpagoalcreate.md): The deprecated request payload for setting a cost-per-acquisition goal. Use `bidStrategy` with `MAX_CONVERSIONS` instead.
- [CPAGoalUpdate](cpagoalupdate.md): The deprecated request payload for updating a cost-per-acquisition goal. Use `bidStrategy` with `MAX_CONVERSIONS` instead.
- [TargetingData](targetingdata.md): The shared include and exclude pattern for all ad group and campaign targeting dimensions.
- [TargetingDataCreate](targetingdatacreate.md): A targeting dimension value set for creating ad group or campaign targeting, specifying values to include or exclude.
