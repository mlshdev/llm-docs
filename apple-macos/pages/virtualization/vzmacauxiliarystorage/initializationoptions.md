> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacauxiliarystorage/initializationoptions](https://developer.apple.com/documentation/virtualization/vzmacauxiliarystorage/initializationoptions)

# VZMacAuxiliaryStorage.InitializationOptions (Swift)

**Framework:** Virtualization  
**Kind:** Structure  
**Availability:** macOS 12.0+

Options you can set when creating new auxiliary storage.

## Declaration

```swift
struct InitializationOptions
```

## Topics

### Mac auxiliary storage structure

- [init(rawValue:)](initializationoptions/init%28rawvalue_%29.md): Creates a new initialization options structure with the value you supply.

### Controlling overwrites

- [allowOverwrite](initializationoptions/allowoverwrite.md): A Boolean value that indicates whether the VM can overwrite an existing auxiliary storage file.
- [allowOverwrite](initializationoptions/allowoverwrite.md): A Boolean value that indicates whether the VM can overwrite an existing auxiliary storage file.

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

# VZMacAuxiliaryStorageInitializationOptions (Objective-C)

**Framework:** Virtualization  
**Kind:** Enumeration  
**Availability:** macOS 12.0+

Options you can set when creating new auxiliary storage.

## Declaration

```objectivec
enum VZMacAuxiliaryStorageInitializationOptions : NSUInteger;
```

## Topics

### Controlling overwrites

- [VZMacAuxiliaryStorageInitializationOptionAllowOverwrite](initializationoptions/allowoverwrite.md): A Boolean value that indicates whether the VM can overwrite an existing auxiliary storage file.
- [VZMacAuxiliaryStorageInitializationOptionAllowOverwrite](initializationoptions/allowoverwrite.md): A Boolean value that indicates whether the VM can overwrite an existing auxiliary storage file.
