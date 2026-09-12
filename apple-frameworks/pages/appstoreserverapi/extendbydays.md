> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/extendbydays](https://developer.apple.com/documentation/appstoreserverapi/extendbydays)

# extendByDays

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.1+

The number of days to extend the subscription renewal date.

## Declaration

```
int32 extendByDays
```

<a id="Discussion"></a>

## Discussion

The number of days is a number from 1 to 90.

## See Also

### Request data types

- [extendReasonCode](extendreasoncode.md): The code that represents the reason for the subscription-renewal-date extension.
- [requestIdentifier](requestidentifier.md): A string that contains a unique identifier you provide to track each subscription-renewal-date extension request.
