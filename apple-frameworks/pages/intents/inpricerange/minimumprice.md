> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inpricerange/minimumprice

# minimumPrice (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The minimum price.

## Declaration

```swift
var minimumPrice: NSDecimalNumber? { get }
```

<a id="Discussion"></a>

## Discussion

If no minimum price was specified at initialization time, the value in this property is `nil`.

## See Also

### Getting the Price Range Information

- [maximumPrice](maximumprice.md): The maximum price.
- [currencyCode](currencycode.md): The ISO 4217 currency code that applies to the price information.

# minimumPrice (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The minimum price.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDecimalNumber * minimumPrice;
```

```objectivec
@property (atomic, readonly, nullable) NSDecimalNumber * minimumPrice;
```

<a id="Discussion"></a>

## Discussion

If no minimum price was specified at initialization time, the value in this property is `nil`.

## See Also

### Getting the Price Range Information

- [maximumPrice](maximumprice.md): The maximum price.
- [currencyCode](currencycode.md): The ISO 4217 currency code that applies to the price information.
