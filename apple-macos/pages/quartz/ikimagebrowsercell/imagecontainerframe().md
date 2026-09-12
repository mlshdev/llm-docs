> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowsercell/imagecontainerframe()](https://developer.apple.com/documentation/quartz/ikimagebrowsercell/imagecontainerframe())

# imageContainerFrame() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the receiver’s image container frame rectangle, which defines the position of the container of the thumbnail.

## Declaration

```swift
func imageContainerFrame() -> NSRect
```

<a id="return-value"></a>

## Return Value

The coordinates of image container frame, in the `IKImageBrowserView` coordinate space.

<a id="Discussion"></a>

## Discussion

The image frame is computed automatically from the image container frame by taking in account the image alignment and the image aspect ratio.

Subclasses can override this method to customize the position of the thumbnail container.

## See Also

### Cell Component Frames

- [frame()](frame%28%29.md): Returns the receiver’s frame rectangle, which defines its position in its [IKImageBrowserView](../ikimagebrowserview.md).
- [imageFrame()](imageframe%28%29.md): Returns the receiver’s image frame rectangle, which defines the position of the thumbnail in its [IKImageBrowserView](../ikimagebrowserview.md).
- [subtitleFrame()](subtitleframe%28%29.md): Returns the receiver’s subtitle frame rectangle.
- [titleFrame()](titleframe%28%29.md): Returns the receiver’s title frame rectangle.

# imageContainerFrame (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the receiver’s image container frame rectangle, which defines the position of the container of the thumbnail.

## Declaration

```objectivec
- (NSRect) imageContainerFrame;
```

<a id="return-value"></a>

## Return Value

The coordinates of image container frame, in the `IKImageBrowserView` coordinate space.

<a id="Discussion"></a>

## Discussion

The image frame is computed automatically from the image container frame by taking in account the image alignment and the image aspect ratio.

Subclasses can override this method to customize the position of the thumbnail container.

## See Also

### Cell Component Frames

- [frame](frame%28%29.md): Returns the receiver’s frame rectangle, which defines its position in its [IKImageBrowserView](../ikimagebrowserview.md).
- [imageFrame](imageframe%28%29.md): Returns the receiver’s image frame rectangle, which defines the position of the thumbnail in its [IKImageBrowserView](../ikimagebrowserview.md).
- [subtitleFrame](subtitleframe%28%29.md): Returns the receiver’s subtitle frame rectangle.
- [titleFrame](titleframe%28%29.md): Returns the receiver’s title frame rectangle.
