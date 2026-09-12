> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arkitsession/error](https://developer.apple.com/documentation/arkit/arkitsession/error)

# ARKitSession.Error

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 1.0+

An error that might occur when running data providers on an ARKit session.

## Declaration

```swift
struct Error
```

## Topics

### Inspecting ARKit errors

- [dataProvider](error/dataprovider.md): The data provider that causes an error in a session, if any.
- [code](error/code-swift.property.md): The error code for an ARKit session error.
- [ARKitSession.Error.Code](error/code-swift.enum.md): The error codes for ARKit sessions.
- [errorDescription](error/errordescription.md): A localized message that describes the error that occurred.

### Providing recovery suggestions

- [recoverySuggestion](error/recoverysuggestion.md): A localized message that describes how someone might recover from the error.
- [failureReason](error/failurereason.md): A localized message that describes why the error occurred.

### Instance Properties

- [description](error/description.md): A textual representation of this error.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Error](https://developer.apple.com/documentation/swift/error)
- [LocalizedError](../../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Starting and stopping a session

- [init()](init%28%29.md): Creates a new session.
- [run(\_:)](run%28__%29.md): Runs a session with the data providers you supply.
- [stop()](stop%28%29.md): Stops all data providers running in this session.
