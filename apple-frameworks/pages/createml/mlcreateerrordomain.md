> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlcreateerrordomain](https://developer.apple.com/documentation/createml/mlcreateerrordomain)

# MLCreateErrorDomain

**Framework:** Create ML  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

A global constant that defines the domain for Create ML errors.

## Declaration

```swift
let MLCreateErrorDomain: String
```

## See Also

### Identifying errors

- [MLCreateError.cancelled](mlcreateerror/cancelled.md): An error that indicates you canceled the training session.
- [MLCreateError.incompatibleParameters(parameter:originalValue:newValue:)](mlcreateerror/incompatibleparameters%28parameter_originalvalue_newvalue_%29.md): An error that indicates the training session parameters are incompatible.
- [MLCreateError.modifiedTrainingData](mlcreateerror/modifiedtrainingdata.md): An error that indicates the training data is different from the data when you created the session.
- [MLCreateError.io(reason:)](mlcreateerror/io%28reason_%29.md): An error that indicates an I/O failure.
- [MLCreateError.type(reason:)](mlcreateerror/type%28reason_%29.md): An error that indicates a missing or incorrect type.
- [MLCreateError.generic(reason:)](mlcreateerror/generic%28reason_%29.md): An error that indicates a failure not covered by one of the other errors.
