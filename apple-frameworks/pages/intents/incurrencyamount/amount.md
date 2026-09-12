> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incurrencyamount/amount](https://developer.apple.com/documentation/intents/incurrencyamount/amount)

# amount (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

The monetary amount associated with the currency.

## Declaration

```swift
@NSCopying var amount: NSDecimalNumber? { get }
```

<a id="Discussion"></a>

## Discussion

This value in the [currencyCode](currencycode.md) property determines the currency designator applied to this number.

## See Also

### Getting the Currency Information

- [currencyCode](currencycode.md): The ISO 4217 currency code that applies to the monetary amount.

# amount (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

The monetary amount associated with the currency.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDecimalNumber * amount;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSDecimalNumber * amount;
```

<a id="Discussion"></a>

## Discussion

This value in the [currencyCode](currencycode.md) property determines the currency designator applied to this number.

## See Also

### Getting the Currency Information

- [currencyCode](currencycode.md): The ISO 4217 currency code that applies to the monetary amount.
