> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelstructureneuralnetworklayer/inputnames](https://developer.apple.com/documentation/coreml/mlmodelstructureneuralnetworklayer/inputnames)

# inputNames

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

The input names.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSString *> * inputNames;
```

## See Also

### Accessing the network layer properties

- [name](name.md): The layer name.
- [outputNames](outputnames.md): The output names.
- [type](type.md): The type of the layer, e,g, “elementwise”, “pooling”, etc.
