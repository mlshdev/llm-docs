> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowsercell/titleframe()](https://developer.apple.com/documentation/quartz/ikimagebrowsercell/titleframe())

# titleFrame() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the receiver’s title frame rectangle.

## Declaration

```swift
func titleFrame() -> NSRect
```

<a id="return-value"></a>

## Return Value

The coordinates of the title frame, in the `IKImageBrowserView` coordinate space.

<a id="Discussion"></a>

## Discussion

It is the developer’s responsibility to compute the `titleFrame` such that it lies entirely within the cell’s [frame()](frame%28%29.md) rectangle.

Subclasses can override this method to customize the position of the title.

## See Also

### Cell Component Frames

- [frame()](frame%28%29.md): Returns the receiver’s frame rectangle, which defines its position in its [IKImageBrowserView](../ikimagebrowserview.md).
- [imageFrame()](imageframe%28%29.md): Returns the receiver’s image frame rectangle, which defines the position of the thumbnail in its [IKImageBrowserView](../ikimagebrowserview.md).
- [subtitleFrame()](subtitleframe%28%29.md): Returns the receiver’s subtitle frame rectangle.
- [imageContainerFrame()](imagecontainerframe%28%29.md): Returns the receiver’s image container frame rectangle, which defines the position of the container of the thumbnail.

# titleFrame (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the receiver’s title frame rectangle.

## Declaration

```objectivec
- (NSRect) titleFrame;
```

<a id="return-value"></a>

## Return Value

The coordinates of the title frame, in the `IKImageBrowserView` coordinate space.

<a id="Discussion"></a>

## Discussion

It is the developer’s responsibility to compute the `titleFrame` such that it lies entirely within the cell’s [frame](frame%28%29.md) rectangle.

Subclasses can override this method to customize the position of the title.

## See Also

### Cell Component Frames

- [frame](frame%28%29.md): Returns the receiver’s frame rectangle, which defines its position in its [IKImageBrowserView](../ikimagebrowserview.md).
- [imageFrame](imageframe%28%29.md): Returns the receiver’s image frame rectangle, which defines the position of the thumbnail in its [IKImageBrowserView](../ikimagebrowserview.md).
- [subtitleFrame](subtitleframe%28%29.md): Returns the receiver’s subtitle frame rectangle.
- [imageContainerFrame](imagecontainerframe%28%29.md): Returns the receiver’s image container frame rectangle, which defines the position of the container of the thumbnail.
