> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcontrol/setimagescaling(_:forsegment:)](https://developer.apple.com/documentation/appkit/nssegmentedcontrol/setimagescaling(_:forsegment:))

# setImageScaling(\_:forSegment:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the scaling mode used to display the specified segment’s image.

## Declaration

```swift
func setImageScaling(_ scaling: NSImageScaling, forSegment segment: Int)
```

## Parameters

- `scaling`: One of the image scaling constants. For a list of possible values, see [NSImageScaling](../nsimagescaling.md).
- `segment`: The index of the segment whose enabled state you want to get. This method raises an exception ([rangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

## See Also

### Configuring a segment image

- [setImage(\_:forSegment:)](setimage%28__forsegment_%29.md): Sets the image for the specified segment.
- [image(forSegment:)](image%28forsegment_%29.md): Returns the image associated with the specified segment.
- [imageScaling(forSegment:)](imagescaling%28forsegment_%29.md): Returns the scaling mode used to display the specified segment’s image.

# setImageScaling:forSegment: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the scaling mode used to display the specified segment’s image.

## Declaration

```objectivec
- (void) setImageScaling:(NSImageScaling) scaling forSegment:(NSInteger) segment;
```

## Parameters

- `scaling`: One of the image scaling constants. For a list of possible values, see [NSImageScaling](../nsimagescaling.md).
- `segment`: The index of the segment whose enabled state you want to get. This method raises an exception ([NSRangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

## See Also

### Configuring a segment image

- [setImage:forSegment:](setimage%28__forsegment_%29.md): Sets the image for the specified segment.
- [imageForSegment:](image%28forsegment_%29.md): Returns the image associated with the specified segment.
- [imageScalingForSegment:](imagescaling%28forsegment_%29.md): Returns the scaling mode used to display the specified segment’s image.
