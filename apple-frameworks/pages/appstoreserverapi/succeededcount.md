> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/succeededcount](https://developer.apple.com/documentation/appstoreserverapi/succeededcount)

# succeededCount

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.7+

The count of subscriptions that successfully receive a subscription-renewal-date extension.

## Declaration

```
int64 succeededCount
```

<a id="Discussion"></a>

## Discussion

For information about a subscription’s eligibility to receive a subscription-renewal-date extension, see [Extending the renewal date for auto-renewable subscriptions](extending-the-renewal-date-for-auto-renewable-subscriptions.md).

## See Also

### Data types

- [complete](complete.md): A Boolean value that indicates whether the App Store completed the request to extend a subscription renewal date to active subscribers.
- [completeDate](completedate.md): The UNIX time, in milliseconds, that the App Store completes a request to extend a subscription renewal date for eligible subscribers.
- [failedCount](failedcount.md): The count of subscriptions that fail to receive a subscription-renewal-date extension.
