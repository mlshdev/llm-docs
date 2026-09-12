> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/specializationoptions](https://developer.apple.com/documentation/coreai/specializationoptions)

# SpecializationOptions

**Framework:** Core AI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
struct SpecializationOptions
```

## Mentioned In

- [Managing model specialization and caching](managing-model-specialization-and-caching.md)

## Topics

### Using preset options

- [default](specializationoptions/default.md): Options that allow the model to use all available compute units.
- [cpuOnly](specializationoptions/cpuonly.md): Options that restrict compute to the CPU only.

### Creating custom options

- [init(preferredComputeUnitKind:)](specializationoptions/init%28preferredcomputeunitkind_%29.md): Creates options with a preferred compute unit kind.

### Configuring compute units

- [allowedComputeUnitKinds](specializationoptions/allowedcomputeunitkinds.md): The set of compute units the specialized model can use.
- [preferredComputeUnitKind](specializationoptions/preferredcomputeunitkind.md): The preferred compute unit kind, if one was specified.

### Configuring specialization behavior

- [expectFrequentReshapes](specializationoptions/expectfrequentreshapes.md): Setting to allow more optimal specialization if the model performs frequent reshapes based on usage

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuration

- [Managing model specialization and caching](managing-model-specialization-and-caching.md): Configure model specialization, manage cached assets, and reduce your app’s storage footprint.
- [Compiling Core AI models ahead of time](compiling-core-ai-models-ahead-of-time.md): Reduce on-device specialization time by compiling Core AI models at build time.
- [AIModelCache](aimodelcache.md): A cache that stores the specialized model artifacts for inference.
- [ComputeUnitKind](computeunitkind.md): A type of hardware compute unit available for model inference.
