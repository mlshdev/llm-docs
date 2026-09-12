> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/accessorytrackingprovider/error](https://developer.apple.com/documentation/arkit/accessorytrackingprovider/error)

# AccessoryTrackingProvider.Error

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 26.0+

An accessory tracking error.

## Declaration

```swift
struct Error
```

## Topics

### Instance Properties

- [code](error/code-swift.property.md): The error code.
- [description](error/description.md): A textual representation of this error.
- [errorDescription](error/errordescription.md): A localized message describing what error occurred.
- [failureReason](error/failurereason.md): A localized message describing the reason for the failure.
- [recoverySuggestion](error/recoverysuggestion.md): A localized message describing how one might recover from the failure.
- [source](error/source.md): Source for an accessory if creating it failed.

### Enumerations

- [AccessoryTrackingProvider.Error.Code](error/code-swift.enum.md): Enumeration of all error codes.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](../../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
