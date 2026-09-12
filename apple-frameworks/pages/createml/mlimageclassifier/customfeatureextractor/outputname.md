> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlimageclassifier/customfeatureextractor/outputname](https://developer.apple.com/documentation/createml/mlimageclassifier/customfeatureextractor/outputname)

# outputName

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · visionOS 1.0+

The name of the output from a feature extraction layer within the model.

## Declaration

```swift
var outputName: String?
```

<a id="discussion"></a>

## Discussion

When training an image classifier with a custom feature extractor, use [outputName](outputname.md) to select a layer within the model that has an output of [MLMultiArray](../../../coreml/mlmultiarray.md).

Set [outputName](outputname.md) to `nil` if the model (specified by [modelPath](modelpath.md)) has only one output of type [MLMultiArray](../../../coreml/mlmultiarray.md).

## See Also

### Configuring a custom feature extractor

- [modelPath](modelpath.md): The location of a neural network `.mlmodel` file that takes an image as an input.
