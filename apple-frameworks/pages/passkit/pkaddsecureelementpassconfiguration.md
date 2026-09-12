> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddsecureelementpassconfiguration](https://developer.apple.com/documentation/passkit/pkaddsecureelementpassconfiguration)

# PKAddSecureElementPassConfiguration (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS · visionOS 1.0+

An object that describes the configuration of a secure element payment pass.

## Declaration

```swift
class PKAddSecureElementPassConfiguration
```

<a id="overview"></a>

## Overview

This class supports identity document configuration.

## Topics

### Managing the issuer identity

- [issuerIdentifier](pkaddsecureelementpassconfiguration/issueridentifier.md): An opaque value for the configuration.
- [localizedDescription](pkaddsecureelementpassconfiguration/localizeddescription.md): The configuration’s localized description.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PKAddCarKeyPassConfiguration](pkaddcarkeypassconfiguration.md)
- [PKAddIdentityDocumentConfiguration](pkaddidentitydocumentconfiguration.md)
- [PKAddShareablePassConfiguration](pkaddshareablepassconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### General purpose passes

- [PKSecureElementPass](pksecureelementpass.md): A pass with a credential that the device stores in a certified payment information chip.
- [PKAddSecureElementPassViewController](pkaddsecureelementpassviewcontroller.md): A view controller that manages the addition of secure element payment passes.
- [PKPass](pkpass.md): An object that represents a single pass.
- [PKAddPassesViewController](pkaddpassesviewcontroller.md): Lets your app show a pass and prompt the user to add that pass to the pass library.
- [AsyncShareablePassConfiguration](asyncshareablepassconfiguration.md)
- [PKShareSecureElementPassViewController](pksharesecureelementpassviewcontroller.md)
- [PKShareSecureElementPassViewControllerDelegate](pksharesecureelementpassviewcontrollerdelegate.md)
- [PKShareablePassMetadata.Preview](pkshareablepassmetadata/preview-swift.class.md)
- [PKShareSecureElementPassResult](pksharesecureelementpassresult.md)

# PKAddSecureElementPassConfiguration (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS · visionOS 1.0+

An object that describes the configuration of a secure element payment pass.

## Declaration

```objectivec
@interface PKAddSecureElementPassConfiguration : NSObject
```

<a id="overview"></a>

## Overview

This class supports identity document configuration.

## Topics

### Managing the issuer identity

- [issuerIdentifier](pkaddsecureelementpassconfiguration/issueridentifier.md): An opaque value for the configuration.
- [localizedDescription](pkaddsecureelementpassconfiguration/localizeddescription.md): The configuration’s localized description.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PKAddCarKeyPassConfiguration](pkaddcarkeypassconfiguration.md)
- [PKAddIdentityDocumentConfiguration](pkaddidentitydocumentconfiguration.md)
- [PKAddShareablePassConfiguration](pkaddshareablepassconfiguration.md)

## See Also

### General purpose passes

- [PKSecureElementPass](pksecureelementpass.md): A pass with a credential that the device stores in a certified payment information chip.
- [PKAddSecureElementPassViewController](pkaddsecureelementpassviewcontroller.md): A view controller that manages the addition of secure element payment passes.
- [PKPass](pkpass.md): An object that represents a single pass.
- [PKAddPassesViewController](pkaddpassesviewcontroller.md): Lets your app show a pass and prompt the user to add that pass to the pass library.
- [PKShareSecureElementPassViewController](pksharesecureelementpassviewcontroller.md)
- [PKShareSecureElementPassViewControllerDelegate](pksharesecureelementpassviewcontrollerdelegate.md)
- [PKShareablePassMetadataPreview](pkshareablepassmetadata/preview-swift.class.md)
- [PKShareSecureElementPassResult](pksharesecureelementpassresult.md)
