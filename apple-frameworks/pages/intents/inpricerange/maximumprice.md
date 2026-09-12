> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpricerange/maximumprice](https://developer.apple.com/documentation/intents/inpricerange/maximumprice)

# maximumPrice (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The maximum price.

## Declaration

```swift
var maximumPrice: NSDecimalNumber? { get }
```

<a id="Discussion"></a>

## Discussion

If no maximum price was specified at initialization time, the value in this property is `nil`.

## See Also

### Getting the Price Range Information

- [minimumPrice](minimumprice.md): The minimum price.
- [currencyCode](currencycode.md): The ISO 4217 currency code that applies to the price information.

# maximumPrice (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The maximum price.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDecimalNumber * maximumPrice;
```

```objectivec
@property (atomic, readonly, nullable) NSDecimalNumber * maximumPrice;
```

<a id="Discussion"></a>

## Discussion

If no maximum price was specified at initialization time, the value in this property is `nil`.

## See Also

### Getting the Price Range Information

- [minimumPrice](minimumprice.md): The minimum price.
- [currencyCode](currencycode.md): The ISO 4217 currency code that applies to the price information.
