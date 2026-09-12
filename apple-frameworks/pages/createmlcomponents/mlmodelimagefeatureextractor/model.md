> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/mlmodelimagefeatureextractor/model](https://developer.apple.com/documentation/createmlcomponents/mlmodelimagefeatureextractor/model)

# model

**Framework:** Create ML Components  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The CoreML model with .mlmodel extension.

## Declaration

```swift
let model: MLModel
```

<a id="discussion"></a>

## Discussion

This model should satisfy the following requirements:

1. Take in one input of type .image and its key name should be same as `inputName`.
2. Any other input should be optional.
3. Give at least one output of type .multiarray and its key name should be same as `outputName`

## See Also

### Getting the properties

- [inputName](inputname.md): The model’s input feature name.
- [outputName](outputname.md): The model’s output feature name.
