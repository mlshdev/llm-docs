> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelstructure-c.class/pipeline](https://developer.apple.com/documentation/coreml/mlmodelstructure-c.class/pipeline)

# pipeline

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

If the model is of Pipeline type then it is the structure of the Pipeline otherwise `nil`.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) MLModelStructurePipeline * pipeline;
```

## See Also

### Model structures

- [neuralNetwork](neuralnetwork.md): If the model is of NeuralNetwork type then it is the structure of the NeuralNetwork otherwise `nil`.
- [program](program.md): If the model is of ML Program type then it is the structure of the ML Program otherwise `nil`.
