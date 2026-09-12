> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreader/options-swift.struct](https://developer.apple.com/documentation/proximityreader/paymentcardreader/options-swift.struct)

# PaymentCardReader.Options

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

Additional information you use to configure a payment card reader.

## Declaration

```swift
struct Options
```

## Topics

### Creating an options structure

- [init(vasMerchants:)](options-swift.struct/init%28vasmerchants_%29.md): Deprecated. Creates a new options structure with the specified list of merchants.

### Getting the list of merchants

- [vasMerchants](options-swift.struct/vasmerchants.md): Deprecated. A global list of merchants to use when reading loyalty cards.

### Setting read behaviors

- [includeErrorInReadResult](options-swift.struct/includeerrorinreadresult.md): A Boolean value that indicates whether the framework returns a result instead of throwing an error when some data is retrievable.
- [returnReadResultImmediately](options-swift.struct/returnreadresultimmediately.md): A Boolean value that indicates whether the framework returns a result as soon as possible before closing the system UI.

### Initializers

- [init()](options-swift.struct/init%28%29.md): Creates a new options structure with default values

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a payment reader

- [init(options:)](init%28options_%29.md): Creates a payment card reader with the specified options.
