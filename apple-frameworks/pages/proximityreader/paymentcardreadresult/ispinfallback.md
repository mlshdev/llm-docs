> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreadresult/ispinfallback](https://developer.apple.com/documentation/proximityreader/paymentcardreadresult/ispinfallback)

# isPINFallback

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

A Boolean value that indicates whether the PIN Fallback occurred.

## Declaration

```swift
let isPINFallback: Bool
```

<a id="discussion"></a>

## Discussion

When the framework sets this property to `true`, the `paymentCardData` is a PIN Fallback read.

## See Also

### Getting the PIN status

- [pinBypassed](pinbypassed.md): A Boolean value that indicates whether the consumer bypassed the PIN entry.
