> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlcreateerror/io(reason:)](https://developer.apple.com/documentation/createml/mlcreateerror/io(reason:))

# MLCreateError.io(reason:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

An error that indicates an I/O failure.

## Declaration

```swift
case io(reason: String)
```

## See Also

### Identifying errors

- [MLCreateError.cancelled](cancelled.md): An error that indicates you canceled the training session.
- [MLCreateError.incompatibleParameters(parameter:originalValue:newValue:)](incompatibleparameters%28parameter_originalvalue_newvalue_%29.md): An error that indicates the training session parameters are incompatible.
- [MLCreateError.modifiedTrainingData](modifiedtrainingdata.md): An error that indicates the training data is different from the data when you created the session.
- [MLCreateError.type(reason:)](type%28reason_%29.md): An error that indicates a missing or incorrect type.
- [MLCreateError.generic(reason:)](generic%28reason_%29.md): An error that indicates a failure not covered by one of the other errors.
- [MLCreateErrorDomain](../mlcreateerrordomain.md): A global constant that defines the domain for Create ML errors.
