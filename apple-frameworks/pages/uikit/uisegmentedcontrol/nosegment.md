> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisegmentedcontrol/nosegment](https://developer.apple.com/documentation/uikit/uisegmentedcontrol/nosegment)

# noSegment (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A segment index value indicating that there’s no selected segment.

## Declaration

```swift
class var noSegment: Int { get }
```

<a id="Discussion"></a>

## Discussion

See [selectedSegmentIndex](selectedsegmentindex.md) for more information.

## See Also

### Managing segments

- [numberOfSegments](numberofsegments.md): Returns the number of segments the segmented control has.
- [segmentIndex(identifiedBy:)](segmentindex%28identifiedby_%29.md): The index of a segment with an action that has an identifier matching the identifier you specify.
- [insertSegment(action:at:animated:)](insertsegment%28action_at_animated_%29.md): Insert a segment with the action you specify at the given index.
- [insertSegment(with:at:animated:)](insertsegment%28with_at_animated_%29.md): Inserts a segment at the position you specify and gives it an image as content.
- [insertSegment(withTitle:at:animated:)](insertsegment%28withtitle_at_animated_%29.md): Inserts a segment at the position you specify and gives it a title as content.
- [removeAllSegments()](removeallsegments%28%29.md): Removes all segments of the segmented control.
- [removeSegment(at:animated:)](removesegment%28at_animated_%29.md): Removes the segment you specify from the segmented control, optionally animating the transition.
- [selectedSegmentIndex](selectedsegmentindex.md): The index number that identifies the selected segment that the user last touched.

# UISegmentedControlNoSegment (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A segment index value indicating that there’s no selected segment.

## Declaration

```objectivec
UISegmentedControlNoSegment
```

<a id="Discussion"></a>

## Discussion

See [selectedSegmentIndex](selectedsegmentindex.md) for more information.

## See Also

### Managing segments

- [numberOfSegments](numberofsegments.md): Returns the number of segments the segmented control has.
- [segmentIndexForActionIdentifier:](segmentindex%28identifiedby_%29.md): The index of a segment with an action that has an identifier matching the identifier you specify.
- [insertSegmentWithAction:atIndex:animated:](insertsegment%28action_at_animated_%29.md): Insert a segment with the action you specify at the given index.
- [insertSegmentWithImage:atIndex:animated:](insertsegment%28with_at_animated_%29.md): Inserts a segment at the position you specify and gives it an image as content.
- [insertSegmentWithTitle:atIndex:animated:](insertsegment%28withtitle_at_animated_%29.md): Inserts a segment at the position you specify and gives it a title as content.
- [removeAllSegments](removeallsegments%28%29.md): Removes all segments of the segmented control.
- [removeSegmentAtIndex:animated:](removesegment%28at_animated_%29.md): Removes the segment you specify from the segmented control, optionally animating the transition.
- [selectedSegmentIndex](selectedsegmentindex.md): The index number that identifies the selected segment that the user last touched.
