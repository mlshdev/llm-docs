> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/cameraregionprovider/error](https://developer.apple.com/documentation/arkit/cameraregionprovider/error)

# CameraRegionProvider.Error

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 26.0+

A camera region error.

## Declaration

```swift
struct Error
```

## Topics

### Instance Properties

- [code](error/code-swift.property.md): The error code.
- [dataProvider](error/dataprovider.md): The data provider which encountered an error (if any).
- [description](error/description.md): A textual representation of this error.
- [errorDescription](error/errordescription.md): A localized message describing what error occurred.
- [failureReason](error/failurereason.md): A localized message describing the reason for the failure.
- [recoverySuggestion](error/recoverysuggestion.md): A localized message describing how one might recover from the failure.

### Enumerations

- [CameraRegionProvider.Error.Code](error/code-swift.enum.md): Enumeration of all possible camera region error codes.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](../../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
