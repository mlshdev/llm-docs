> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreadererror/storeandforwardtokenissuerchanged](https://developer.apple.com/documentation/proximityreader/paymentcardreadererror/storeandforwardtokenissuerchanged)

# PaymentCardReaderError.storeAndForwardTokenIssuerChanged

**Framework:** ProximityReader  
**Kind:** Case  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

An error that indicates the current Store and Forward mode has payments from a different token issuer.

## Declaration

```swift
case storeAndForwardTokenIssuerChanged
```

<a id="discussion"></a>

## Discussion

You must process the previous token issuer payments and create a new Store and Forward session.
