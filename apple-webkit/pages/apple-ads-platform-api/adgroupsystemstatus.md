> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgroupsystemstatus](https://developer.apple.com/documentation/apple-ads-platform-api/adgroupsystemstatus)

# AdGroupSystemStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

System-derived operational status reflecting whether an ad group is actively serving.

## Declaration

```
string AdGroupSystemStatus
```

## Possible Values

- `RUNNING`: The ad group is active and serving ads.
- `NOT_RUNNING`: The ad group is not serving ads. Check `systemStatusReasons` for the specific cause.

## See Also

- [AdGroupStatus](adgroupstatus.md): Advertiser-configurable serving status for an ad group.
- [AdGroupDisplayStatus](adgroupdisplaystatus.md): Derived display status for an ad group, combining advertiser-set status with system status.
- [AdGroupSystemStatusReason](adgroupsystemstatusreason.md): Reasons that can cause an ad group’s system status to be `NOT_RUNNING`.
- [AdGroupSystemLimitedStatusReason](adgroupsystemlimitedstatusreason.md): Reasons that limit delivery for an ad group without fully stopping it.
- [BidStrategyType](bidstrategytype.md): Auction participation approach controlling how an ad group or campaign sets and adjusts bids.
- [BidStrategyGoal](bidstrategygoal.md): Optimization objective a bid strategy targets during Apple Ads auction competition.
- [PricingModel](pricingmodel.md): The unit of ad delivery that determines billing for an ad group, independent of how the account funds spend.
