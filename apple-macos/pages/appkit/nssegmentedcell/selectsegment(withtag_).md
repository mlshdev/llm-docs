> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcell/selectsegment(withtag:)](https://developer.apple.com/documentation/appkit/nssegmentedcell/selectsegment(withtag:))

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

- `tag`: The tag associated with the desired segment.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the segment was selected successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Typically, you use Interface Builder to specify the tag for each segment. You may also set this value programmatically using the [setTag(\_:forSegment:)](settag%28__forsegment_%29.md) method.

## See Also

### Related Documentation

- [setTag(\_:forSegment:)](settag%28__forsegment_%29.md): Sets the tag for the specified segment.

### Specifying the Selected Segment

- [setSelected(\_:forSegment:)](setselected%28__forsegment_%29.md): Sets the selection state of the specified segment.
- [makeNextSegmentKey()](makenextsegmentkey%28%29.md): Selects the next segment.
- [makePreviousSegmentKey()](makeprevioussegmentkey%28%29.md): Selects the previous segment.
- [selectedSegment](selectedsegment.md): The index of the selected segment of the control, or `-1` if no segment is selected.
- [isSelected(forSegment:)](isselected%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is selected,

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

- `tag`: The tag associated with the desired segment.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the segment was selected successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Typically, you use Interface Builder to specify the tag for each segment. You may also set this value programmatically using the [setTag:forSegment:](settag%28__forsegment_%29.md) method.

## See Also

### Related Documentation

- [setTag:forSegment:](settag%28__forsegment_%29.md): Sets the tag for the specified segment.

### Specifying the Selected Segment

- [setSelected:forSegment:](setselected%28__forsegment_%29.md): Sets the selection state of the specified segment.
- [makeNextSegmentKey](makenextsegmentkey%28%29.md): Selects the next segment.
- [makePreviousSegmentKey](makeprevioussegmentkey%28%29.md): Selects the previous segment.
- [selectedSegment](selectedsegment.md): The index of the selected segment of the control, or `-1` if no segment is selected.
- [isSelectedForSegment:](isselected%28forsegment_%29.md): Returns a Boolean value indicating whether the specified segment is selected,
