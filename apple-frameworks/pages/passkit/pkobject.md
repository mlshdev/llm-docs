> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkobject](https://developer.apple.com/documentation/passkit/pkobject)

# PKObject (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

An opaque type that acts as the superclass for the pass object.

## Declaration

```swift
class PKObject
```

<a id="overview"></a>

## Overview

Never use this class directly. Use the [PKPass](pkpass.md) or [PKPaymentPass](pkpaymentpass.md) classes instead.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PKPass](pkpass.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Related Documentation

- [Apple Pay Programming Guide](https://developer.apple.com/library/archive/ApplePay_Guide/index.html#//apple_ref/doc/uid/TP40014764)
- [Wallet Developer Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/PassKit_PG/index.html#//apple_ref/doc/uid/TP40012195)

### Common data types

- [PKAddPassButton](pkaddpassbutton.md): Provides a button that enables users to add passes to Wallet.
- [PKLabeledValue](pklabeledvalue.md): An object that can represent a detail about a payment card or other item.
- [AddPassToWalletButton](addpasstowalletbutton.md): A type that provides a button that enables people to add a new or existing pass to Apple Wallet.
- [AddPassToWalletButtonFilter](addpasstowalletbuttonfilter.md)
- [AddPassToWalletButtonResponse](addpasstowalletbuttonresponse.md)
- [AddPassToWalletButtonStyle](addpasstowalletbuttonstyle.md)

# PKObject (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

An opaque type that acts as the superclass for the pass object.

## Declaration

```objectivec
@interface PKObject : NSObject
```

<a id="overview"></a>

## Overview

Never use this class directly. Use the [PKPass](pkpass.md) or [PKPaymentPass](pkpaymentpass.md) classes instead.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PKPass](pkpass.md)

## See Also

### Related Documentation

- [Apple Pay Programming Guide](https://developer.apple.com/library/archive/ApplePay_Guide/index.html#//apple_ref/doc/uid/TP40014764)
- [Wallet Developer Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/PassKit_PG/index.html#//apple_ref/doc/uid/TP40012195)

### Common data types

- [PKAddPassButton](pkaddpassbutton.md): Provides a button that enables users to add passes to Wallet.
- [PKLabeledValue](pklabeledvalue.md): An object that can represent a detail about a payment card or other item.
