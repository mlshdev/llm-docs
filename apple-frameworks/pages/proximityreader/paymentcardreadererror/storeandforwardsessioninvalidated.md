> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreadererror/storeandforwardsessioninvalidated](https://developer.apple.com/documentation/proximityreader/paymentcardreadererror/storeandforwardsessioninvalidated)

# PaymentCardReaderError.storeAndForwardSessionInvalidated

**Framework:** ProximityReader  
**Kind:** Case  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

An error that indicates the framework invalidated the current Store and Forward session, and it can’t execute additional reads.

## Declaration

```swift
case storeAndForwardSessionInvalidated
```

<a id="discussion"></a>

## Discussion

You must prepare an online session and prepare a new Store and Forward session.
