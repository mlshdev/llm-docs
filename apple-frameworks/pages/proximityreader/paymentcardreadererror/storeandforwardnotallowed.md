> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreadererror/storeandforwardnotallowed](https://developer.apple.com/documentation/proximityreader/paymentcardreadererror/storeandforwardnotallowed)

# PaymentCardReaderError.storeAndForwardNotAllowed

**Framework:** ProximityReader  
**Kind:** Case  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

An error that indicates the framework can’t create a Store and Forward session because:

## Declaration

```swift
case storeAndForwardNotAllowed
```

<a id="discussion"></a>

## Discussion

- There’s no previous online session.
- The person restarted their phone  after the online session creation, and they now require a new online session.
- More than 24 hours have passed since the last online session.
