> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisegmentedcontrol/insertsegment(action:at:animated:)](https://developer.apple.com/documentation/uikit/uisegmentedcontrol/insertsegment(action:at:animated:))

# insertSegment(action:at:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Insert a segment with the action you specify at the given index.

## Declaration

```swift
func insertSegment(action: UIAction, at segment: Int, animated: Bool)
```

## Parameters

- `action`: A [UIAction](../uiaction.md) object to set on the segment at the index you specify.
- `segment`: An unsigned integer index of a segment.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) if the insertion of the new segment animates; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Segments prefer images over titles when the action contains both. Selecting a segment invokes the action’s [UIActionHandler](../uiactionhandler.md), as well as handlers for the [valueChanged](../uicontrol/event/valuechanged.md) and [primaryActionTriggered](../uicontrol/event/primaryactiontriggered.md) control events.

If a segment exists with the action’s identifier, this method updates the existing segment is if the index is the same or removes the segment if the index is different.

## See Also

### Managing segments

- [numberOfSegments](numberofsegments.md): Returns the number of segments the segmented control has.
- [segmentIndex(identifiedBy:)](segmentindex%28identifiedby_%29.md): The index of a segment with an action that has an identifier matching the identifier you specify.
- [insertSegment(with:at:animated:)](insertsegment%28with_at_animated_%29.md): Inserts a segment at the position you specify and gives it an image as content.
- [insertSegment(withTitle:at:animated:)](insertsegment%28withtitle_at_animated_%29.md): Inserts a segment at the position you specify and gives it a title as content.
- [removeAllSegments()](removeallsegments%28%29.md): Removes all segments of the segmented control.
- [removeSegment(at:animated:)](removesegment%28at_animated_%29.md): Removes the segment you specify from the segmented control, optionally animating the transition.
- [selectedSegmentIndex](selectedsegmentindex.md): The index number that identifies the selected segment that the user last touched.
- [noSegment](nosegment.md): A segment index value indicating that there’s no selected segment.

# insertSegmentWithAction:atIndex:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Insert a segment with the action you specify at the given index.

## Declaration

```objectivec
- (void) insertSegmentWithAction:(UIAction *) action atIndex:(NSUInteger) segment animated:(BOOL) animated;
```

## Parameters

- `action`: A [UIAction](../uiaction.md) object to set on the segment at the index you specify.
- `segment`: An unsigned integer index of a segment.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) if the insertion of the new segment animates; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Segments prefer images over titles when the action contains both. Selecting a segment invokes the action’s [UIActionHandler](../uiactionhandler.md), as well as handlers for the [UIControlEventValueChanged](../uicontrol/event/valuechanged.md) and [UIControlEventPrimaryActionTriggered](../uicontrol/event/primaryactiontriggered.md) control events.

If a segment exists with the action’s identifier, this method updates the existing segment is if the index is the same or removes the segment if the index is different.

## See Also

### Managing segments

- [numberOfSegments](numberofsegments.md): Returns the number of segments the segmented control has.
- [segmentIndexForActionIdentifier:](segmentindex%28identifiedby_%29.md): The index of a segment with an action that has an identifier matching the identifier you specify.
- [insertSegmentWithImage:atIndex:animated:](insertsegment%28with_at_animated_%29.md): Inserts a segment at the position you specify and gives it an image as content.
- [insertSegmentWithTitle:atIndex:animated:](insertsegment%28withtitle_at_animated_%29.md): Inserts a segment at the position you specify and gives it a title as content.
- [removeAllSegments](removeallsegments%28%29.md): Removes all segments of the segmented control.
- [removeSegmentAtIndex:animated:](removesegment%28at_animated_%29.md): Removes the segment you specify from the segmented control, optionally animating the transition.
- [selectedSegmentIndex](selectedsegmentindex.md): The index number that identifies the selected segment that the user last touched.
- [UISegmentedControlNoSegment](nosegment.md): A segment index value indicating that there’s no selected segment.
