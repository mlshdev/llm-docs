> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowsercell/frame()](https://developer.apple.com/documentation/quartz/ikimagebrowsercell/frame())

# frame() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the receiver’s frame rectangle, which defines its position in its [IKImageBrowserView](../ikimagebrowserview.md).

## Declaration

```swift
func frame() -> NSRect
```

<a id="return-value"></a>

## Return Value

The coordinates of the frame, in the `IKImageBrowserView` coordinate space.

<a id="Discussion"></a>

## Discussion

Subclasses should not override this method.

## See Also

### Cell Component Frames

- [imageFrame()](imageframe%28%29.md): Returns the receiver’s image frame rectangle, which defines the position of the thumbnail in its [IKImageBrowserView](../ikimagebrowserview.md).
- [subtitleFrame()](subtitleframe%28%29.md): Returns the receiver’s subtitle frame rectangle.
- [titleFrame()](titleframe%28%29.md): Returns the receiver’s title frame rectangle.
- [imageContainerFrame()](imagecontainerframe%28%29.md): Returns the receiver’s image container frame rectangle, which defines the position of the container of the thumbnail.

# frame (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Returns the receiver’s frame rectangle, which defines its position in its [IKImageBrowserView](../ikimagebrowserview.md).

## Declaration

```objectivec
- (NSRect) frame;
```

<a id="return-value"></a>

## Return Value

The coordinates of the frame, in the `IKImageBrowserView` coordinate space.

<a id="Discussion"></a>

## Discussion

Subclasses should not override this method.

## See Also

### Cell Component Frames

- [imageFrame](imageframe%28%29.md): Returns the receiver’s image frame rectangle, which defines the position of the thumbnail in its [IKImageBrowserView](../ikimagebrowserview.md).
- [subtitleFrame](subtitleframe%28%29.md): Returns the receiver’s subtitle frame rectangle.
- [titleFrame](titleframe%28%29.md): Returns the receiver’s title frame rectangle.
- [imageContainerFrame](imagecontainerframe%28%29.md): Returns the receiver’s image container frame rectangle, which defines the position of the container of the thumbnail.
