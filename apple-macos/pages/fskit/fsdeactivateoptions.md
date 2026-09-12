> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsdeactivateoptions](https://developer.apple.com/documentation/fskit/fsdeactivateoptions)

# FSDeactivateOptions (Swift)

**Framework:** FSKit  
**Kind:** Structure  
**Availability:** macOS 15.4+

Options that affect the behavior of deactivate methods.

## Declaration

```swift
struct FSDeactivateOptions
```

## Topics

### Deactivation options

- [force](fsdeactivateoptions/force.md): An option to force deactivation.

### Working with raw values

- [init(rawValue:)](fsdeactivateoptions/init%28rawvalue_%29.md)

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

### Handling activation and deactivation

- [FSItem](fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSActivateResult](fsactivateresult.md): The result of an activate call.

# FSDeactivateOptions (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

Options that affect the behavior of deactivate methods.

## Declaration

```objectivec
enum FSDeactivateOptions : NSInteger;
```

## Topics

### Deactivation options

- [FSDeactivateOptionsForce](fsdeactivateoptions/force.md): An option to force deactivation.

## See Also

### Handling activation and deactivation

- [FSItem](fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSActivateResult](fsactivateresult.md): The result of an activate call.
