> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisegmentedcontrol/selectedsegmentindex](https://developer.apple.com/documentation/uikit/uisegmentedcontrol/selectedsegmentindex)

# selectedSegmentIndex (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The index number that identifies the selected segment that the user last touched.

## Declaration

```swift
var selectedSegmentIndex: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [noSegment](nosegment.md) (no segment selected) until the user touches a segment. Set this property to `-1` to turn off the current selection. [UISegmentedControl](../uisegmentedcontrol.md) ignores this property when [isMomentary](ismomentary.md) is [true](https://developer.apple.com/documentation/swift/true). When the user touches a segment to change the selection, the system generates the control event [valueChanged](../uicontrol/event/valuechanged.md). If you set up the segmented control to respond to this control event, it sends an action message to its target.

## See Also

### Managing segments

- [numberOfSegments](numberofsegments.md): Returns the number of segments the segmented control has.
- [segmentIndex(identifiedBy:)](segmentindex%28identifiedby_%29.md): The index of a segment with an action that has an identifier matching the identifier you specify.
- [insertSegment(action:at:animated:)](insertsegment%28action_at_animated_%29.md): Insert a segment with the action you specify at the given index.
- [insertSegment(with:at:animated:)](insertsegment%28with_at_animated_%29.md): Inserts a segment at the position you specify and gives it an image as content.
- [insertSegment(withTitle:at:animated:)](insertsegment%28withtitle_at_animated_%29.md): Inserts a segment at the position you specify and gives it a title as content.
- [removeAllSegments()](removeallsegments%28%29.md): Removes all segments of the segmented control.
- [removeSegment(at:animated:)](removesegment%28at_animated_%29.md): Removes the segment you specify from the segmented control, optionally animating the transition.
- [noSegment](nosegment.md): A segment index value indicating that there’s no selected segment.

# selectedSegmentIndex (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The index number that identifies the selected segment that the user last touched.

## Declaration

```objectivec
@property (nonatomic) NSInteger selectedSegmentIndex;
```

<a id="Discussion"></a>

## Discussion

The default value is [UISegmentedControlNoSegment](nosegment.md) (no segment selected) until the user touches a segment. Set this property to `-1` to turn off the current selection. [UISegmentedControl](../uisegmentedcontrol.md) ignores this property when [momentary](ismomentary.md) is [true](https://developer.apple.com/documentation/swift/true). When the user touches a segment to change the selection, the system generates the control event [UIControlEventValueChanged](../uicontrol/event/valuechanged.md). If you set up the segmented control to respond to this control event, it sends an action message to its target.

## See Also

### Managing segments

- [numberOfSegments](numberofsegments.md): Returns the number of segments the segmented control has.
- [segmentIndexForActionIdentifier:](segmentindex%28identifiedby_%29.md): The index of a segment with an action that has an identifier matching the identifier you specify.
- [insertSegmentWithAction:atIndex:animated:](insertsegment%28action_at_animated_%29.md): Insert a segment with the action you specify at the given index.
- [insertSegmentWithImage:atIndex:animated:](insertsegment%28with_at_animated_%29.md): Inserts a segment at the position you specify and gives it an image as content.
- [insertSegmentWithTitle:atIndex:animated:](insertsegment%28withtitle_at_animated_%29.md): Inserts a segment at the position you specify and gives it a title as content.
- [removeAllSegments](removeallsegments%28%29.md): Removes all segments of the segmented control.
- [removeSegmentAtIndex:animated:](removesegment%28at_animated_%29.md): Removes the segment you specify from the segmented control, optionally animating the transition.
- [UISegmentedControlNoSegment](nosegment.md): A segment index value indicating that there’s no selected segment.
