> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreml/mlmodelstructurepipeline/submodels

# subModels

**Interface language:** Objective-C

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

The structure of the sub models in the pipeline.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<MLModelStructure *> * subModels;
```

## See Also

### Accessing the models and model names

- [subModelNames](submodelnames.md): The names of the sub models in the pipeline.
