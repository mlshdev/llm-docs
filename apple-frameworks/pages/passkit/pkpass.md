> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpass](https://developer.apple.com/documentation/passkit/pkpass)

# PKPass (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

An object that represents a single pass.

## Declaration

```swift
class PKPass
```

<a id="overview"></a>

## Overview

The properties of this class correspond to fields of the pass. For details about what individual fields mean, see [Pass](../walletpasses/pass.md).

## Topics

### Creating a pass

- [init(data:)](pkpass/init%28data_%29.md): Creates a pass using the data you provide.

### Identifying a pass

- [passType](pkpass/passtype.md): The pass’s type.
- [PKPassType](pkpasstype.md): Types of passes.
- [secureElementPass](pkpass/secureelementpass.md): The pass that contains an accompanying credential that the device stores in the Secure Element.
- [serialNumber](pkpass/serialnumber.md): A value that uniquely identifies the pass.
- [passTypeIdentifier](pkpass/passtypeidentifier.md): The pass’s pass type identifier.
- [deviceName](pkpass/devicename.md): The name of the device that hosts the pass.
- [localizedName](pkpass/localizedname.md): The localized name for the pass’s template.
- [localizedDescription](pkpass/localizeddescription.md): The pass’s localized description.
- [isRemotePass](pkpass/isremotepass.md): A Boolean value that indicates whether the pass is on a paired device, such as an Apple Watch.
- [paymentPass](pkpass/paymentpass.md): Deprecated. The underlying payment pass.

### Getting the web service information

- [webServiceURL](pkpass/webserviceurl.md): The URL for the web service.
- [authenticationToken](pkpass/authenticationtoken.md): The token for authenticating update requests.

### Getting the display attributes

- [icon](pkpass/icon.md): The pass icon.
- [localizedValue(forFieldKey:)](pkpass/localizedvalue%28forfieldkey_%29.md): Returns the localized value for a specified field of the pass.
- [organizationName](pkpass/organizationname.md): The name of the organization that creates the pass.
- [relevantDate](pkpass/relevantdate.md): Deprecated. The date when the pass is most likely to be useful or necessary.
- [PKPassRelevantDate](pkpassrelevantdate.md)

### Getting the Wallet URL

- [passURL](pkpass/passurl.md): The URL that opens the pass in the Wallet app.

### Providing contextual information

- [userInfo](pkpass/userinfo.md): Developer-specific custom data.

### Instance Properties

- [relevantDates](pkpass/relevantdates.md)

## Relationships

### Inherits From

- [PKObject](pkobject.md)

### Inherited By

- [PKSecureElementPass](pksecureelementpass.md)

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
- [PKAddSecureElementPassConfiguration](pkaddsecureelementpassconfiguration.md): An object that describes the configuration of a secure element payment pass.
- [PKAddSecureElementPassViewController](pkaddsecureelementpassviewcontroller.md): A view controller that manages the addition of secure element payment passes.
- [PKAddPassesViewController](pkaddpassesviewcontroller.md): Lets your app show a pass and prompt the user to add that pass to the pass library.
- [AsyncShareablePassConfiguration](asyncshareablepassconfiguration.md)
- [PKShareSecureElementPassViewController](pksharesecureelementpassviewcontroller.md)
- [PKShareSecureElementPassViewControllerDelegate](pksharesecureelementpassviewcontrollerdelegate.md)
- [PKShareablePassMetadata.Preview](pkshareablepassmetadata/preview-swift.class.md)
- [PKShareSecureElementPassResult](pksharesecureelementpassresult.md)

# PKPass (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

An object that represents a single pass.

## Declaration

```objectivec
@interface PKPass : PKObject
```

<a id="overview"></a>

## Overview

The properties of this class correspond to fields of the pass. For details about what individual fields mean, see [Pass](../walletpasses/pass.md).

## Topics

### Creating a pass

- [initWithData:error:](pkpass/init%28data_%29.md): Creates a pass using the data you provide.

### Identifying a pass

- [passType](pkpass/passtype.md): The pass’s type.
- [PKPassType](pkpasstype.md): Types of passes.
- [secureElementPass](pkpass/secureelementpass.md): The pass that contains an accompanying credential that the device stores in the Secure Element.
- [serialNumber](pkpass/serialnumber.md): A value that uniquely identifies the pass.
- [passTypeIdentifier](pkpass/passtypeidentifier.md): The pass’s pass type identifier.
- [deviceName](pkpass/devicename.md): The name of the device that hosts the pass.
- [localizedName](pkpass/localizedname.md): The localized name for the pass’s template.
- [localizedDescription](pkpass/localizeddescription.md): The pass’s localized description.
- [remotePass](pkpass/isremotepass.md): A Boolean value that indicates whether the pass is on a paired device, such as an Apple Watch.
- [paymentPass](pkpass/paymentpass.md): Deprecated. The underlying payment pass.

### Getting the web service information

- [webServiceURL](pkpass/webserviceurl.md): The URL for the web service.
- [authenticationToken](pkpass/authenticationtoken.md): The token for authenticating update requests.

### Getting the display attributes

- [icon](pkpass/icon.md): The pass icon.
- [localizedValueForFieldKey:](pkpass/localizedvalue%28forfieldkey_%29.md): Returns the localized value for a specified field of the pass.
- [organizationName](pkpass/organizationname.md): The name of the organization that creates the pass.
- [relevantDate](pkpass/relevantdate.md): Deprecated. The date when the pass is most likely to be useful or necessary.
- [PKPassRelevantDate](pkpassrelevantdate.md)

### Getting the Wallet URL

- [passURL](pkpass/passurl.md): The URL that opens the pass in the Wallet app.

### Providing contextual information

- [userInfo](pkpass/userinfo.md): Developer-specific custom data.

### Instance Properties

- [relevantDates](pkpass/relevantdates.md)

## Relationships

### Inherits From

- [PKObject](pkobject.md)

### Inherited By

- [PKSecureElementPass](pksecureelementpass.md)

## See Also

### General purpose passes

- [PKSecureElementPass](pksecureelementpass.md): A pass with a credential that the device stores in a certified payment information chip.
- [PKAddSecureElementPassConfiguration](pkaddsecureelementpassconfiguration.md): An object that describes the configuration of a secure element payment pass.
- [PKAddSecureElementPassViewController](pkaddsecureelementpassviewcontroller.md): A view controller that manages the addition of secure element payment passes.
- [PKAddPassesViewController](pkaddpassesviewcontroller.md): Lets your app show a pass and prompt the user to add that pass to the pass library.
- [PKShareSecureElementPassViewController](pksharesecureelementpassviewcontroller.md)
- [PKShareSecureElementPassViewControllerDelegate](pksharesecureelementpassviewcontrollerdelegate.md)
- [PKShareablePassMetadataPreview](pkshareablepassmetadata/preview-swift.class.md)
- [PKShareSecureElementPassResult](pksharesecureelementpassresult.md)
