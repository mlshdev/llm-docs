> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgroup/pricingmodel-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/adgroup/pricingmodel-data.typealias)

# AdGroup.PricingModel

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The unit of ad delivery an ad group is charged for, independent of how the account funds spend.

## Declaration

```
string AdGroup.PricingModel
```

## Possible Values

- `CPA`: Cost-per-action.
- `CPM`: Cost-per-thousand-impressions. Pairs with `billingEvent: IMPRESSIONS`.
- `CPT`: Cost-per-tap. Pairs with `billingEvent: TAPS`.

<a id="Discussion"></a>

## Discussion

- The `CPM` value pairs with `billingEvent: IMPRESSIONS`.
- The `CPT` value pairs with `billingEvent: TAPS`.

<a id="Example"></a>

### Example

```json
{
  "pricingModel": "CPA"
}
```

```json
{
  "pricingModel": "CPM"
}
```

```json
{
  "pricingModel": "CPT"
}
```

The `PricingModel` is distinct from `PaymentModel`. The `PricingModel` (`CPA`, `CPM`, or `CPT`) determines the delivery unit an ad group is charged for. The `PaymentModel` (`PAYG` or `LOC`) determines how the advertiser’s account funds that spend. The two are unrelated enums on unrelated resources.
