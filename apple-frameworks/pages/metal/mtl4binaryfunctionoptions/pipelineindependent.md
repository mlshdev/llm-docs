> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4binaryfunctionoptions/pipelineindependent

# pipelineIndependent (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Compiles the function to have its function handles return a constant MTLResourceID across all pipeline states. The function needs to be linked to the pipeline that will use this function.

## Declaration

```swift
static var pipelineIndependent: MTL4BinaryFunctionOptions { get }
```

# MTL4BinaryFunctionOptionPipelineIndependent (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Compiles the function to have its function handles return a constant MTLResourceID across all pipeline states. The function needs to be linked to the pipeline that will use this function.

## Declaration

```objectivec
MTL4BinaryFunctionOptionPipelineIndependent
```
