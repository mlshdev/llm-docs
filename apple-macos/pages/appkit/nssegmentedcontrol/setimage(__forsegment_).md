> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcontrol/setimage(_:forsegment:)](https://developer.apple.com/documentation/appkit/nssegmentedcontrol/setimage(_:forsegment:))

# setImage(\_:forSegment:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the image for the specified segment.

## Declaration

```swift
func setImage(_ image: NSImage?, forSegment segment: Int)
```

## Parameters

- `image`: The image to apply to the segment or `nil` if you want to clear the existing image. Images are not scaled to fit inside a segment. If the image is larger than the available space, it is clipped.
- `segment`: The index of the segment whose image you want to set. This method raises an exception ([rangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

## See Also

### Configuring a segment image

- [image(forSegment:)](image%28forsegment_%29.md): Returns the image associated with the specified segment.
- [setImageScaling(\_:forSegment:)](setimagescaling%28__forsegment_%29.md): Sets the scaling mode used to display the specified segment’s image.
- [imageScaling(forSegment:)](imagescaling%28forsegment_%29.md): Returns the scaling mode used to display the specified segment’s image.

# setImage:forSegment: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the image for the specified segment.

## Declaration

```objectivec
- (void) setImage:(NSImage *) image forSegment:(NSInteger) segment;
```

## Parameters

- `image`: The image to apply to the segment or `nil` if you want to clear the existing image. Images are not scaled to fit inside a segment. If the image is larger than the available space, it is clipped.
- `segment`: The index of the segment whose image you want to set. This method raises an exception ([NSRangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

## See Also

### Configuring a segment image

- [imageForSegment:](image%28forsegment_%29.md): Returns the image associated with the specified segment.
- [setImageScaling:forSegment:](setimagescaling%28__forsegment_%29.md): Sets the scaling mode used to display the specified segment’s image.
- [imageScalingForSegment:](imagescaling%28forsegment_%29.md): Returns the scaling mode used to display the specified segment’s image.
