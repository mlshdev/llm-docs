> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreader/options-swift.struct/returnreadresultimmediately](https://developer.apple.com/documentation/proximityreader/paymentcardreader/options-swift.struct/returnreadresultimmediately)

# returnReadResultImmediately

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 17.0+

A Boolean value that indicates whether the framework returns a result as soon as possible before closing the system UI.

## Declaration

```swift
var returnReadResultImmediately: Bool
```

<a id="discussion"></a>

## Discussion

The default value  is `false`.

After the framework reads a payment card, by default, the UI shows an animation before closing then returning the result. When you set this option to `true`, the framework returns [PaymentCardReadResult](../../paymentcardreadresult.md)  immediately without waiting for the system UI to close.

## See Also

### Setting read behaviors

- [includeErrorInReadResult](includeerrorinreadresult.md): A Boolean value that indicates whether the framework returns a result instead of throwing an error when some data is retrievable.
