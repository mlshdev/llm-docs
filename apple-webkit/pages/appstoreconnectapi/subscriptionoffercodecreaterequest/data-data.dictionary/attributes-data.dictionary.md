> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionoffercodecreaterequest/data-data.dictionary/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionoffercodecreaterequest/data-data.dictionary/attributes-data.dictionary)

# SubscriptionOfferCodeCreateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

Attributes that describe a subscription offer code create request resource.

## Declaration

```
object SubscriptionOfferCodeCreateRequest.Data.Attributes
```

## Properties

- `autoRenewEnabled` — `boolean`:
- `customerEligibilities` — `[SubscriptionCustomerEligibility]` (required):
- `duration` — `SubscriptionOfferDuration` (required):
- `name` — `string` (required):
- `numberOfPeriods` — `integer` (required):
- `offerEligibility` — `SubscriptionOfferEligibility` (required):
- `offerMode` — `SubscriptionOfferMode` (required):
- `targetSubscriptionPlanType` — `SubscriptionPlanType`:

## See Also

### Objects

- [SubscriptionOfferCodeCreateRequest.Data.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
