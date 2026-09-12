> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlstyletransfer/modelparameters/validationdata](https://developer.apple.com/documentation/createml/mlstyletransfer/modelparameters/validationdata)

# MLStyleTransfer.ModelParameters.ValidationData

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

The source of a validation dataset for a style transfer model.

## Declaration

```swift
enum ValidationData
```

## Topics

### Designating validation data

- [MLStyleTransfer.ModelParameters.ValidationData.content(\_:)](validationdata/content%28__%29.md): The location of a validation image you use to validate the model.
- [MLStyleTransfer.ModelParameters.ValidationData.none](validationdata/none.md): An empty validation dataset you use to skip model validation.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Describing parameters

- [MLStyleTransfer.ModelParameters.ModelAlgorithmType](modelalgorithmtype.md): The style transfer training algorithm options.
