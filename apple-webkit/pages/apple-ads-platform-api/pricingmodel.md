> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/pricingmodel](https://developer.apple.com/documentation/apple-ads-platform-api/pricingmodel)

# PricingModel

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The unit of ad delivery that determines billing for an ad group, independent of how the account funds spend.

## Declaration

```
string PricingModel
```

## Possible Values

- `CPA`: Cost-per-action.
- `CPM`: Cost-per-thousand-impressions. Pairs with `billingEvent: IMPRESSIONS`.
- `CPT`: Cost-per-tap. Pairs with `billingEvent: TAPS`.

<a id="Discussion"></a>

## Discussion

The `PricingModel` controls which event triggers billing for an ad group’s delivery: a tap, an impression, or an install action. You set it on `AdGroup` or `AdGroupCreate`, and it must match the parent campaign’s `billingEvent`.

The `PricingModel` is distinct from `PaymentModel`. The `PricingModel` (`CPA`, `CPM`, or `CPT`) determines the delivery unit that triggers billing for an ad group. The `PaymentModel` (`PAYG` or `LOC`) determines how the advertiser’s account funds that spend, pay-as-you-go billing versus a line of credit. The two are unrelated enums on unrelated resources. Don’t use one where the documentation calls for the other.

## See Also

- [AdGroupStatus](adgroupstatus.md): Advertiser-configurable serving status for an ad group.
- [AdGroupSystemStatus](adgroupsystemstatus.md): System-derived operational status reflecting whether an ad group is actively serving.
- [AdGroupDisplayStatus](adgroupdisplaystatus.md): Derived display status for an ad group, combining advertiser-set status with system status.
- [AdGroupSystemStatusReason](adgroupsystemstatusreason.md): Reasons that can cause an ad group’s system status to be `NOT_RUNNING`.
- [AdGroupSystemLimitedStatusReason](adgroupsystemlimitedstatusreason.md): Reasons that limit delivery for an ad group without fully stopping it.
- [BidStrategyType](bidstrategytype.md): Auction participation approach controlling how an ad group or campaign sets and adjusts bids.
- [BidStrategyGoal](bidstrategygoal.md): Optimization objective a bid strategy targets during Apple Ads auction competition.
