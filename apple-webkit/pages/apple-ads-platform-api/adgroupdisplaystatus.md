> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgroupdisplaystatus](https://developer.apple.com/documentation/apple-ads-platform-api/adgroupdisplaystatus)

# AdGroupDisplayStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Derived display status for an ad group, combining advertiser-set status with system status.

## Declaration

```
string AdGroupDisplayStatus
```

## Possible Values

- `CAMPAIGN_ON_HOLD`: The ad group is on hold because its parent campaign is on hold.
- `DELETED`: The ad group has been deleted.
- `LIMITED`: The ad group is serving but delivery is restricted. Check `systemStatusLimitingReasons` for details.
- `ON_HOLD`: The ad group is on hold due to a system issue. Check `systemStatusReasons` for details.
- `PAUSED`: The ad group has been paused by the advertiser.
- `PROCESSING`: The ad group is being processed and is not yet serving.
- `RUNNING`: The ad group is active and eligible to serve ads.

## See Also

- [AdGroupStatus](adgroupstatus.md): Advertiser-configurable serving status for an ad group.
- [AdGroupSystemStatus](adgroupsystemstatus.md): System-derived operational status reflecting whether an ad group is actively serving.
- [AdGroupSystemStatusReason](adgroupsystemstatusreason.md): Reasons that can cause an ad group’s system status to be `NOT_RUNNING`.
- [AdGroupSystemLimitedStatusReason](adgroupsystemlimitedstatusreason.md): Reasons that limit delivery for an ad group without fully stopping it.
- [BidStrategyType](bidstrategytype.md): Auction participation approach controlling how an ad group or campaign sets and adjusts bids.
- [BidStrategyGoal](bidstrategygoal.md): Optimization objective a bid strategy targets during Apple Ads auction competition.
- [PricingModel](pricingmodel.md): The unit of ad delivery that determines billing for an ad group, independent of how the account funds spend.
