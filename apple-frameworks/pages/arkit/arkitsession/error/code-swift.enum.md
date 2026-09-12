> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arkitsession/error/code-swift.enum](https://developer.apple.com/documentation/arkit/arkitsession/error/code-swift.enum)

# ARKitSession.Error.Code

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** macOS 26.0+ · visionOS 1.0+

The error codes for ARKit sessions.

## Declaration

```swift
enum Code
```

## Topics

### Determining the cause of session errors

- [ARKitSession.Error.Code.dataProviderFailedToRun](code-swift.enum/dataproviderfailedtorun.md): The error code for when a data provider fails to run.
- [ARKitSession.Error.Code.dataProviderNotAuthorized](code-swift.enum/dataprovidernotauthorized.md): The error code for when a data provider is missing at least one authorization it needs to run.

### Instance Properties

- [description](code-swift.enum/description.md): A textual representation of the code.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting ARKit errors

- [dataProvider](dataprovider.md): The data provider that causes an error in a session, if any.
- [code](code-swift.property.md): The error code for an ARKit session error.
- [errorDescription](errordescription.md): A localized message that describes the error that occurred.
