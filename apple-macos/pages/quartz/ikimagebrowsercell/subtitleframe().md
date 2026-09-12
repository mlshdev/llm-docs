> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowsercell/subtitleframe()](https://developer.apple.com/documentation/quartz/ikimagebrowsercell/subtitleframe())

# subtitleFrame() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the receiver’s subtitle frame rectangle.

## Declaration

```swift
func subtitleFrame() -> NSRect
```

<a id="return-value"></a>

## Return Value

The coordinates of the subtitle frame, in the `IKImageBrowserView` coordinate space.

<a id="Discussion"></a>

## Discussion

It is the developer’s responsibility to compute the `subtitleFrame` such that it lies entirely within the cell’s [frame()](frame%28%29.md) rectangle.

Subclasses can override this method to customize the position of the subtitle.

## See Also

### Cell Component Frames

- [frame()](frame%28%29.md): Returns the receiver’s frame rectangle, which defines its position in its [IKImageBrowserView](../ikimagebrowserview.md).
- [imageFrame()](imageframe%28%29.md): Returns the receiver’s image frame rectangle, which defines the position of the thumbnail in its [IKImageBrowserView](../ikimagebrowserview.md).
- [titleFrame()](titleframe%28%29.md): Returns the receiver’s title frame rectangle.
- [imageContainerFrame()](imagecontainerframe%28%29.md): Returns the receiver’s image container frame rectangle, which defines the position of the container of the thumbnail.

# subtitleFrame (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the receiver’s subtitle frame rectangle.

## Declaration

```objectivec
- (NSRect) subtitleFrame;
```

<a id="return-value"></a>

## Return Value

The coordinates of the subtitle frame, in the `IKImageBrowserView` coordinate space.

<a id="Discussion"></a>

## Discussion

It is the developer’s responsibility to compute the `subtitleFrame` such that it lies entirely within the cell’s [frame](frame%28%29.md) rectangle.

Subclasses can override this method to customize the position of the subtitle.

## See Also

### Cell Component Frames

- [frame](frame%28%29.md): Returns the receiver’s frame rectangle, which defines its position in its [IKImageBrowserView](../ikimagebrowserview.md).
- [imageFrame](imageframe%28%29.md): Returns the receiver’s image frame rectangle, which defines the position of the thumbnail in its [IKImageBrowserView](../ikimagebrowserview.md).
- [titleFrame](titleframe%28%29.md): Returns the receiver’s title frame rectangle.
- [imageContainerFrame](imagecontainerframe%28%29.md): Returns the receiver’s image container frame rectangle, which defines the position of the container of the thumbnail.
