> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscachedimagerep/initwithsize:depth:separate:alpha:](https://developer.apple.com/documentation/appkit/nscachedimagerep/initwithsize:depth:separate:alpha:)

# initWithSize:depth:separate:alpha:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Returns a cached image representation initialized with the specified image characteristics.

## Declaration

```objectivec
- (id) initWithSize:(NSSize) size depth:(NSWindowDepth) depth separate:(BOOL) flag alpha:(BOOL) alpha;
```

## Parameters

- `size`: The size of the image, measured in points.
- `depth`: The bit depth of the image. Specify 0 if you want the image to be the same depth as the deepest screen on the current system.
- `flag`: [true](https://developer.apple.com/documentation/swift/true) if the receiver should use a separate offscreen window to store the image; otherwise, [false](https://developer.apple.com/documentation/swift/false) if the receiver should use a shared window.
- `alpha`: [true](https://developer.apple.com/documentation/swift/true) if the image includes transparency information; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

The initialized `NSCachedImageRep` object or `nil` if the object could not be initialized.

## See Also

### Related Documentation

- [setCacheDepthMatchesImageDepth:](../nsimage/setcachedepthmatchesimagedepth_.md): Deprecated. Sets whether the image’s offscreen window caches use the same bit depth as the image data itself.
- [alpha](../nsimagerep/hasalpha.md): A Boolean value that indicates whether the image data has an alpha channel.
- [setCachedSeparately:](../nsimage/setcachedseparately_.md): Deprecated. Sets whether each image representation uses a separate offscreen window to cache its contents.
- [bitsPerSample](../nsimagerep/bitspersample.md): The number of bits per sample in the object (if the object is a planar image, this property contains the number of bits per sample per plane).

### Initializing Cached Representations of Images

- [initWithWindow:rect:](initwithwindow_rect_.md): Deprecated. Returns a cached image representation initialized for drawing in the specified window.
