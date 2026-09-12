> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalpurchaseserverapi/subscriptiondaysofpaidservice](https://developer.apple.com/documentation/externalpurchaseserverapi/subscriptiondaysofpaidservice)

# subscriptionDaysOfPaidService

**Interface language:** Data

**Framework:** External Purchase Server API  
**Kind:** Type  
**Availability:** External Purchase Server API 1.0.0+

The total number of days of paid service for the subscription.

## Declaration

```
int32 subscriptionDaysOfPaidService
```

<a id="Discussion"></a>

## Discussion

Provide the days of paid service for the subscription, calculating it as follows:

- For a new subscription, the days of paid service begins at `0` on the date a customer subscribes.
- When the subscription renews, add the number of paid days to the `subscriptionDaysOfPaidService` value.
- If you report a `SUBSCRIPTION_CHANGE` [subscriptionEvent](subscriptionevent.md), continue to accumulate the days of paid service.
- Don’t include days that the customer doesn’t pay for in the `subscriptionDaysOfPaidService` value. Unpaid days include free trials, or other offers or extensions of service that customers don’t pay for.

The days of paid service stop accumulating when:

- The customer cancels the subscription.
- You inactivate the subscription due to a payment issue.

## See Also

### Supplying subscription info

- [subscriptionEndDate](subscriptionenddate.md): The UNIX date, in milli-seconds, the subscription renewal cycle ends.
- [subscriptionEvent](subscriptionevent.md): The event in the subscription’s life cycle that the transaction represents.
- [subscriptionStartDate](subscriptionstartdate.md): The UNIX date, in milli-seconds, of the start of the subscription renewal period.
- [referenceLineItemId](referencelineitemid.md): The line item identifier of another transaction, that the report references.
