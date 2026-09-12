> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisegmentedcontrol/removeallsegments()](https://developer.apple.com/documentation/uikit/uisegmentedcontrol/removeallsegments())

# removeAllSegments() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Removes all segments of the segmented control.

## Declaration

```swift
func removeAllSegments()
```

## See Also

### Managing segments

- [numberOfSegments](numberofsegments.md): Returns the number of segments the segmented control has.
- [segmentIndex(identifiedBy:)](segmentindex%28identifiedby_%29.md): The index of a segment with an action that has an identifier matching the identifier you specify.
- [insertSegment(action:at:animated:)](insertsegment%28action_at_animated_%29.md): Insert a segment with the action you specify at the given index.
- [insertSegment(with:at:animated:)](insertsegment%28with_at_animated_%29.md): Inserts a segment at the position you specify and gives it an image as content.
- [insertSegment(withTitle:at:animated:)](insertsegment%28withtitle_at_animated_%29.md): Inserts a segment at the position you specify and gives it a title as content.
- [removeSegment(at:animated:)](removesegment%28at_animated_%29.md): Removes the segment you specify from the segmented control, optionally animating the transition.
- [selectedSegmentIndex](selectedsegmentindex.md): The index number that identifies the selected segment that the user last touched.
- [noSegment](nosegment.md): A segment index value indicating that there’s no selected segment.

# removeAllSegments (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Removes all segments of the segmented control.

## Declaration

```objectivec
- (void) removeAllSegments;
```

## See Also

### Managing segments

- [numberOfSegments](numberofsegments.md): Returns the number of segments the segmented control has.
- [segmentIndexForActionIdentifier:](segmentindex%28identifiedby_%29.md): The index of a segment with an action that has an identifier matching the identifier you specify.
- [insertSegmentWithAction:atIndex:animated:](insertsegment%28action_at_animated_%29.md): Insert a segment with the action you specify at the given index.
- [insertSegmentWithImage:atIndex:animated:](insertsegment%28with_at_animated_%29.md): Inserts a segment at the position you specify and gives it an image as content.
- [insertSegmentWithTitle:atIndex:animated:](insertsegment%28withtitle_at_animated_%29.md): Inserts a segment at the position you specify and gives it a title as content.
- [removeSegmentAtIndex:animated:](removesegment%28at_animated_%29.md): Removes the segment you specify from the segmented control, optionally animating the transition.
- [selectedSegmentIndex](selectedsegmentindex.md): The index number that identifies the selected segment that the user last touched.
- [UISegmentedControlNoSegment](nosegment.md): A segment index value indicating that there’s no selected segment.
