> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/computeunitkind](https://developer.apple.com/documentation/coreai/computeunitkind)

# ComputeUnitKind

**Framework:** Core AI  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type of hardware compute unit available for model inference.

## Declaration

```swift
enum ComputeUnitKind
```

<a id="overview"></a>

## Overview

You use compute unit kinds with [SpecializationOptions](specializationoptions.md) to control which hardware the framework targets when specializing a model. By default, specialization uses all available compute units on the device.

## Topics

### Defining compute unit types

- [ComputeUnitKind.cpu](computeunitkind/cpu.md): The central processing unit.
- [ComputeUnitKind.gpu](computeunitkind/gpu.md): The graphics processing unit.
- [ComputeUnitKind.neuralEngine](computeunitkind/neuralengine.md): The Neural Engine.

### Checking availability

- [availableKinds](computeunitkind/availablekinds.md): The compute unit kinds available on the current device.

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
- [SpecializationOptions](specializationoptions.md)
