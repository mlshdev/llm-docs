> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisegmentedcontrol/insertsegment(withtitle:at:animated:)](https://developer.apple.com/documentation/uikit/uisegmentedcontrol/insertsegment(withtitle:at:animated:))

# insertSegment(withTitle:at:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Inserts a segment at the position you specify and gives it a title as content.

## Declaration

```swift
func insertSegment(withTitle title: String?, at segment: Int, animated: Bool)
```

## Parameters

- `title`: A string to use as the segment’s title.
- `segment`: An index number identifying a segment in the control.

  `segment` must be a number in the range 0 to the number of segments ([numberOfSegments](numberofsegments.md)) inclusive; the segmented control pins values exceeding this upper range to the last segment.

  The method inserts the new segment just before the designated one.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) if the insertion of the new segment must be animated, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing segments

- [numberOfSegments](numberofsegments.md): Returns the number of segments the segmented control has.
- [segmentIndex(identifiedBy:)](segmentindex%28identifiedby_%29.md): The index of a segment with an action that has an identifier matching the identifier you specify.
- [insertSegment(action:at:animated:)](insertsegment%28action_at_animated_%29.md): Insert a segment with the action you specify at the given index.
- [insertSegment(with:at:animated:)](insertsegment%28with_at_animated_%29.md): Inserts a segment at the position you specify and gives it an image as content.
- [removeAllSegments()](removeallsegments%28%29.md): Removes all segments of the segmented control.
- [removeSegment(at:animated:)](removesegment%28at_animated_%29.md): Removes the segment you specify from the segmented control, optionally animating the transition.
- [selectedSegmentIndex](selectedsegmentindex.md): The index number that identifies the selected segment that the user last touched.
- [noSegment](nosegment.md): A segment index value indicating that there’s no selected segment.

# insertSegmentWithTitle:atIndex:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Inserts a segment at the position you specify and gives it a title as content.

## Declaration

```objectivec
- (void) insertSegmentWithTitle:(NSString *) title atIndex:(NSUInteger) segment animated:(BOOL) animated;
```

## Parameters

- `title`: A string to use as the segment’s title.
- `segment`: An index number identifying a segment in the control.

  `segment` must be a number in the range 0 to the number of segments ([numberOfSegments](numberofsegments.md)) inclusive; the segmented control pins values exceeding this upper range to the last segment.

  The method inserts the new segment just before the designated one.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) if the insertion of the new segment must be animated, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing segments

- [numberOfSegments](numberofsegments.md): Returns the number of segments the segmented control has.
- [segmentIndexForActionIdentifier:](segmentindex%28identifiedby_%29.md): The index of a segment with an action that has an identifier matching the identifier you specify.
- [insertSegmentWithAction:atIndex:animated:](insertsegment%28action_at_animated_%29.md): Insert a segment with the action you specify at the given index.
- [insertSegmentWithImage:atIndex:animated:](insertsegment%28with_at_animated_%29.md): Inserts a segment at the position you specify and gives it an image as content.
- [removeAllSegments](removeallsegments%28%29.md): Removes all segments of the segmented control.
- [removeSegmentAtIndex:animated:](removesegment%28at_animated_%29.md): Removes the segment you specify from the segmented control, optionally animating the transition.
- [selectedSegmentIndex](selectedsegmentindex.md): The index number that identifies the selected segment that the user last touched.
- [UISegmentedControlNoSegment](nosegment.md): A segment index value indicating that there’s no selected segment.
