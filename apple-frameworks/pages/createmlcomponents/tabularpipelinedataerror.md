> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/tabularpipelinedataerror](https://developer.apple.com/documentation/createmlcomponents/tabularpipelinedataerror)

# TabularPipelineDataError

**Framework:** Create ML Components  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Errors related to tabular pipeline data affinity problems.

## Declaration

```swift
enum TabularPipelineDataError
```

## Topics

### Getting the cases

- [TabularPipelineDataError.incorrectType(operation:columnName:actual:expected:)](tabularpipelinedataerror/incorrecttype%28operation_columnname_actual_expected_%29.md): A column has an incorrect type.
- [TabularPipelineDataError.missingColumn(operation:columnName:)](tabularpipelinedataerror/missingcolumn%28operation_columnname_%29.md): A column is missing from the data frame.
- [TabularPipelineDataError.missingValues(operation:columnName:)](tabularpipelinedataerror/missingvalues%28operation_columnname_%29.md): The selected column has missing values.

### Getting the debug description

- [debugDescription](tabularpipelinedataerror/debugdescription.md): A text representation of the error.

### Default Implementations

- [CustomDebugStringConvertible Implementations](tabularpipelinedataerror/customdebugstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [LocalizedError](../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [AudioPreprocessingError](audiopreprocessingerror.md): Audio preprocessing errors.
- [AudioReaderError](audioreadererror.md): Audio reader errors.
- [CompatibilityError](compatibilityerror.md): A compatibility error.
- [ConcatenationError](concatenationerror.md): Errors thrown when concatenating numeric values.
- [DatasetError](dataseterror.md): Dataset processing errors.
- [EstimatorEncodingError](estimatorencodingerror.md): An estimator encoding error.
- [ModelCompatibilityError](modelcompatibilityerror.md): Errors related to CoreML model compatibility.
- [ModelUpdateError](modelupdateerror.md): An updatable model error.
- [OptimizationError](optimizationerror.md): An optimization error.
- [PipelineDataError](pipelinedataerror.md): Errors related to pipeline data affinity problems.
- [SerializationError](serializationerror.md): A serialization error.
- [VideoReaderError](videoreadererror.md): Video loader errors.
