> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowsercell/imageframe()](https://developer.apple.com/documentation/quartz/ikimagebrowsercell/imageframe())

# imageFrame() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the receiver’s image frame rectangle, which defines the position of the thumbnail in its [IKImageBrowserView](../ikimagebrowserview.md).

## Declaration

```swift
func imageFrame() -> NSRect
```

<a id="return-value"></a>

## Return Value

The coordinates of the frame, in the `IKImageBrowserView` coordinate space.

<a id="Discussion"></a>

## Discussion

It is the developer’s responsibility to compute the `imageFrame` such that it lies entirely within the cell’s [frame()](frame%28%29.md) rectangle.

Subclasses can override this method to customize the position of the thumbnail.

## See Also

### Cell Component Frames

- [frame()](frame%28%29.md): Returns the receiver’s frame rectangle, which defines its position in its [IKImageBrowserView](../ikimagebrowserview.md).
- [subtitleFrame()](subtitleframe%28%29.md): Returns the receiver’s subtitle frame rectangle.
- [titleFrame()](titleframe%28%29.md): Returns the receiver’s title frame rectangle.
- [imageContainerFrame()](imagecontainerframe%28%29.md): Returns the receiver’s image container frame rectangle, which defines the position of the container of the thumbnail.

# imageFrame (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the receiver’s image frame rectangle, which defines the position of the thumbnail in its [IKImageBrowserView](../ikimagebrowserview.md).

## Declaration

```objectivec
- (NSRect) imageFrame;
```

<a id="return-value"></a>

## Return Value

The coordinates of the frame, in the `IKImageBrowserView` coordinate space.

<a id="Discussion"></a>

## Discussion

It is the developer’s responsibility to compute the `imageFrame` such that it lies entirely within the cell’s [frame](frame%28%29.md) rectangle.

Subclasses can override this method to customize the position of the thumbnail.

## See Also

### Cell Component Frames

- [frame](frame%28%29.md): Returns the receiver’s frame rectangle, which defines its position in its [IKImageBrowserView](../ikimagebrowserview.md).
- [subtitleFrame](subtitleframe%28%29.md): Returns the receiver’s subtitle frame rectangle.
- [titleFrame](titleframe%28%29.md): Returns the receiver’s title frame rectangle.
- [imageContainerFrame](imagecontainerframe%28%29.md): Returns the receiver’s image container frame rectangle, which defines the position of the container of the thumbnail.
