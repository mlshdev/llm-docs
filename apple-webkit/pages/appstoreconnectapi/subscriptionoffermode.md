> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/subscriptionoffermode](https://developer.apple.com/documentation/appstoreconnectapi/subscriptionoffermode)

# SubscriptionOfferMode

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Type  
**Availability:** App Store Connect API 2.0+

A string that indicates the payment mode of a subscription offer.

## Declaration

```
string SubscriptionOfferMode
```

## Possible Values

- `PAY_AS_YOU_GO`: A constant that indicates a subscription offer is billed over multiple billing periods.
- `PAY_UP_FRONT`: A constant that indicates a subscription offer is billed one time, up front.
- `FREE_TRIAL`: A constant that indicates a subscription offer is a free trial.

<a id="Discussion"></a>

## Discussion

## See Also

### Objects and types

- [SubscriptionOfferCode.Attributes](subscriptionoffercode/attributes-data.dictionary.md): Attributes that describe a subscription offer code resource.
- [SubscriptionOfferDuration](subscriptionofferduration.md): A length of time that can be assigned to a subscription.
- [SubscriptionOfferEligibility](subscriptionoffereligibility.md): A string that represents the eligibility of a subscription offer.
- [SubscriptionCustomerEligibility](subscriptioncustomereligibility.md): A string that represents a customer’s eligibility for a subscription offer.
- [SubscriptionOfferCode.Relationships](subscriptionoffercode/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
