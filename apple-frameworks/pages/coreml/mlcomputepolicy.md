> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlcomputepolicy](https://developer.apple.com/documentation/coreml/mlcomputepolicy)

# MLComputePolicy

**Framework:** Core ML  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The compute policy determining what compute device, or compute devices, to execute ML workloads on.

## Declaration

```swift
struct MLComputePolicy
```

## Topics

### Compute policies

- [cpuAndGPU](mlcomputepolicy/cpuandgpu.md): Execute ML workloads using the GPU if available, otherwise falling back to the CPU.
- [cpuOnly](mlcomputepolicy/cpuonly.md): Execute ML workloads using the CPU.

### Creating a compute policy

- [init(\_:)](mlcomputepolicy/init%28__%29.md): Creates a new compute policy using the given compute units.

### Default Implementations

- [CustomReflectable Implementations](mlcomputepolicy/customreflectable-implementations.md)
- [CustomStringConvertible Implementations](mlcomputepolicy/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Compute plan

- [MLComputePlan](mlcomputeplan-1w21n.md): A class representing the compute plan of a model.
- [MLModelStructure](mlmodelstructure-swift.enum.md): An enum representing the structure of a model.
- [withMLTensorComputePolicy(\_:\_:)](withmltensorcomputepolicy%28____%29-8stx9.md): Calls the given closure within a task-local context using the specified compute policy to influence what compute device tensor operations are executed on.
- [withMLTensorComputePolicy(\_:\_:)](withmltensorcomputepolicy%28____%29-6z33x.md): Calls the given closure within a task-local context using the specified compute policy to influence what compute device tensor operations are executed on.
