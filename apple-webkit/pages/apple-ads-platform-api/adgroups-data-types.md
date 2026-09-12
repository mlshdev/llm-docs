> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgroups-data-types](https://developer.apple.com/documentation/apple-ads-platform-api/adgroups-data-types)

# Ad Groups Data Types

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** API Collection  
**Availability:** Apple Ads Platform API 1.0+

Reference the enumerations and scalar types for ad groups.

## Topics

- [AdGroupStatus](adgroupstatus.md): Advertiser-configurable serving status for an ad group.
- [AdGroupSystemStatus](adgroupsystemstatus.md): System-derived operational status reflecting whether an ad group is actively serving.
- [AdGroupDisplayStatus](adgroupdisplaystatus.md): Derived display status for an ad group, combining advertiser-set status with system status.
- [AdGroupSystemStatusReason](adgroupsystemstatusreason.md): Reasons that can cause an ad group’s system status to be `NOT_RUNNING`.
- [AdGroupSystemLimitedStatusReason](adgroupsystemlimitedstatusreason.md): Reasons that limit delivery for an ad group without fully stopping it.
- [BidStrategyType](bidstrategytype.md): Auction participation approach controlling how an ad group or campaign sets and adjusts bids.
- [BidStrategyGoal](bidstrategygoal.md): Optimization objective a bid strategy targets during Apple Ads auction competition.
- [PricingModel](pricingmodel.md): The unit of ad delivery that determines billing for an ad group, independent of how the account funds spend.

## See Also

### Ad Groups

- [Ad Groups Endpoints](adgroups-endpoints.md): Create, retrieve, update, and delete ad groups.
- [Ad Groups Data Objects](adgroups-data-objects.md): Reference the request and response objects for ad group endpoints.
