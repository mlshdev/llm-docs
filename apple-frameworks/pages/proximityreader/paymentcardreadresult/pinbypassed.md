> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreadresult/pinbypassed](https://developer.apple.com/documentation/proximityreader/paymentcardreadresult/pinbypassed)

# pinBypassed

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

A Boolean value that indicates whether the consumer bypassed the PIN entry.

## Declaration

```swift
let pinBypassed: Bool
```

<a id="discussion"></a>

## Discussion

When the framework sets this property to `false`, the consumer didn’t bypass the PIN entry or it wasn’t required.

## See Also

### Getting the PIN status

- [isPINFallback](ispinfallback.md): A Boolean value that indicates whether the PIN Fallback occurred.
