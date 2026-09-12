> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodelasset/summary](https://developer.apple.com/documentation/coreai/aimodelasset/summary)

# AIModelAsset.Summary

**Framework:** Core AI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A summary of a model’s structure and statistics.

## Declaration

```swift
struct Summary
```

<a id="overview"></a>

## Overview

Obtain a summary by calling [summary(includingStatistics:)](summary%28includingstatistics_%29.md). The summary describes the model’s functions, storage types, compute types, and operation distribution.

## Topics

### Inspecting precision information

- [computeTypes](summary/computetypes.md): The unique compute type names the model uses.
- [storageTypes](summary/storagetypes.md): The unique scalar storage types and their element counts.

### Reviewing operation distribution

- [operationDistribution](summary/operationdistribution.md): The distribution of operations in the model, each with a count.

### Inspecting functions

- [functions](summary/functions.md): The functions in the model’s program.

### Supporting types

- [AIModelAsset.Summary.OperationCount](summary/operationcount.md): A model operation and the number of times it occurs.
- [AIModelAsset.Summary.StorageType](summary/storagetype.md): A scalar storage type and the number of elements that use it.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [AIModelAsset.FunctionDescriptor](functiondescriptor.md): A description of a function in the model’s program.
- [AIModelAsset.Metadata](metadata-swift.struct.md): The metadata for a model asset, including author, license, and custom key-value pairs.
- [AIModelAsset.ValueDescriptor](valuedescriptor.md): A description of a function’s input or output value.
