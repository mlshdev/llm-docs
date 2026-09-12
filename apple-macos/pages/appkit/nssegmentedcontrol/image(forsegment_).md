> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcontrol/image(forsegment:)](https://developer.apple.com/documentation/appkit/nssegmentedcontrol/image(forsegment:))

# image(forSegment:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the image associated with the specified segment.

## Declaration

```swift
func image(forSegment segment: Int) -> NSImage?
```

## Parameters

- `segment`: The index of the segment whose image you want to get. This method raises an exception ([rangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

<a id="return-value"></a>

## Return Value

The image associated with the segment; otherwise, `nil`.

## See Also

### Configuring a segment image

- [setImage(\_:forSegment:)](setimage%28__forsegment_%29.md): Sets the image for the specified segment.
- [setImageScaling(\_:forSegment:)](setimagescaling%28__forsegment_%29.md): Sets the scaling mode used to display the specified segment’s image.
- [imageScaling(forSegment:)](imagescaling%28forsegment_%29.md): Returns the scaling mode used to display the specified segment’s image.

# imageForSegment: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the image associated with the specified segment.

## Declaration

```objectivec
- (NSImage *) imageForSegment:(NSInteger) segment;
```

## Parameters

- `segment`: The index of the segment whose image you want to get. This method raises an exception ([NSRangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

<a id="return-value"></a>

## Return Value

The image associated with the segment; otherwise, `nil`.

## See Also

### Configuring a segment image

- [setImage:forSegment:](setimage%28__forsegment_%29.md): Sets the image for the specified segment.
- [setImageScaling:forSegment:](setimagescaling%28__forsegment_%29.md): Sets the scaling mode used to display the specified segment’s image.
- [imageScalingForSegment:](imagescaling%28forsegment_%29.md): Returns the scaling mode used to display the specified segment’s image.
