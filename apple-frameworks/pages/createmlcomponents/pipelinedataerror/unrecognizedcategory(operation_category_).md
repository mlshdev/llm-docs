> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/pipelinedataerror/unrecognizedcategory(operation:category:)](https://developer.apple.com/documentation/createmlcomponents/pipelinedataerror/unrecognizedcategory(operation:category:))

# PipelineDataError.unrecognizedCategory(operation:category:)

**Framework:** Create ML Components  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

An error that indicates that a new category was encountered after fitting.

## Declaration

```swift
case unrecognizedCategory(operation: String, category: String)
```

## See Also

### Analyzing the error

- [PipelineDataError.emptyInput(operation:)](emptyinput%28operation_%29.md): An error that indicates that the input to fit is empty.
- [PipelineDataError.incompatibleConfiguration(operation:debugDescription:)](incompatibleconfiguration%28operation_debugdescription_%29.md): An error that indicates that an input is not compatible with an operation’s configuration.
- [PipelineDataError.incompatibleDataFormat(operation:debugDescription:)](incompatibledataformat%28operation_debugdescription_%29.md): An error that indicates that an input doesn’t have the expected data format.
- [PipelineDataError.incompatibleShape(\_:debugDescription:)](incompatibleshape%28__debugdescription_%29.md): An error that indicates that an input’s doesn’t have the expected shape for the operation.
- [PipelineDataError.missingAnnotation(operation:)](missingannotation%28operation_%29.md): An error that indicates that an expected annotation is missing.
- [PipelineDataError.missingValue(operation:)](missingvalue%28operation_%29.md): An error that indicates that an expected value is missing.
