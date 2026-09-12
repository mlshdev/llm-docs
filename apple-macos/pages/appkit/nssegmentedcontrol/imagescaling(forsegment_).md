> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcontrol/imagescaling(forsegment:)](https://developer.apple.com/documentation/appkit/nssegmentedcontrol/imagescaling(forsegment:))

# imageScaling(forSegment:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the scaling mode used to display the specified segment’s image.

## Declaration

```swift
func imageScaling(forSegment segment: Int) -> NSImageScaling
```

## Parameters

- `segment`: The index of the segment whose enabled state you want to get. This method raises an exception ([rangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

<a id="return-value"></a>

## Return Value

One of the image scaling constants. For a list of possible values, see [NSImageScaling](../nsimagescaling.md). The default value is [NSImageScaling.scaleProportionallyDown](../nsimagescaling/scaleproportionallydown.md).

## See Also

### Configuring a segment image

- [setImage(\_:forSegment:)](setimage%28__forsegment_%29.md): Sets the image for the specified segment.
- [image(forSegment:)](image%28forsegment_%29.md): Returns the image associated with the specified segment.
- [setImageScaling(\_:forSegment:)](setimagescaling%28__forsegment_%29.md): Sets the scaling mode used to display the specified segment’s image.

# imageScalingForSegment: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns the scaling mode used to display the specified segment’s image.

## Declaration

```objectivec
- (NSImageScaling) imageScalingForSegment:(NSInteger) segment;
```

## Parameters

- `segment`: The index of the segment whose enabled state you want to get. This method raises an exception ([NSRangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

<a id="return-value"></a>

## Return Value

One of the image scaling constants. For a list of possible values, see [NSImageScaling](../nsimagescaling.md). The default value is [NSImageScaleProportionallyDown](../nsimagescaling/scaleproportionallydown.md).

## See Also

### Configuring a segment image

- [setImage:forSegment:](setimage%28__forsegment_%29.md): Sets the image for the specified segment.
- [imageForSegment:](image%28forsegment_%29.md): Returns the image associated with the specified segment.
- [setImageScaling:forSegment:](setimagescaling%28__forsegment_%29.md): Sets the scaling mode used to display the specified segment’s image.
