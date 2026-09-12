> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreader/init(options:)](https://developer.apple.com/documentation/proximityreader/paymentcardreader/init(options:))

# init(options:)

**Framework:** ProximityReader  
**Kind:** Initializer  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

Creates a payment card reader with the specified options.

## Declaration

```swift
init(options: PaymentCardReader.Options = .init())
```

## Parameters

- `options`: The configuration settings for the reader.

<a id="discussion"></a>

## Discussion

Keep a strong reference to the returned object for the duration of the reader session.

## See Also

### Creating a payment reader

- [PaymentCardReader.Options](options-swift.struct.md): Additional information you use to configure a payment card reader.
