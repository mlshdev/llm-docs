> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselectiondatasource/textrange(for:enclosing:)](https://developer.apple.com/documentation/appkit/nstextselectiondatasource/textrange(for:enclosing:))

# textRange(for:enclosing:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns a text range that corresponds to selection granularity of the enclosing location.

## Declaration

```swift
func textRange(for selectionGranularity: NSTextSelection.Granularity, enclosing location: any NSTextLocation) -> NSTextRange?
```

## Parameters

- `selectionGranularity`: One of the possible [NSTextSelection.Granularity](../nstextselection/granularity-swift.enum.md) options.
- `location`: A location that encloses the text range of interest.

<a id="return-value"></a>

## Return Value

Returns the text range of the section, or `nil` when `documentRange.isEmpty` `true`.

## See Also

### Finding specific content in the selection

- [location(\_:offsetBy:)](location%28__offsetby_%29.md): Returns a new location using the location and offset you specify.
- [lineFragmentRange(for:inContainerAt:)](linefragmentrange%28for_incontainerat_%29.md): Returns the range of the line fragment that contains the point you specify.
- [offset(from:to:)](offset%28from_to_%29.md): Returns the offset between the two locations you specify.

# textRangeForSelectionGranularity:enclosingLocation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns a text range that corresponds to selection granularity of the enclosing location.

## Declaration

```objectivec
- (NSTextRange *) textRangeForSelectionGranularity:(NSTextSelectionGranularity) selectionGranularity enclosingLocation:(id<NSTextLocation>) location;
```

## Parameters

- `selectionGranularity`: One of the possible [NSTextSelectionGranularity](../nstextselection/granularity-swift.enum.md) options.
- `location`: A location that encloses the text range of interest.

<a id="return-value"></a>

## Return Value

Returns the text range of the section, or `nil` when `documentRange.isEmpty` `true`.

## See Also

### Finding specific content in the selection

- [locationFromLocation:withOffset:](location%28__offsetby_%29.md): Returns a new location using the location and offset you specify.
- [lineFragmentRangeForPoint:inContainerAtLocation:](linefragmentrange%28for_incontainerat_%29.md): Returns the range of the line fragment that contains the point you specify.
- [offsetFromLocation:toLocation:](offset%28from_to_%29.md): Returns the offset between the two locations you specify.
