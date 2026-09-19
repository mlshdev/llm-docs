> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inridefarelineitem/price

# price (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The cost value of the line item.

## Declaration

```swift
var price: NSDecimalNumber! { get }
```

<a id="Discussion"></a>

## Discussion

This value in the [currencyCode](currencycode.md) property determines the currency designator applied to this number. Siri and Maps display the line item’s title separately from the price information.

## See Also

### Getting the Line Item Information

- [title](title.md): The localized string containing a description of the charge.
- [currencyCode](currencycode.md): The ISO 4217 currency code that applies to the price information.

# price (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The cost value of the line item.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDecimalNumber * price;
```

<a id="Discussion"></a>

## Discussion

This value in the [currencyCode](currencycode.md) property determines the currency designator applied to this number. Siri and Maps display the line item’s title separately from the price information.

## See Also

### Getting the Line Item Information

- [title](title.md): The localized string containing a description of the charge.
- [currencyCode](currencycode.md): The ISO 4217 currency code that applies to the price information.
