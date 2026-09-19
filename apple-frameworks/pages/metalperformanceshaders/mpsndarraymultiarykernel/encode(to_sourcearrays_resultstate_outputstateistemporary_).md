> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsndarraymultiarykernel/encode(to:sourcearrays:resultstate:outputstateistemporary:)

# encode(to:sourceArrays:resultState:outputStateIsTemporary:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func encode(to cmdBuf: any MTLCommandBuffer, sourceArrays: [MPSNDArray], resultState outGradientState: AutoreleasingUnsafeMutablePointer<MPSState?>?, outputStateIsTemporary: Bool) -> MPSNDArray
```

# encodeToCommandBuffer:sourceArrays:resultState:outputStateIsTemporary: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (MPSNDArray *) encodeToCommandBuffer:(id<MTLCommandBuffer>) cmdBuf sourceArrays:(NSArray<MPSNDArray *> *) sourceArrays resultState:(MPSState **) outGradientState outputStateIsTemporary:(BOOL) outputStateIsTemporary;
```
