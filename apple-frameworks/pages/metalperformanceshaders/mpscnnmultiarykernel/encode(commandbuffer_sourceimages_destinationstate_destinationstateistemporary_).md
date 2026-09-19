> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpscnnmultiarykernel/encode(commandbuffer:sourceimages:destinationstate:destinationstateistemporary:)

# encode(commandBuffer:sourceImages:destinationState:destinationStateIsTemporary:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, sourceImages: [MPSImage], destinationState outState: AutoreleasingUnsafeMutablePointer<MPSState?>, destinationStateIsTemporary isTemporary: Bool) -> MPSImage
```

# encodeToCommandBuffer:sourceImages:destinationState:destinationStateIsTemporary: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (MPSImage *) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceImages:(NSArray<MPSImage *> *) sourceImages destinationState:(MPSState **) outState destinationStateIsTemporary:(BOOL) isTemporary;
```
