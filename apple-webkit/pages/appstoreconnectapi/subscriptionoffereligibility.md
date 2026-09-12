> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionoffereligibility](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionoffereligibility)

# SubscriptionOfferEligibility

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Type  
**Availability:** App Store Connect API 2.0+

A string that represents the eligibility of a subscription offer.

## Declaration

```
string SubscriptionOfferEligibility
```

## Possible Values

- `STACK_WITH_INTRO_OFFERS`: A subscription offer that customers can combine with an introductory offer.
- `REPLACE_INTRO_OFFERS`: A subscription offer that replaces an introductory offer.

## See Also

### Objects and types

- [SubscriptionOfferCode.Attributes](subscriptionoffercode/attributes-data.dictionary.md): Attributes that describe a subscription offer code resource.
- [SubscriptionOfferDuration](subscriptionofferduration.md): A length of time that can be assigned to a subscription.
- [SubscriptionCustomerEligibility](subscriptioncustomereligibility.md): A string that represents a customer’s eligibility for a subscription offer.
- [SubscriptionOfferMode](subscriptionoffermode.md): A string that indicates the payment mode of a subscription offer.
- [SubscriptionOfferCode.Relationships](subscriptionoffercode/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
