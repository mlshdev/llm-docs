> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnrenderer/render(withviewport:commandbuffer:passdescriptor:)](https://developer.apple.com/documentation/scenekit/scnrenderer/render(withviewport:commandbuffer:passdescriptor:))

# render(withViewport:commandBuffer:passDescriptor:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

## Declaration

```swift
func render(withViewport viewport: CGRect, commandBuffer: any MTLCommandBuffer, passDescriptor renderPassDescriptor: MTLRenderPassDescriptor)
```

# renderWithViewport:commandBuffer:passDescriptor: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) renderWithViewport:(CGRect) viewport commandBuffer:(id<MTLCommandBuffer>) commandBuffer passDescriptor:(MTLRenderPassDescriptor *) renderPassDescriptor;
```
