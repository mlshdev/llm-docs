> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcontrol/setlabel(_:forsegment:)](https://developer.apple.com/documentation/appkit/nssegmentedcontrol/setlabel(_:forsegment:))

# setLabel(\_:forSegment:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the label for the specified segment.

## Declaration

```swift
func setLabel(_ label: String, forSegment segment: Int)
```

## Parameters

- `label`: The label you want to display in the segment. If the width of the string is greater than the width of the segment, the string’s text is truncated during drawing.
- `segment`: The index of the segment whose label you want to set. This method raises an exception ([rangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

## See Also

### Configuring the segment text

- [label(forSegment:)](label%28forsegment_%29.md): Returns the label of the specified segment.
- [setAlignment(\_:forSegment:)](setalignment%28__forsegment_%29.md)
- [alignment(forSegment:)](alignment%28forsegment_%29.md)

# setLabel:forSegment: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the label for the specified segment.

## Declaration

```objectivec
- (void) setLabel:(NSString *) label forSegment:(NSInteger) segment;
```

## Parameters

- `label`: The label you want to display in the segment. If the width of the string is greater than the width of the segment, the string’s text is truncated during drawing.
- `segment`: The index of the segment whose label you want to set. This method raises an exception ([NSRangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

## See Also

### Configuring the segment text

- [labelForSegment:](label%28forsegment_%29.md): Returns the label of the specified segment.
- [setAlignment:forSegment:](setalignment%28__forsegment_%29.md)
- [alignmentForSegment:](alignment%28forsegment_%29.md)
