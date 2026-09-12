> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzefivariablestore](https://developer.apple.com/documentation/virtualization/vzefivariablestore)

# VZEFIVariableStore (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

An object that represents the Extensible Firmware Interface (EFI) variable store that contains NVRAM variables the EFI exposes.

## Declaration

```swift
class VZEFIVariableStore
```

## Topics

### Creating the variable store

- [init(creatingVariableStoreAt:options:)](vzefivariablestore/init%28creatingvariablestoreat_options_%29.md): Creates a new EFI variable store at specified the URL on the filesystem, initialization options, and error-return variable.
- [init(url:)](vzefivariablestore/init%28url_%29-83pcn.md): Initialize the variable store from the URL of an existing file.
- [VZEFIVariableStore.InitializationOptions](vzefivariablestore/initializationoptions.md): Constants that describe the options available when creating a new Extensible Firmware Interface (EFI) variable store.

### Instance properties

- [url](vzefivariablestore/url.md): The URL of the variable store on the local file system.

### Initializers

- [init(URL:)](vzefivariablestore/init%28url_%29-8ewtl.md)
- [init(creatingVariableStoreAtURL:options:)](vzefivariablestore/init%28creatingvariablestoreaturl_options_%29.md)

### Instance Properties

- [enrolledSecureBootSignatures](vzefivariablestore/enrolledsecurebootsignatures.md): The currently enrolled Key Exchange Key (KEK), allowed signature database (db), and forbidden signature database (dbx) signatures.
- [isSecureBootEnabled](vzefivariablestore/issecurebootenabled.md): A Boolean value that indicates whether Secure Boot is in an enabled state in the variable store.

### Instance Methods

- [disableSecureBoot()](vzefivariablestore/disablesecureboot%28%29.md): Disables Secure Boot while preserving the existing configuration.
- [enableSecureBoot(platformKey:)](vzefivariablestore/enablesecureboot%28platformkey_%29.md): Enables Secure Boot with a custom Platform Key.
- [enableSecureBootUsingDefaultPlatformKey()](vzefivariablestore/enablesecurebootusingdefaultplatformkey%28%29.md): Enables Secure Boot with an Apple-managed Platform Key.
- [enrollDefaultSecureBootSignatures()](vzefivariablestore/enrolldefaultsecurebootsignatures%28%29.md): Enrolls the default signatures to Secure Boot databases.
- [enrollSecureBootSignatures(\_:)](vzefivariablestore/enrollsecurebootsignatures%28__%29.md): Enrolls the given signatures to Secure Boot databases.
- [resetSecureBoot()](vzefivariablestore/resetsecureboot%28%29.md): Clears any previously applied Secure Boot configuration and disables Secure Boot.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Boot loaders

- [VZBootLoader](vzbootloader.md): The base class that defines the management of the initial process of the guest system.
- [VZLinuxBootLoader](vzlinuxbootloader.md): An object that loads and configures a Linux kernel as the guest system of your VM.
- [VZEFIBootLoader](vzefibootloader.md): The boot loader configuration the system uses to boot guest-operating systems that expect an Extensible Firmware Interface (EFI) ROM.

# VZEFIVariableStore (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

An object that represents the Extensible Firmware Interface (EFI) variable store that contains NVRAM variables the EFI exposes.

## Declaration

```objectivec
@interface VZEFIVariableStore : NSObject
```

## Topics

### Creating the variable store

- [initCreatingVariableStoreAtURL:options:error:](vzefivariablestore/init%28creatingvariablestoreat_options_%29.md): Creates a new EFI variable store at specified the URL on the filesystem, initialization options, and error-return variable.
- [initWithURL:](vzefivariablestore/init%28url_%29-83pcn.md): Initialize the variable store from the URL of an existing file.
- [VZEFIVariableStoreInitializationOptions](vzefivariablestore/initializationoptions.md): Constants that describe the options available when creating a new Extensible Firmware Interface (EFI) variable store.

### Instance properties

- [URL](vzefivariablestore/url.md): The URL of the variable store on the local file system.

### Instance Methods

- [disableSecureBootWithError:](vzefivariablestore/disablesecureboot%28%29.md): Disables Secure Boot while preserving the existing configuration.
- [enableSecureBootWithPlatformKey:error:](vzefivariablestore/enablesecureboot%28platformkey_%29.md): Enables Secure Boot with a custom Platform Key.
- [enableSecureBootUsingDefaultPlatformKeyWithError:](vzefivariablestore/enablesecurebootusingdefaultplatformkey%28%29.md): Enables Secure Boot with an Apple-managed Platform Key.
- [enrollDefaultSecureBootSignaturesWithError:](vzefivariablestore/enrolldefaultsecurebootsignatures%28%29.md): Enrolls the default signatures to Secure Boot databases.
- [enrollSecureBootSignatures:error:](vzefivariablestore/enrollsecurebootsignatures%28__%29.md): Enrolls the given signatures to Secure Boot databases.
- [getEnrolledSecureBootSignaturesWithError:](vzefivariablestore/getenrolledsecurebootsignatureswitherror_.md): Returns the currently enrolled Secure Boot signatures in the Key Exchange Key (KEK), allowed signature (db), and forbidden signature (dbx) databases.
- [getSecureBootEnabled:error:](vzefivariablestore/getsecurebootenabled_error_.md): Returns a Boolean value that indicates whether Secure Boot is in an enabled state in the variable store.
- [resetSecureBootWithError:](vzefivariablestore/resetsecureboot%28%29.md): Clears any previously applied Secure Boot configuration and disables Secure Boot.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Boot loaders

- [VZBootLoader](vzbootloader.md): The base class that defines the management of the initial process of the guest system.
- [VZLinuxBootLoader](vzlinuxbootloader.md): An object that loads and configures a Linux kernel as the guest system of your VM.
- [VZEFIBootLoader](vzefibootloader.md): The boot loader configuration the system uses to boot guest-operating systems that expect an Extensible Firmware Interface (EFI) ROM.
