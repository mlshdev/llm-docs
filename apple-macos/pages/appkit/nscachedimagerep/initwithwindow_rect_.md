> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscachedimagerep/initwithwindow:rect:](https://developer.apple.com/documentation/appkit/nscachedimagerep/initwithwindow:rect:)

# initWithWindow:rect:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Returns a cached image representation initialized for drawing in the specified window.

## Declaration

```objectivec
- (id) initWithWindow:(NSWindow *) win rect:(NSRect) rect;
```

## Parameters

- `win`: The window (typically offscreen) in which the image is to be rendered. The window is retained by the receiver.
- `rect`: The position and size of the image in the specified window. This rectangle should be specified in the base coordinate system of the window.

<a id="Discussion"></a>

## Discussion

You must draw the image yourself in the designated part of the window. There are no `NSCachedImageRep` methods for this purpose.

## See Also

### Related Documentation

- [size](../nsimagerep/size.md): The size of the image representation, measured in points in the user coordinate space.

### Initializing Cached Representations of Images

- [initWithSize:depth:separate:alpha:](initwithsize_depth_separate_alpha_.md): Deprecated. Returns a cached image representation initialized with the specified image characteristics.
