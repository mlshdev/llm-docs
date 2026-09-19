> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsgetcustomkernelbatchedsourceindex(_:_:_:)

# MPSGetCustomKernelBatchedSourceIndex(\_:\_:\_:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Returns the index of the specified batched source texture argument.

## Declaration

```swift
func MPSGetCustomKernelBatchedSourceIndex(_ c: MPSCustomKernelArgumentCount, _ sourceIndex: UInt, _ MPSMaxTextures: UInt) -> UInt
```

# MPSGetCustomKernelBatchedSourceIndex (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Returns the index of the specified batched source texture argument.

## Declaration

```objectivec
static unsigned long MPSGetCustomKernelBatchedSourceIndex(MPSCustomKernelArgumentCount c, unsigned long sourceIndex, unsigned long MPSMaxTextures);
```
