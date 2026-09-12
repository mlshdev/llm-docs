> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisegmentedcontrol/settitle(_:forsegmentat:)](https://developer.apple.com/documentation/uikit/uisegmentedcontrol/settitle(_:forsegmentat:))

# setTitle(\_:forSegmentAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the title of a segment.

## Declaration

```swift
func setTitle(_ title: String?, forSegmentAt segment: Int)
```

## Parameters

- `title`: A string to display in the segment as its title.
- `segment`: An index number identifying a segment in the control. It must be a number between 0 and the number of segments ([numberOfSegments](numberofsegments.md)) minus 1; the segmented control pins values exceeding this upper range to the last segment.

<a id="Discussion"></a>

## Discussion

A segment can have only an image or a title; it can’t have both. There’s no default title.

## See Also

### Managing segment content

- [setImage(\_:forSegmentAt:)](setimage%28__forsegmentat_%29.md): Sets the content of a segment to a given image.
- [imageForSegment(at:)](imageforsegment%28at_%29.md): Returns the image for a specific segment.
- [titleForSegment(at:)](titleforsegment%28at_%29.md): Returns the title of the specified segment.

# setTitle:forSegmentAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the title of a segment.

## Declaration

```objectivec
- (void) setTitle:(NSString *) title forSegmentAtIndex:(NSUInteger) segment;
```

## Parameters

- `title`: A string to display in the segment as its title.
- `segment`: An index number identifying a segment in the control. It must be a number between 0 and the number of segments ([numberOfSegments](numberofsegments.md)) minus 1; the segmented control pins values exceeding this upper range to the last segment.

<a id="Discussion"></a>

## Discussion

A segment can have only an image or a title; it can’t have both. There’s no default title.

## See Also

### Managing segment content

- [setImage:forSegmentAtIndex:](setimage%28__forsegmentat_%29.md): Sets the content of a segment to a given image.
- [imageForSegmentAtIndex:](imageforsegment%28at_%29.md): Returns the image for a specific segment.
- [titleForSegmentAtIndex:](titleforsegment%28at_%29.md): Returns the title of the specified segment.
