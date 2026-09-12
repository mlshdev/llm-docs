> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlcreateerror](https://developer.apple.com/documentation/createml/mlcreateerror)

# MLCreateError

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

The errors Create ML throws while performing various operations, such as training models, making predictions, writing models to a file system, and so on.

## Declaration

```swift
enum MLCreateError
```

## Topics

### Identifying errors

- [MLCreateError.cancelled](mlcreateerror/cancelled.md): An error that indicates you canceled the training session.
- [MLCreateError.incompatibleParameters(parameter:originalValue:newValue:)](mlcreateerror/incompatibleparameters%28parameter_originalvalue_newvalue_%29.md): An error that indicates the training session parameters are incompatible.
- [MLCreateError.modifiedTrainingData](mlcreateerror/modifiedtrainingdata.md): An error that indicates the training data is different from the data when you created the session.
- [MLCreateError.io(reason:)](mlcreateerror/io%28reason_%29.md): An error that indicates an I/O failure.
- [MLCreateError.type(reason:)](mlcreateerror/type%28reason_%29.md): An error that indicates a missing or incorrect type.
- [MLCreateError.generic(reason:)](mlcreateerror/generic%28reason_%29.md): An error that indicates a failure not covered by one of the other errors.
- [MLCreateErrorDomain](mlcreateerrordomain.md): A global constant that defines the domain for Create ML errors.

### Describing errors

- [description](mlcreateerror/description.md): A human-readable description of the error.
- [debugDescription](mlcreateerror/debugdescription.md): A human-readable description of the error that’s suitable for output during debugging.

### Describing errors in a user interface

- [errorCode](mlcreateerror/errorcode.md): The numeric code of this error.
- [errorUserInfo](mlcreateerror/erroruserinfo.md): A dictionary that provides additional information about the error.
- [errorDescription](mlcreateerror/errordescription.md): A localized, human-readable description of the error and why it occurred, if applicable.
- [failureReason](mlcreateerror/failurereason.md): A localized, human-readable reason behind the failure, if applicable.

### Default Implementations

- [CustomDebugStringConvertible Implementations](mlcreateerror/customdebugstringconvertible-implementations.md)
- [CustomNSError Implementations](mlcreateerror/customnserror-implementations.md)
- [CustomStringConvertible Implementations](mlcreateerror/customstringconvertible-implementations.md)
- [LocalizedError Implementations](mlcreateerror/localizederror-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomNSError](../foundation/customnserror.md)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [LocalizedError](../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [MLModelMetadata](mlmodelmetadata.md): Information about a model that’s stored in a Core ML model file.
- [MLSplitStrategy](mlsplitstrategy.md): Data partitioning approaches, typically for creating a validation dataset from a training dataset.
