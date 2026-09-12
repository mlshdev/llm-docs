> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionoffercode/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionoffercode/attributes-data.dictionary)

# SubscriptionOfferCode.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 2.0+

Attributes that describe a subscription offer code resource.

## Declaration

```
object SubscriptionOfferCode.Attributes
```

## Properties

- `active` — `boolean`:
- `autoRenewEnabled` — `boolean`:
- `customerEligibilities` — `[SubscriptionCustomerEligibility]`:
- `duration` — `SubscriptionOfferDuration`:
- `name` — `string`:
- `numberOfPeriods` — `integer`:
- `offerEligibility` — `SubscriptionOfferEligibility`:
- `offerMode` — `SubscriptionOfferMode`:
- `productionCodeCount` — `integer`:
- `sandboxCodeCount` — `integer`:
- `targetSubscriptionPlanType` — `SubscriptionPlanType`:
- `totalNumberOfCodes` — `integer`:

## See Also

### Objects and types

- [SubscriptionOfferDuration](../subscriptionofferduration.md): A length of time that can be assigned to a subscription.
- [SubscriptionOfferEligibility](../subscriptionoffereligibility.md): A string that represents the eligibility of a subscription offer.
- [SubscriptionCustomerEligibility](../subscriptioncustomereligibility.md): A string that represents a customer’s eligibility for a subscription offer.
- [SubscriptionOfferMode](../subscriptionoffermode.md): A string that indicates the payment mode of a subscription offer.
- [SubscriptionOfferCode.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
