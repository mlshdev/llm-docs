> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisegmentedcontrol/setimage(_:forsegmentat:)](https://developer.apple.com/documentation/uikit/uisegmentedcontrol/setimage(_:forsegmentat:))

# setImage(\_:forSegmentAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the content of a segment to a given image.

## Declaration

```swift
func setImage(_ image: UIImage?, forSegmentAt segment: Int)
```

## Parameters

- `image`: An image object to display in the segment.
- `segment`: An index number identifying a segment in the control. It must be a number between 0 and the number of segments ([numberOfSegments](numberofsegments.md)) minus 1; the segmented control pins values exceeding this upper range to the last segment.

<a id="Discussion"></a>

## Discussion

A segment can have only an image or a title; it can’t have both. There’s no default image.

## See Also

### Managing segment content

- [imageForSegment(at:)](imageforsegment%28at_%29.md): Returns the image for a specific segment.
- [setTitle(\_:forSegmentAt:)](settitle%28__forsegmentat_%29.md): Sets the title of a segment.
- [titleForSegment(at:)](titleforsegment%28at_%29.md): Returns the title of the specified segment.

# setImage:forSegmentAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the content of a segment to a given image.

## Declaration

```objectivec
- (void) setImage:(UIImage *) image forSegmentAtIndex:(NSUInteger) segment;
```

## Parameters

- `image`: An image object to display in the segment.
- `segment`: An index number identifying a segment in the control. It must be a number between 0 and the number of segments ([numberOfSegments](numberofsegments.md)) minus 1; the segmented control pins values exceeding this upper range to the last segment.

<a id="Discussion"></a>

## Discussion

A segment can have only an image or a title; it can’t have both. There’s no default image.

## See Also

### Managing segment content

- [imageForSegmentAtIndex:](imageforsegment%28at_%29.md): Returns the image for a specific segment.
- [setTitle:forSegmentAtIndex:](settitle%28__forsegmentat_%29.md): Sets the title of a segment.
- [titleForSegmentAtIndex:](titleforsegment%28at_%29.md): Returns the title of the specified segment.
