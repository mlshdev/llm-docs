> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalnumberhandler](https://developer.apple.com/documentation/foundation/nsdecimalnumberhandler)

# NSDecimalNumberHandler (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A class that adopts the decimal number behaviors protocol.

## Declaration

```swift
class NSDecimalNumberHandler
```

<a id="overview"></a>

## Overview

This class allows you to set the way an [NSDecimalNumber](nsdecimalnumber.md) object rounds off and handles errors, without having to create a custom class.

You can use an instance of this class as an argument to any of the [NSDecimalNumber](nsdecimalnumber.md) methods that end with `...Behavior:`. If you don’t think you need special behavior, you probably don’t need this class—it is likely that [NSDecimalNumber](nsdecimalnumber.md)’s default behavior will suit your needs.

For more information, see the [NSDecimalNumberBehaviors](nsdecimalnumberbehaviors.md) protocol specification.

## Topics

### Creating a Decimal Number Handler

- [default](nsdecimalnumberhandler/default.md): Returns the default instance of `NSDecimalNumberHandler`.

### Initializing a decimal number handler

- [init(roundingMode:scale:raiseOnExactness:raiseOnOverflow:raiseOnUnderflow:raiseOnDivideByZero:)](nsdecimalnumberhandler/init%28roundingmode_scale_raiseonexactness_raiseonoverflow_raiseonunderflow_raiseondividebyzero_%29.md): Returns an `NSDecimalNumberHandler` object initialized so it behaves as specified by the method’s arguments.

### Initializers

- [init(coder:)](nsdecimalnumberhandler/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSDecimalNumberBehaviors](nsdecimalnumberbehaviors.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring Rounding Behavior

- [roundingBehavior](numberformatter/roundingbehavior.md): The rounding behavior used by the receiver.
- [roundingIncrement](numberformatter/roundingincrement.md): The rounding increment used by the receiver.
- [roundingMode](numberformatter/roundingmode-swift.property.md): The rounding mode used by the receiver.

# NSDecimalNumberHandler (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A class that adopts the decimal number behaviors protocol.

## Declaration

```objectivec
@interface NSDecimalNumberHandler : NSObject
```

<a id="overview"></a>

## Overview

This class allows you to set the way an [NSDecimalNumber](nsdecimalnumber.md) object rounds off and handles errors, without having to create a custom class.

You can use an instance of this class as an argument to any of the [NSDecimalNumber](nsdecimalnumber.md) methods that end with `...Behavior:`. If you don’t think you need special behavior, you probably don’t need this class—it is likely that [NSDecimalNumber](nsdecimalnumber.md)’s default behavior will suit your needs.

For more information, see the [NSDecimalNumberBehaviors](nsdecimalnumberbehaviors.md) protocol specification.

## Topics

### Creating a Decimal Number Handler

- [defaultDecimalNumberHandler](nsdecimalnumberhandler/default.md): Returns the default instance of `NSDecimalNumberHandler`.
- [decimalNumberHandlerWithRoundingMode:scale:raiseOnExactness:raiseOnOverflow:raiseOnUnderflow:raiseOnDivideByZero:](nsdecimalnumberhandler/decimalnumberhandlerwithroundingmode_scale_raiseonexactness_raiseonoverflow_raiseonunderflow_raiseondividebyzero_.md): Returns an `NSDecimalNumberHandler` object with customized behavior.

### Initializing a decimal number handler

- [initWithRoundingMode:scale:raiseOnExactness:raiseOnOverflow:raiseOnUnderflow:raiseOnDivideByZero:](nsdecimalnumberhandler/init%28roundingmode_scale_raiseonexactness_raiseonoverflow_raiseonunderflow_raiseondividebyzero_%29.md): Returns an `NSDecimalNumberHandler` object initialized so it behaves as specified by the method’s arguments.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCoding](nscoding.md)
- [NSDecimalNumberBehaviors](nsdecimalnumberbehaviors.md)

## See Also

### Configuring Rounding Behavior

- [roundingBehavior](numberformatter/roundingbehavior.md): The rounding behavior used by the receiver.
- [roundingIncrement](numberformatter/roundingincrement.md): The rounding increment used by the receiver.
- [roundingMode](numberformatter/roundingmode-swift.property.md): The rounding mode used by the receiver.
