> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzefivariablestore/initializationoptions](https://developer.apple.com/documentation/virtualization/vzefivariablestore/initializationoptions)

# VZEFIVariableStore.InitializationOptions (Swift)

**Framework:** Virtualization  
**Kind:** Structure  
**Availability:** macOS 13.0+

Constants that describe the options available when creating a new Extensible Firmware Interface (EFI) variable store.

## Declaration

```swift
struct InitializationOptions
```

## Topics

### Creating an EFI initialization store

- [init(rawValue:)](initializationoptions/init%28rawvalue_%29.md): Creates a new EFI variable store with the specified value.

### Constants that control overwriting

- [allowOverwrite](initializationoptions/allowoverwrite.md): A Boolean value that indicates whether the framework can overwrite the EFI variable store.
- [allowOverwrite](initializationoptions/allowoverwrite.md): A Boolean value that indicates whether the framework can overwrite the EFI variable store.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Creating the variable store

- [init(creatingVariableStoreAt:options:)](init%28creatingvariablestoreat_options_%29.md): Creates a new EFI variable store at specified the URL on the filesystem, initialization options, and error-return variable.
- [init(url:)](init%28url_%29-83pcn.md): Initialize the variable store from the URL of an existing file.

# VZEFIVariableStoreInitializationOptions (Objective-C)

**Framework:** Virtualization  
**Kind:** Enumeration  
**Availability:** macOS 13.0+

Constants that describe the options available when creating a new Extensible Firmware Interface (EFI) variable store.

## Declaration

```objectivec
enum VZEFIVariableStoreInitializationOptions : NSUInteger;
```

## Topics

### Constants that control overwriting

- [VZEFIVariableStoreInitializationOptionAllowOverwrite](initializationoptions/allowoverwrite.md): A Boolean value that indicates whether the framework can overwrite the EFI variable store.
- [VZEFIVariableStoreInitializationOptionAllowOverwrite](initializationoptions/allowoverwrite.md): A Boolean value that indicates whether the framework can overwrite the EFI variable store.

## See Also

### Creating the variable store

- [initCreatingVariableStoreAtURL:options:error:](init%28creatingvariablestoreat_options_%29.md): Creates a new EFI variable store at specified the URL on the filesystem, initialization options, and error-return variable.
- [initWithURL:](init%28url_%29-83pcn.md): Initialize the variable store from the URL of an existing file.
