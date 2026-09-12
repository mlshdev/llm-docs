> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/mlmodelimagefeatureextractor/error](https://developer.apple.com/documentation/createmlcomponents/mlmodelimagefeatureextractor/error)

# MLModelImageFeatureExtractor.Error

**Framework:** Create ML Components  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

CoreML Extraction error.

## Declaration

```swift
enum Error
```

## Topics

### Analyzing the error

- [MLModelImageFeatureExtractor.Error.invalidInput(\_:)](error/invalidinput%28__%29.md): An error indicating that the mlmodel does not take required input.
- [MLModelImageFeatureExtractor.Error.invalidOutput(\_:)](error/invalidoutput%28__%29.md): An error indicating that the mlmodel does not produce the required output.

### Getting the debug description

- [debugDescription](error/debugdescription.md): A text representation of the error.

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Applying

- [applied(to:eventHandler:)](applied%28to_eventhandler_%29.md): Uses the CoreML model to create image features from the input pixel buffer.
