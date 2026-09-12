> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcontrol/selectsegment(withtag:)](https://developer.apple.com/documentation/appkit/nssegmentedcontrol/selectsegment(withtag:))

# selectSegment(withTag:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the segment with the specified tag.

## Declaration

```swift
func selectSegment(withTag tag: Int) -> Bool
```

## Parameters

- `tag`: The tag associated with the desired segment. A tag is an integer value that can be assigned to a segment as a way of identifying it without knowing its position in the control.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the segment was selected successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Typically, you use Interface Builder to specify the tag for each segment. You may also set this value programmatically using the `setTag:forSegment:` method of `NSSegmentedCell`.

## See Also

### Related Documentation

- [setTag(\_:forSegment:)](../nssegmentedcell/settag%28__forsegment_%29.md): Sets the tag for the specified segment.

### Managing the selected segment

- [selectedSegment](selectedsegment.md): The index of the selected segment of the control, or `-1` if no segment is selected.
- [indexOfSelectedItem](indexofselecteditem.md)
- [setSelected(\_:forSegment:)](setselected%28__forsegment_%29.md): Sets the selection state of the specified segment.
- [isSelected(forSegment:)](isselected%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is selected.
- [selectedSegmentBezelColor](selectedsegmentbezelcolor.md): The color of the selected segment’s bezel, in appearances that support it.
- [doubleValueForSelectedSegment](doublevalueforselectedsegment.md): When the tracking mode for the control is set to use a momentary accelerator, returns a value for the selected segment.

# selectSegmentWithTag: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Selects the segment with the specified tag.

## Declaration

```objectivec
- (BOOL) selectSegmentWithTag:(NSInteger) tag;
```

## Parameters

- `tag`: The tag associated with the desired segment. A tag is an integer value that can be assigned to a segment as a way of identifying it without knowing its position in the control.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the segment was selected successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Typically, you use Interface Builder to specify the tag for each segment. You may also set this value programmatically using the `setTag:forSegment:` method of `NSSegmentedCell`.

## See Also

### Related Documentation

- [setTag:forSegment:](../nssegmentedcell/settag%28__forsegment_%29.md): Sets the tag for the specified segment.

### Managing the selected segment

- [selectedSegment](selectedsegment.md): The index of the selected segment of the control, or `-1` if no segment is selected.
- [indexOfSelectedItem](indexofselecteditem.md)
- [setSelected:forSegment:](setselected%28__forsegment_%29.md): Sets the selection state of the specified segment.
- [isSelectedForSegment:](isselected%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is selected.
- [selectedSegmentBezelColor](selectedsegmentbezelcolor.md): The color of the selected segment’s bezel, in appearances that support it.
- [doubleValueForSelectedSegment](doublevalueforselectedsegment.md): When the tracking mode for the control is set to use a momentary accelerator, returns a value for the selected segment.
