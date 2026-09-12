> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisegmentedcontrol/titleforsegment(at:)](https://developer.apple.com/documentation/uikit/uisegmentedcontrol/titleforsegment(at:))

# titleForSegment(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the title of the specified segment.

## Declaration

```swift
func titleForSegment(at segment: Int) -> String?
```

## Parameters

- `segment`: An index number identifying a segment in the control. It must be a number between 0 and the number of segments ([numberOfSegments](numberofsegments.md)) minus 1; the segmented control pins values exceeding this upper range to the last segment.

<a id="return-value"></a>

## Return Value

Returns the string (title) assigned to the receiver as content. If there is no title, it returns `nil`.

## See Also

### Managing segment content

- [setImage(\_:forSegmentAt:)](setimage%28__forsegmentat_%29.md): Sets the content of a segment to a given image.
- [imageForSegment(at:)](imageforsegment%28at_%29.md): Returns the image for a specific segment.
- [setTitle(\_:forSegmentAt:)](settitle%28__forsegmentat_%29.md): Sets the title of a segment.

# titleForSegmentAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the title of the specified segment.

## Declaration

```objectivec
- (NSString *) titleForSegmentAtIndex:(NSUInteger) segment;
```

## Parameters

- `segment`: An index number identifying a segment in the control. It must be a number between 0 and the number of segments ([numberOfSegments](numberofsegments.md)) minus 1; the segmented control pins values exceeding this upper range to the last segment.

<a id="return-value"></a>

## Return Value

Returns the string (title) assigned to the receiver as content. If there is no title, it returns `nil`.

## See Also

### Managing segment content

- [setImage:forSegmentAtIndex:](setimage%28__forsegmentat_%29.md): Sets the content of a segment to a given image.
- [imageForSegmentAtIndex:](imageforsegment%28at_%29.md): Returns the image for a specific segment.
- [setTitle:forSegmentAtIndex:](settitle%28__forsegmentat_%29.md): Sets the title of a segment.
