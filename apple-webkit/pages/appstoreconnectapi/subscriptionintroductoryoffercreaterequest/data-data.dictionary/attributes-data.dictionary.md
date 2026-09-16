> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/subscriptionintroductoryoffercreaterequest/data-data.dictionary/attributes-data.dictionary

# SubscriptionIntroductoryOfferCreateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

Attributes that describe a subscription introductory offer create request resource.

## Declaration

```
object SubscriptionIntroductoryOfferCreateRequest.Data.Attributes
```

## Properties

- `duration` — `SubscriptionOfferDuration` (required):
- `endDate` — `date`:
- `numberOfPeriods` — `integer` (required):
- `offerMode` — `SubscriptionOfferMode` (required):
- `startDate` — `date`:
- `targetSubscriptionPlanType` — `SubscriptionPlanType`:

## See Also

### Objects

- [SubscriptionIntroductoryOfferCreateRequest.Data.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
