> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalpurchaseserverapi/subscriptionstartdate](https://developer.apple.com/documentation/externalpurchaseserverapi/subscriptionstartdate)

# subscriptionStartDate

**Interface language:** Data

**Framework:** External Purchase Server API  
**Kind:** Type  
**Availability:** External Purchase Server API 1.0.0+

The UNIX date, in milli-seconds, of the start of the subscription renewal period.

## Declaration

```
int64 subscriptionStartDate
```

## See Also

### Supplying subscription info

- [subscriptionDaysOfPaidService](subscriptiondaysofpaidservice.md): The total number of days of paid service for the subscription.
- [subscriptionEndDate](subscriptionenddate.md): The UNIX date, in milli-seconds, the subscription renewal cycle ends.
- [subscriptionEvent](subscriptionevent.md): The event in the subscription’s life cycle that the transaction represents.
- [referenceLineItemId](referencelineitemid.md): The line item identifier of another transaction, that the report references.
