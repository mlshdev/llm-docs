> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cametallayer/nextdrawable()](https://developer.apple.com/documentation/quartzcore/cametallayer/nextdrawable())

# nextDrawable() (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Waits until a Metal drawable is available, and then returns it.

## Declaration

```swift
func nextDrawable() -> (any CAMetalDrawable)?
```

<a id="return-value"></a>

## Return Value

A Metal drawable. Use the drawable’s [texture](../cametaldrawable/texture.md) property to configure a [MTLRenderPipelineColorAttachmentDescriptor](../../metal/mtlrenderpipelinecolorattachmentdescriptor.md) object for rendering to the layer.

<a id="Discussion"></a>

## Discussion

A [CAMetalLayer](../cametallayer.md) object maintains an internal pool of textures for displaying layer content, each wrapped in a [CAMetalDrawable](../cametaldrawable.md) object. Use this method to retrieve the next available drawable from the pool. If all drawables are in use, the layer waits up to one second for one to become available, after which it returns `nil`. The [allowsNextDrawableTimeout](allowsnextdrawabletimeout.md) property affects this behavior.

This method returns `nil` if the layer’s [pixelFormat](pixelformat.md) or other properties are invalid.

## See Also

### Obtaining a Metal Drawable

- [maximumDrawableCount](maximumdrawablecount.md): The number of Metal drawables in the resource pool managed by Core Animation.
- [allowsNextDrawableTimeout](allowsnextdrawabletimeout.md): A Boolean value that determines whether requests for a new buffer expire if the system can’t satisfy them.

# nextDrawable (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Waits until a Metal drawable is available, and then returns it.

## Declaration

```objectivec
- (id<CAMetalDrawable>) nextDrawable;
```

<a id="return-value"></a>

## Return Value

A Metal drawable. Use the drawable’s [texture](../cametaldrawable/texture.md) property to configure a [MTLRenderPipelineColorAttachmentDescriptor](../../metal/mtlrenderpipelinecolorattachmentdescriptor.md) object for rendering to the layer.

<a id="Discussion"></a>

## Discussion

A [CAMetalLayer](../cametallayer.md) object maintains an internal pool of textures for displaying layer content, each wrapped in a [CAMetalDrawable](../cametaldrawable.md) object. Use this method to retrieve the next available drawable from the pool. If all drawables are in use, the layer waits up to one second for one to become available, after which it returns `nil`. The [allowsNextDrawableTimeout](allowsnextdrawabletimeout.md) property affects this behavior.

This method returns `nil` if the layer’s [pixelFormat](pixelformat.md) or other properties are invalid.

## See Also

### Obtaining a Metal Drawable

- [maximumDrawableCount](maximumdrawablecount.md): The number of Metal drawables in the resource pool managed by Core Animation.
- [allowsNextDrawableTimeout](allowsnextdrawabletimeout.md): A Boolean value that determines whether requests for a new buffer expire if the system can’t satisfy them.
