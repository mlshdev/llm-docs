> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/starttask(torender:from:to:at:)](https://developer.apple.com/documentation/coreimage/cicontext/starttask(torender:from:to:at:))

# startTask(toRender:from:to:at:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Renders a portion of an image to a point in the destination.

## Declaration

```swift
func startTask(toRender image: CIImage, from fromRect: CGRect, to destination: CIRenderDestination, at atPoint: CGPoint) throws -> CIRenderTask
```

## Parameters

- `image`: A [CIImage](../ciimage.md) to render.
- `fromRect`: The part of the image to render, as if cropped.
- `destination`: A [CIRenderDestination](../cirenderdestination.md) into which to render the image.
- `atPoint`: An origin point in the destination at which to place the image.

<a id="return-value"></a>

## Return Value

An asynchronous [CIRenderTask](../cirendertask.md) to render the image to the specified destination.

<a id="Discussion"></a>

## Discussion

This method crops the image to the specified rectangle and renders the result at the indicated origin point. If the image’s [extent](../ciimage/extent.md) property and `fromRect` argument values are infinite, this call renders the image’s (0, 0) point starting from the origin `atPoint`.

You must use an [MTLTexture](../../metal/mtltexture.md)-backed [CIContext](../cicontext.md) to support an [MTLTexture](../../metal/mtltexture.md)-backed [CIRenderDestination](../cirenderdestination.md). Similarly, you must use `GLContext`-backed [CIContext](../cicontext.md) to support a `GLTexture`-backed [CIRenderDestination](../cirenderdestination.md).

This call returns as soon as it enqueues all work required to render the image on the context’s device. In many situations, after issuing a render, you may need to wait for it to complete. In these cases, use the returned [CIRenderTask](../cirendertask.md) as follows:

**Swift**

```swift
let renderTask = try context.startTask(toRender: image, from: fromRect, to: destination, at: point)

let renderInfo = try renderTask.waitUntilCompleted()
```

**Objective-C**

```objc
CIRenderTask* task = [context startTaskToRender:image fromRect:fromRect toDestination:renderDestination atPoint:point error:&error];

CIRenderInfo* info = [task waitUntilCompletedAndReturnError:&error];
```

## See Also

### Customizing Render Destination

- [prepareRender(\_:from:to:at:)](preparerender%28__from_to_at_%29.md): An optional call to warm up a [CIContext](../cicontext.md) so that subsequent calls to render with the same arguments run more efficiently.
- [startTask(toClear:)](starttask%28toclear_%29.md): Fills the entire destination with black or clear depending on its [alphaMode](../cirenderdestination/alphamode.md).
- [startTask(toRender:to:)](starttask%28torender_to_%29.md): Renders an image to a destination so that point (0, 0) of the image maps to point (0, 0) of the destination.

# startTaskToRender:fromRect:toDestination:atPoint:error: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Renders a portion of an image to a point in the destination.

## Declaration

```objectivec
- (CIRenderTask *) startTaskToRender:(CIImage *) image fromRect:(CGRect) fromRect toDestination:(CIRenderDestination *) destination atPoint:(CGPoint) atPoint error:(NSError **) error;
```

## Parameters

- `image`: A [CIImage](../ciimage.md) to render.
- `fromRect`: The part of the image to render, as if cropped.
- `destination`: A [CIRenderDestination](../cirenderdestination.md) into which to render the image.
- `atPoint`: An origin point in the destination at which to place the image.
- `error`: On output, a pointer to an error object if the render task fails.

<a id="return-value"></a>

## Return Value

An asynchronous [CIRenderTask](../cirendertask.md) to render the image to the specified destination. On failure, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

This method crops the image to the specified rectangle and renders the result at the indicated origin point. If the image’s [extent](../ciimage/extent.md) property and `fromRect` argument values are infinite, this call renders the image’s (0, 0) point starting from the origin `atPoint`.

You must use an [MTLTexture](../../metal/mtltexture.md)-backed [CIContext](../cicontext.md) to support an [MTLTexture](../../metal/mtltexture.md)-backed [CIRenderDestination](../cirenderdestination.md). Similarly, you must use `GLContext`-backed [CIContext](../cicontext.md) to support a `GLTexture`-backed [CIRenderDestination](../cirenderdestination.md).

This call returns as soon as it enqueues all work required to render the image on the context’s device. In many situations, after issuing a render, you may need to wait for it to complete. In these cases, use the returned [CIRenderTask](../cirendertask.md) as follows:

**Swift**

```swift
let renderTask = try context.startTask(toRender: image, from: fromRect, to: destination, at: point)

let renderInfo = try renderTask.waitUntilCompleted()
```

**Objective-C**

```objc
CIRenderTask* task = [context startTaskToRender:image fromRect:fromRect toDestination:renderDestination atPoint:point error:&error];

CIRenderInfo* info = [task waitUntilCompletedAndReturnError:&error];
```

## See Also

### Customizing Render Destination

- [prepareRender:fromRect:toDestination:atPoint:error:](preparerender%28__from_to_at_%29.md): An optional call to warm up a [CIContext](../cicontext.md) so that subsequent calls to render with the same arguments run more efficiently.
- [startTaskToClear:error:](starttask%28toclear_%29.md): Fills the entire destination with black or clear depending on its [alphaMode](../cirenderdestination/alphamode.md).
- [startTaskToRender:toDestination:error:](starttask%28torender_to_%29.md): Renders an image to a destination so that point (0, 0) of the image maps to point (0, 0) of the destination.
