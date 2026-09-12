> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcontrol/label(forsegment:)](https://developer.apple.com/documentation/appkit/nssegmentedcontrol/label(forsegment:))

# label(forSegment:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the label of the specified segment.

## Declaration

```swift
func label(forSegment segment: Int) -> String?
```

## Parameters

- `segment`: The index of the segment whose label you want to get. This method raises an exception ([rangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

<a id="return-value"></a>

## Return Value

The label of the segment. The returned string contains the entire text of the label, even if that text is normally truncated during drawing.

## See Also

### Configuring the segment text

- [setLabel(\_:forSegment:)](setlabel%28__forsegment_%29.md): Sets the label for the specified segment.
- [setAlignment(\_:forSegment:)](setalignment%28__forsegment_%29.md)
- [alignment(forSegment:)](alignment%28forsegment_%29.md)

# labelForSegment: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the label of the specified segment.

## Declaration

```objectivec
- (NSString *) labelForSegment:(NSInteger) segment;
```

## Parameters

- `segment`: The index of the segment whose label you want to get. This method raises an exception ([NSRangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

<a id="return-value"></a>

## Return Value

The label of the segment. The returned string contains the entire text of the label, even if that text is normally truncated during drawing.

## See Also

### Configuring the segment text

- [setLabel:forSegment:](setlabel%28__forsegment_%29.md): Sets the label for the specified segment.
- [setAlignment:forSegment:](setalignment%28__forsegment_%29.md)
- [alignmentForSegment:](alignment%28forsegment_%29.md)
