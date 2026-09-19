> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inridefarelineitem/title

# title (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The localized string containing a description of the charge.

## Declaration

```swift
var title: String! { get }
```

<a id="Discussion"></a>

## Discussion

This property contains a user-readable string describing the purpose of the charge. For example, it might contain the string “Base fare” or “Per-mile charge”. Siri and Maps display this information separately from the price information.

## See Also

### Getting the Line Item Information

- [price](price.md): The cost value of the line item.
- [currencyCode](currencycode.md): The ISO 4217 currency code that applies to the price information.

# title (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The localized string containing a description of the charge.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * title;
```

<a id="Discussion"></a>

## Discussion

This property contains a user-readable string describing the purpose of the charge. For example, it might contain the string “Base fare” or “Per-mile charge”. Siri and Maps display this information separately from the price information.

## See Also

### Getting the Line Item Information

- [price](price.md): The cost value of the line item.
- [currencyCode](currencycode.md): The ISO 4217 currency code that applies to the price information.
