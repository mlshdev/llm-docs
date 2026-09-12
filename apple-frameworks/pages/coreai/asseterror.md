> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/asseterror](https://developer.apple.com/documentation/coreai/asseterror)

# AssetError

**Framework:** Core AI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An error that occurs during model asset operations.

## Declaration

```swift
struct AssetError
```

## Topics

### Inspecting error information

- [kind](asseterror/kind-swift.property.md): The classification of the error.
- [debugMessage](asseterror/debugmessage.md): An optional message with additional debugging context.
- [errorDescription](asseterror/errordescription.md): A localized description of the error.

### Creating errors

- [init(kind:debugMessage:)](asseterror/init%28kind_debugmessage_%29.md): Creates an asset error.

### Defining error types

- [AssetError.Kind](asseterror/kind-swift.enum.md): The reasons an asset operation can fail.

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
