> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreml/mlcomputepolicy/cpuandgpu

# cpuAndGPU

**Framework:** Core ML  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Execute ML workloads using the GPU if available, otherwise falling back to the CPU.

## Declaration

```swift
static var cpuAndGPU: MLComputePolicy { get }
```

## See Also

### Compute policies

- [cpuOnly](cpuonly.md): Execute ML workloads using the CPU.
