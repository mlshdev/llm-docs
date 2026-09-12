> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpricerange](https://developer.apple.com/documentation/intents/inpricerange)

# INPriceRange (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Price information, as a range of possible values.

## Declaration

```swift
class INPriceRange
```

<a id="overview"></a>

## Overview

An [INPriceRange](inpricerange.md) object encapsulates pricing information for a response that involves a charge for services. Price range objects can specify an exact price, a minimum price, a maximum price, or a specific price range.

You create price range objects when providing a response that includes pricing information. Use the price range objects to offer a quote on the cost of the services you are providing, to specify price tiers for services, or to specify more specific pricing information. The information you provide is displayed to the user in appropriate places.

## Topics

### Creating a Price Range Object

- [init(price:currencyCode:)](inpricerange/init%28price_currencycode_%29.md): Initializes the object with the specified price information.
- [init(firstPrice:secondPrice:currencyCode:)](inpricerange/init%28firstprice_secondprice_currencycode_%29.md): Initializes the object with the specified range of prices.
- [init(maximumPrice:currencyCode:)](inpricerange/init%28maximumprice_currencycode_%29.md): Initializes the object with the specified maximum price information.
- [init(minimumPrice:currencyCode:)](inpricerange/init%28minimumprice_currencycode_%29.md): Initializes the object with the specified minimum price information.

### Getting the Price Range Information

- [minimumPrice](inpricerange/minimumprice.md): The minimum price.
- [maximumPrice](inpricerange/maximumprice.md): The maximum price.
- [currencyCode](inpricerange/currencycode.md): The ISO 4217 currency code that applies to the price information.

### Initializers

- [init(coder:)](inpricerange/init%28coder_%29.md)
- [init(rangeBetweenPrice:andPrice:currencyCode:)](inpricerange/init%28rangebetweenprice_andprice_currencycode_%29.md)

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

- [INCurrencyAmount](incurrencyamount.md): An amount of money to transfer during a financial transaction.

# INPriceRange (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Price information, as a range of possible values.

## Declaration

```objectivec
@interface INPriceRange : NSObject
```

<a id="overview"></a>

## Overview

An [INPriceRange](inpricerange.md) object encapsulates pricing information for a response that involves a charge for services. Price range objects can specify an exact price, a minimum price, a maximum price, or a specific price range.

You create price range objects when providing a response that includes pricing information. Use the price range objects to offer a quote on the cost of the services you are providing, to specify price tiers for services, or to specify more specific pricing information. The information you provide is displayed to the user in appropriate places.

## Topics

### Creating a Price Range Object

- [initWithPrice:currencyCode:](inpricerange/init%28price_currencycode_%29.md): Initializes the object with the specified price information.
- [initWithRangeBetweenPrice:andPrice:currencyCode:](inpricerange/init%28firstprice_secondprice_currencycode_%29.md): Initializes the object with the specified range of prices.
- [initWithMaximumPrice:currencyCode:](inpricerange/init%28maximumprice_currencycode_%29.md): Initializes the object with the specified maximum price information.
- [initWithMinimumPrice:currencyCode:](inpricerange/init%28minimumprice_currencycode_%29.md): Initializes the object with the specified minimum price information.

### Getting the Price Range Information

- [minimumPrice](inpricerange/minimumprice.md): The minimum price.
- [maximumPrice](inpricerange/maximumprice.md): The maximum price.
- [currencyCode](inpricerange/currencycode.md): The ISO 4217 currency code that applies to the price information.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Monetary

- [INCurrencyAmount](incurrencyamount.md): An amount of money to transfer during a financial transaction.
