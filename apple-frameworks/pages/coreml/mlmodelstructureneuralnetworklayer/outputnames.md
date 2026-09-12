> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelstructureneuralnetworklayer/outputnames](https://developer.apple.com/documentation/coreml/mlmodelstructureneuralnetworklayer/outputnames)

# outputNames

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

The output names.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSString *> * outputNames;
```

## See Also

### Accessing the network layer properties

- [inputNames](inputnames.md): The input names.
- [name](name.md): The layer name.
- [type](type.md): The type of the layer, e,g, “elementwise”, “pooling”, etc.
