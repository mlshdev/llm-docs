> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/starttask(torender:to:)](https://developer.apple.com/documentation/coreimage/cicontext/starttask(torender:to:))

# startTask(toRender:to:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Renders an image to a destination so that point (0, 0) of the image maps to point (0, 0) of the destination.

## Declaration

```swift
func startTask(toRender image: CIImage, to destination: CIRenderDestination) throws -> CIRenderTask
```

## Parameters

- `image`: [CIImage](../ciimage.md) to prepare to render.
- `destination`: The [CIRenderDestination](../cirenderdestination.md) to which to render.

<a id="return-value"></a>

## Return Value

The asynchronous [CIRenderTask](../cirendertask.md) to render the image to the specified destination.

## See Also

### Customizing Render Destination

- [prepareRender(\_:from:to:at:)](preparerender%28__from_to_at_%29.md): An optional call to warm up a [CIContext](../cicontext.md) so that subsequent calls to render with the same arguments run more efficiently.
- [startTask(toClear:)](starttask%28toclear_%29.md): Fills the entire destination with black or clear depending on its [alphaMode](../cirenderdestination/alphamode.md).
- [startTask(toRender:from:to:at:)](starttask%28torender_from_to_at_%29.md): Renders a portion of an image to a point in the destination.

# startTaskToRender:toDestination:error: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Renders an image to a destination so that point (0, 0) of the image maps to point (0, 0) of the destination.

## Declaration

```objectivec
- (CIRenderTask *) startTaskToRender:(CIImage *) image toDestination:(CIRenderDestination *) destination error:(NSError **) error;
```

## Parameters

- `image`: [CIImage](../ciimage.md) to prepare to render.
- `destination`: The [CIRenderDestination](../cirenderdestination.md) to which to render.
- `error`: Pointer to an error should the render task creation fail.

<a id="return-value"></a>

## Return Value

The asynchronous [CIRenderTask](../cirendertask.md) to render the image to the specified destination. On failure, this method returns `nil`.

## See Also

### Customizing Render Destination

- [prepareRender:fromRect:toDestination:atPoint:error:](preparerender%28__from_to_at_%29.md): An optional call to warm up a [CIContext](../cicontext.md) so that subsequent calls to render with the same arguments run more efficiently.
- [startTaskToClear:error:](starttask%28toclear_%29.md): Fills the entire destination with black or clear depending on its [alphaMode](../cirenderdestination/alphamode.md).
- [startTaskToRender:fromRect:toDestination:atPoint:error:](starttask%28torender_from_to_at_%29.md): Renders a portion of an image to a point in the destination.
