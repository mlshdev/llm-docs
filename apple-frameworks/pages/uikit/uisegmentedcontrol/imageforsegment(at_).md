> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisegmentedcontrol/imageforsegment(at:)](https://developer.apple.com/documentation/uikit/uisegmentedcontrol/imageforsegment(at:))

# imageForSegment(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the image for a specific segment.

## Declaration

```swift
func imageForSegment(at segment: Int) -> UIImage?
```

## Parameters

- `segment`: An index number identifying a segment in the control. It must be a number between 0 and the number of segments ([numberOfSegments](numberofsegments.md)) minus 1; the segmented control pins values exceeding this upper range to the last segment.

<a id="return-value"></a>

## Return Value

Returns the image assigned to the receiver as content. If there is no image, it returns `nil`.

## See Also

### Managing segment content

- [setImage(\_:forSegmentAt:)](setimage%28__forsegmentat_%29.md): Sets the content of a segment to a given image.
- [setTitle(\_:forSegmentAt:)](settitle%28__forsegmentat_%29.md): Sets the title of a segment.
- [titleForSegment(at:)](titleforsegment%28at_%29.md): Returns the title of the specified segment.

# imageForSegmentAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the image for a specific segment.

## Declaration

```objectivec
- (UIImage *) imageForSegmentAtIndex:(NSUInteger) segment;
```

## Parameters

- `segment`: An index number identifying a segment in the control. It must be a number between 0 and the number of segments ([numberOfSegments](numberofsegments.md)) minus 1; the segmented control pins values exceeding this upper range to the last segment.

<a id="return-value"></a>

## Return Value

Returns the image assigned to the receiver as content. If there is no image, it returns `nil`.

## See Also

### Managing segment content

- [setImage:forSegmentAtIndex:](setimage%28__forsegmentat_%29.md): Sets the content of a segment to a given image.
- [setTitle:forSegmentAtIndex:](settitle%28__forsegmentat_%29.md): Sets the title of a segment.
- [titleForSegmentAtIndex:](titleforsegment%28at_%29.md): Returns the title of the specified segment.
