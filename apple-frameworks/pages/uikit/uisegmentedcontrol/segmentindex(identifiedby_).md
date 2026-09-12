> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisegmentedcontrol/segmentindex(identifiedby:)](https://developer.apple.com/documentation/uikit/uisegmentedcontrol/segmentindex(identifiedby:))

# segmentIndex(identifiedBy:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The index of a segment with an action that has an identifier matching the identifier you specify.

## Declaration

```swift
func segmentIndex(identifiedBy actionIdentifier: UIAction.Identifier) -> Int
```

## Parameters

- `actionIdentifier`: The [UIAction.Identifier](../uiaction/identifier-swift.struct.md) to match.

<a id="return-value"></a>

## Return Value

The index of the segment with an action that has a matching identifier, or [NSNotFound](../../foundation/nsnotfound-4qp9h.md) if no matching action is found.

## See Also

### Managing segments

- [numberOfSegments](numberofsegments.md): Returns the number of segments the segmented control has.
- [insertSegment(action:at:animated:)](insertsegment%28action_at_animated_%29.md): Insert a segment with the action you specify at the given index.
- [insertSegment(with:at:animated:)](insertsegment%28with_at_animated_%29.md): Inserts a segment at the position you specify and gives it an image as content.
- [insertSegment(withTitle:at:animated:)](insertsegment%28withtitle_at_animated_%29.md): Inserts a segment at the position you specify and gives it a title as content.
- [removeAllSegments()](removeallsegments%28%29.md): Removes all segments of the segmented control.
- [removeSegment(at:animated:)](removesegment%28at_animated_%29.md): Removes the segment you specify from the segmented control, optionally animating the transition.
- [selectedSegmentIndex](selectedsegmentindex.md): The index number that identifies the selected segment that the user last touched.
- [noSegment](nosegment.md): A segment index value indicating that there’s no selected segment.

# segmentIndexForActionIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The index of a segment with an action that has an identifier matching the identifier you specify.

## Declaration

```objectivec
- (NSInteger) segmentIndexForActionIdentifier:(UIActionIdentifier) actionIdentifier;
```

## Parameters

- `actionIdentifier`: The [UIActionIdentifier](../uiaction/identifier-swift.struct.md) to match.

<a id="return-value"></a>

## Return Value

The index of the segment with an action that has a matching identifier, or [NSNotFound](../../foundation/nsnotfound-4qp9h.md) if no matching action is found.

## See Also

### Managing segments

- [numberOfSegments](numberofsegments.md): Returns the number of segments the segmented control has.
- [insertSegmentWithAction:atIndex:animated:](insertsegment%28action_at_animated_%29.md): Insert a segment with the action you specify at the given index.
- [insertSegmentWithImage:atIndex:animated:](insertsegment%28with_at_animated_%29.md): Inserts a segment at the position you specify and gives it an image as content.
- [insertSegmentWithTitle:atIndex:animated:](insertsegment%28withtitle_at_animated_%29.md): Inserts a segment at the position you specify and gives it a title as content.
- [removeAllSegments](removeallsegments%28%29.md): Removes all segments of the segmented control.
- [removeSegmentAtIndex:animated:](removesegment%28at_animated_%29.md): Removes the segment you specify from the segmented control, optionally animating the transition.
- [selectedSegmentIndex](selectedsegmentindex.md): The index number that identifies the selected segment that the user last touched.
- [UISegmentedControlNoSegment](nosegment.md): A segment index value indicating that there’s no selected segment.
