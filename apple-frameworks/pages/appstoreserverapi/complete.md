> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/complete](https://developer.apple.com/documentation/appstoreserverapi/complete)

# complete

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.7+

A Boolean value that indicates whether the App Store completed the request to extend a subscription renewal date to active subscribers.

## Declaration

```
boolean complete
```

<a id="Discussion"></a>

## Discussion

The request is complete when this value is `TRUE`. For more information about the subscription-renewal-date extension, see [Extend Subscription Renewal Dates for All Active Subscribers](extend-subscription-renewal-dates-for-all-active-subscribers.md).

## See Also

### Data types

- [completeDate](completedate.md): The UNIX time, in milliseconds, that the App Store completes a request to extend a subscription renewal date for eligible subscribers.
- [failedCount](failedcount.md): The count of subscriptions that fail to receive a subscription-renewal-date extension.
- [succeededCount](succeededcount.md): The count of subscriptions that successfully receive a subscription-renewal-date extension.
