> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/preparerender(_:from:to:at:)](https://developer.apple.com/documentation/coreimage/cicontext/preparerender(_:from:to:at:))

# prepareRender(\_:from:to:at:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An optional call to warm up a [CIContext](../cicontext.md) so that subsequent calls to render with the same arguments run more efficiently.

## Declaration

```swift
func prepareRender(_ image: CIImage, from fromRect: CGRect, to destination: CIRenderDestination, at atPoint: CGPoint) throws
```

## Parameters

- `image`: [CIImage](../ciimage.md) to prepare to render.
- `fromRect`: A [CGRect](../../corefoundation/cgrect.md) defining the region to render.
- `destination`: The [CIRenderDestination](../cirenderdestination.md) to which you are preparing to render.
- `atPoint`: The [CGPoint](../../corefoundation/cgpoint.md) at which you are preparing to render.

<a id="Discussion"></a>

## Discussion

By making this call, the Core Image framework ensures that any needed kernels are compiled, and any intermediate buffers are allocated and marked volatile up front.

## See Also

### Customizing Render Destination

- [startTask(toClear:)](starttask%28toclear_%29.md): Fills the entire destination with black or clear depending on its [alphaMode](../cirenderdestination/alphamode.md).
- [startTask(toRender:from:to:at:)](starttask%28torender_from_to_at_%29.md): Renders a portion of an image to a point in the destination.
- [startTask(toRender:to:)](starttask%28torender_to_%29.md): Renders an image to a destination so that point (0, 0) of the image maps to point (0, 0) of the destination.

# prepareRender:fromRect:toDestination:atPoint:error: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An optional call to warm up a [CIContext](../cicontext.md) so that subsequent calls to render with the same arguments run more efficiently.

## Declaration

```objectivec
- (BOOL) prepareRender:(CIImage *) image fromRect:(CGRect) fromRect toDestination:(CIRenderDestination *) destination atPoint:(CGPoint) atPoint error:(NSError **) error;
```

## Parameters

- `image`: [CIImage](../ciimage.md) to prepare to render.
- `fromRect`: A [CGRect](../../corefoundation/cgrect.md) defining the region to render.
- `destination`: The [CIRenderDestination](../cirenderdestination.md) to which you are preparing to render.
- `atPoint`: The [CGPoint](../../corefoundation/cgpoint.md) at which you are preparing to render.
- `error`: Pointer to an error should preparation to render fail.

<a id="return-value"></a>

## Return Value

Returns `true` if preparation succeeded.

<a id="Discussion"></a>

## Discussion

By making this call, the Core Image framework ensures that any needed kernels are compiled, and any intermediate buffers are allocated and marked volatile up front.

## See Also

### Customizing Render Destination

- [startTaskToClear:error:](starttask%28toclear_%29.md): Fills the entire destination with black or clear depending on its [alphaMode](../cirenderdestination/alphamode.md).
- [startTaskToRender:fromRect:toDestination:atPoint:error:](starttask%28torender_from_to_at_%29.md): Renders a portion of an image to a point in the destination.
- [startTaskToRender:toDestination:error:](starttask%28torender_to_%29.md): Renders an image to a destination so that point (0, 0) of the image maps to point (0, 0) of the destination.
