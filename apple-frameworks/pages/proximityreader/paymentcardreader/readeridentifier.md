> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/paymentcardreader/readeridentifier

# readerIdentifier

**Framework:** ProximityReader  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

The unique identifier for this card reader.

## Declaration

```swift
var readerIdentifier: String { get async throws }
```

<a id="discussion"></a>

## Discussion

Include this identifier in support requests or tracing incidents to help track down potential problems. If the identifier isn’t readable, getting this value throws a [PaymentCardReaderError](../paymentcardreadererror.md).

## See Also

### Getting the configuration details

- [options](options-swift.property.md): The defined configuration settings when the reader was created.
