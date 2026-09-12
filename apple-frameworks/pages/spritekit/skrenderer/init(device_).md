> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skrenderer/init(device:)](https://developer.apple.com/documentation/spritekit/skrenderer/init(device:))

# init(device:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Initializes with a specific GPU to render into.

## Declaration

```swift
init(device: any MTLDevice)
```

## Parameters

- `device`: A Metal device.

<a id="return-value"></a>

## Return Value

A new renderer object.

<a id="Discussion"></a>

## Discussion

Pass in the same Metal device that is associated to the Metal command buffer passed into [render(withViewport:commandBuffer:renderPassDescriptor:)](render%28withviewport_commandbuffer_renderpassdescriptor_%29.md).

## See Also

### First Steps

- [scene](scene.md): The scene this renderer will draw into the Metal command buffer.

# rendererWithDevice: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Initializes with a specific GPU to render into.

## Declaration

```objectivec
+ (SKRenderer *) rendererWithDevice:(id<MTLDevice>) device;
```

## Parameters

- `device`: A Metal device.

<a id="return-value"></a>

## Return Value

A new renderer object.

<a id="Discussion"></a>

## Discussion

Pass in the same Metal device that is associated to the Metal command buffer passed into [renderWithViewport:commandBuffer:renderPassDescriptor:](render%28withviewport_commandbuffer_renderpassdescriptor_%29.md).

## See Also

### First Steps

- [scene](scene.md): The scene this renderer will draw into the Metal command buffer.
