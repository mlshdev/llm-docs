> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pklabeledvalue](https://developer.apple.com/documentation/passkit/pklabeledvalue)

# PKLabeledValue (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 3.1+

An object that can represent a detail about a payment card or other item.

## Declaration

```swift
class PKLabeledValue
```

<a id="overview"></a>

## Overview

See [cardDetails](pkaddpaymentpassrequestconfiguration/carddetails.md).

## Topics

### Creating a labeled value

- [init(label:value:)](pklabeledvalue/init%28label_value_%29.md): Instantiates a new labeled value object with the specified label and value strings.

### Labeled value properties

- [label](pklabeledvalue/label.md): A string that contains the label for the value.
- [value](pklabeledvalue/value.md): A string that contains the value associated with a label.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Common data types

- [PKObject](pkobject.md): An opaque type that acts as the superclass for the pass object.
- [PKAddPassButton](pkaddpassbutton.md): Provides a button that enables users to add passes to Wallet.
- [AddPassToWalletButton](addpasstowalletbutton.md): A type that provides a button that enables people to add a new or existing pass to Apple Wallet.
- [AddPassToWalletButtonFilter](addpasstowalletbuttonfilter.md)
- [AddPassToWalletButtonResponse](addpasstowalletbuttonresponse.md)
- [AddPassToWalletButtonStyle](addpasstowalletbuttonstyle.md)

# PKLabeledValue (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 3.1+

An object that can represent a detail about a payment card or other item.

## Declaration

```objectivec
@interface PKLabeledValue : NSObject
```

<a id="overview"></a>

## Overview

See [cardDetails](pkaddpaymentpassrequestconfiguration/carddetails.md).

## Topics

### Creating a labeled value

- [initWithLabel:value:](pklabeledvalue/init%28label_value_%29.md): Instantiates a new labeled value object with the specified label and value strings.

### Labeled value properties

- [label](pklabeledvalue/label.md): A string that contains the label for the value.
- [value](pklabeledvalue/value.md): A string that contains the value associated with a label.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Common data types

- [PKObject](pkobject.md): An opaque type that acts as the superclass for the pass object.
- [PKAddPassButton](pkaddpassbutton.md): Provides a button that enables users to add passes to Wallet.
