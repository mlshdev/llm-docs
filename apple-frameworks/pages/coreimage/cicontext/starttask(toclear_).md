> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/starttask(toclear:)](https://developer.apple.com/documentation/coreimage/cicontext/starttask(toclear:))

# startTask(toClear:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Fills the entire destination with black or clear depending on its [alphaMode](../cirenderdestination/alphamode.md).

## Declaration

```swift
func startTask(toClear destination: CIRenderDestination) throws -> CIRenderTask
```

## Parameters

- `destination`: The [CIRenderDestination](../cirenderdestination.md) to clear.

<a id="return-value"></a>

## Return Value

The asynchronous [CIRenderTask](../cirendertask.md) for clearing the destination.

<a id="Discussion"></a>

## Discussion

If the destination’s [alphaMode](../cirenderdestination/alphamode.md) is [CIRenderDestinationAlphaMode.none](../cirenderdestinationalphamode/none.md), this command fills the entire destination with black `(0, 0, 0, 1)`.

If the destination’s [alphaMode](../cirenderdestination/alphamode.md) is [CIRenderDestinationAlphaMode.premultiplied](../cirenderdestinationalphamode/premultiplied.md) or [CIRenderDestinationAlphaMode.unpremultiplied](../cirenderdestinationalphamode/unpremultiplied.md), this command fills the entire destination with clear `(0, 0, 0, 0)`.

## See Also

### Customizing Render Destination

- [prepareRender(\_:from:to:at:)](preparerender%28__from_to_at_%29.md): An optional call to warm up a [CIContext](../cicontext.md) so that subsequent calls to render with the same arguments run more efficiently.
- [startTask(toRender:from:to:at:)](starttask%28torender_from_to_at_%29.md): Renders a portion of an image to a point in the destination.
- [startTask(toRender:to:)](starttask%28torender_to_%29.md): Renders an image to a destination so that point (0, 0) of the image maps to point (0, 0) of the destination.

# startTaskToClear:error: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Fills the entire destination with black or clear depending on its [alphaMode](../cirenderdestination/alphamode.md).

## Declaration

```objectivec
- (CIRenderTask *) startTaskToClear:(CIRenderDestination *) destination error:(NSError **) error;
```

## Parameters

- `destination`: The [CIRenderDestination](../cirenderdestination.md) to clear.
- `error`: Pointer to an error object should the task fail.

<a id="return-value"></a>

## Return Value

The asynchronous [CIRenderTask](../cirendertask.md) for clearing the destination. On failure, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

If the destination’s [alphaMode](../cirenderdestination/alphamode.md) is [CIRenderDestinationAlphaNone](../cirenderdestinationalphamode/none.md), this command fills the entire destination with black `(0, 0, 0, 1)`.

If the destination’s [alphaMode](../cirenderdestination/alphamode.md) is [CIRenderDestinationAlphaPremultiplied](../cirenderdestinationalphamode/premultiplied.md) or [CIRenderDestinationAlphaUnpremultiplied](../cirenderdestinationalphamode/unpremultiplied.md), this command fills the entire destination with clear `(0, 0, 0, 0)`.

## See Also

### Customizing Render Destination

- [prepareRender:fromRect:toDestination:atPoint:error:](preparerender%28__from_to_at_%29.md): An optional call to warm up a [CIContext](../cicontext.md) so that subsequent calls to render with the same arguments run more efficiently.
- [startTaskToRender:fromRect:toDestination:atPoint:error:](starttask%28torender_from_to_at_%29.md): Renders a portion of an image to a point in the destination.
- [startTaskToRender:toDestination:error:](starttask%28torender_to_%29.md): Renders an image to a destination so that point (0, 0) of the image maps to point (0, 0) of the destination.
