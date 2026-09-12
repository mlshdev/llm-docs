> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlhandactionclassifier/modelparameters-swift.struct/modelalgorithmtype](https://developer.apple.com/documentation/createml/mlhandactionclassifier/modelparameters-swift.struct/modelalgorithmtype)

# MLHandActionClassifier.ModelParameters.ModelAlgorithmType

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The hand action classifier training algorithm options.

## Declaration

```swift
enum ModelAlgorithmType
```

## Topics

### Choosing an algorithm type

- [MLHandActionClassifier.ModelParameters.ModelAlgorithmType.gcn](modelalgorithmtype/gcn.md): Selects the graph convolutional neural-network algorithm for a hand action classifier.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Parameter supporting types

- [MLHandActionClassifier.VideoAugmentationOptions](../videoaugmentationoptions.md): Options a hand action classification training session can use to generate additional training data from the videos you provide.
- [MLHandActionClassifier.ModelParameters.ValidationData](validationdata.md): A dataset a hand action classifier task uses to validate the model during a training session.
