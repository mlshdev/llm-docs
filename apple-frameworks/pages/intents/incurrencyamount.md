> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incurrencyamount](https://developer.apple.com/documentation/intents/incurrencyamount)

# INCurrencyAmount (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

An amount of money to transfer during a financial transaction.

## Declaration

```swift
class INCurrencyAmount
```

<a id="overview"></a>

## Overview

An [INCurrencyAmount](incurrencyamount.md) object encapsulates a monetary value and the currency used to express that value. You use these objects to specify payment amounts when handling intents that involve the transfer of money.

## Topics

### Initializing a Currency Amount Object

- [init(amount:currencyCode:)](incurrencyamount/init%28amount_currencycode_%29.md): Initializes a currency amount object with the specified values.

### Getting the Currency Information

- [amount](incurrencyamount/amount.md): The monetary amount associated with the currency.
- [currencyCode](incurrencyamount/currencycode.md): The ISO 4217 currency code that applies to the monetary amount.

### Initializers

- [init(coder:)](incurrencyamount/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Monetary

- [INPriceRange](inpricerange.md): Price information, as a range of possible values.

# INCurrencyAmount (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

An amount of money to transfer during a financial transaction.

## Declaration

```objectivec
@interface INCurrencyAmount : NSObject
```

<a id="overview"></a>

## Overview

An [INCurrencyAmount](incurrencyamount.md) object encapsulates a monetary value and the currency used to express that value. You use these objects to specify payment amounts when handling intents that involve the transfer of money.

## Topics

### Initializing a Currency Amount Object

- [initWithAmount:currencyCode:](incurrencyamount/init%28amount_currencycode_%29.md): Initializes a currency amount object with the specified values.

### Getting the Currency Information

- [amount](incurrencyamount/amount.md): The monetary amount associated with the currency.
- [currencyCode](incurrencyamount/currencycode.md): The ISO 4217 currency code that applies to the monetary amount.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Monetary

- [INPriceRange](inpricerange.md): Price information, as a range of possible values.
