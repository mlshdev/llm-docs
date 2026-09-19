> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4commitfeedback/gpustarttime

# gpuStartTime (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The host time, in seconds, when the GPU starts execution of the committed command buffers.

## Declaration

```swift
var gpuStartTime: CFTimeInterval { get }
```

# GPUStartTime (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The host time, in seconds, when the GPU starts execution of the committed command buffers.

## Declaration

```objectivec
@property (nonatomic, readonly) CFTimeInterval GPUStartTime;
```
