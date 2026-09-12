> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgroupsystemlimitedstatusreason](https://developer.apple.com/documentation/apple-ads-platform-api/adgroupsystemlimitedstatusreason)

# AdGroupSystemLimitedStatusReason

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Reasons that limit delivery for an ad group without fully stopping it.

## Declaration

```
string AdGroupSystemLimitedStatusReason
```

## Possible Values

- `LOCATION_POLICY_ISSUES`: The ad group’s location targeting contains areas with policy restrictions.
- `LOCATION_GROUP_ISSUES`: The ad group’s location group targeting has issues that limit delivery.
- `ADS_LIMITED`: One or more ads in the ad group are limited, reducing overall delivery.

## See Also

- [AdGroupStatus](adgroupstatus.md): Advertiser-configurable serving status for an ad group.
- [AdGroupSystemStatus](adgroupsystemstatus.md): System-derived operational status reflecting whether an ad group is actively serving.
- [AdGroupDisplayStatus](adgroupdisplaystatus.md): Derived display status for an ad group, combining advertiser-set status with system status.
- [AdGroupSystemStatusReason](adgroupsystemstatusreason.md): Reasons that can cause an ad group’s system status to be `NOT_RUNNING`.
- [BidStrategyType](bidstrategytype.md): Auction participation approach controlling how an ad group or campaign sets and adjusts bids.
- [BidStrategyGoal](bidstrategygoal.md): Optimization objective a bid strategy targets during Apple Ads auction competition.
- [PricingModel](pricingmodel.md): The unit of ad delivery that determines billing for an ad group, independent of how the account funds spend.
