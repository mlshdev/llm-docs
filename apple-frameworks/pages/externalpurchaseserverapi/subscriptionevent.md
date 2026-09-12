> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalpurchaseserverapi/subscriptionevent](https://developer.apple.com/documentation/externalpurchaseserverapi/subscriptionevent)

# subscriptionEvent

**Interface language:** Data

**Framework:** External Purchase Server API  
**Kind:** Type  
**Availability:** External Purchase Server API 1.0.0+

The event in the subscription’s life cycle that the transaction represents.

## Declaration

```
string subscriptionEvent
```

## Possible Values

- `SUBSCRIPTION_START`:
- `RENEWAL`:
- `SUBSCRIPTION_CHANGE`:
- `SUBSCRIPTION_PAYMENT`:

## Mentioned In

- [Reporting tokens with transactions](reportwithtransactions.md)

<a id="Discussion"></a>

## Discussion

Allowed values: `SUBSCRIPTION_START`, `RENEWAL`, `SUBSCRIPTION_CHANGE`, `SUBSCRIPTION_PAYMENT`

Use the allowed values to indicate the subscription event in a [SubscriptionBuyLineItem](subscriptionbuylineitem.md), as follows:

- **`SUBSCRIPTION_START`**: The first time you report the subscription, for example, when a customer first subscribes.
- **`RENEWAL`**: A subscription renewal.
- **`SUBSCRIPTION_CHANGE`**: The customer upgraded or downgraded the subscription. An *upgrade* is a change to the subscription that adds features or functionality, or increases the subscription renewal period (such as from a weekly to a monthly renewal). A *downgrade* is a change to the subscription that reduces features or functionality, or decreases the subscription period (such as from an annual to a monthly renewal).
- **`SUBSCRIPTION_PAYMENT`**: A payment for the subscription.

## See Also

### Supplying subscription info

- [subscriptionDaysOfPaidService](subscriptiondaysofpaidservice.md): The total number of days of paid service for the subscription.
- [subscriptionEndDate](subscriptionenddate.md): The UNIX date, in milli-seconds, the subscription renewal cycle ends.
- [subscriptionStartDate](subscriptionstartdate.md): The UNIX date, in milli-seconds, of the start of the subscription renewal period.
- [referenceLineItemId](referencelineitemid.md): The line item identifier of another transaction, that the report references.
