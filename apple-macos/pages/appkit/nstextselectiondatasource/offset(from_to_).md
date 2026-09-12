> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselectiondatasource/offset(from:to:)](https://developer.apple.com/documentation/appkit/nstextselectiondatasource/offset(from:to:))

# offset(from:to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the offset between the two locations you specify.

## Declaration

```swift
func offset(from: any NSTextLocation, to: any NSTextLocation) -> Int
```

## Parameters

- `from`: The starting location.
- `to`: The ending location.

## See Also

### Finding specific content in the selection

- [location(\_:offsetBy:)](location%28__offsetby_%29.md): Returns a new location using the location and offset you specify.
- [lineFragmentRange(for:inContainerAt:)](linefragmentrange%28for_incontainerat_%29.md): Returns the range of the line fragment that contains the point you specify.
- [textRange(for:enclosing:)](textrange%28for_enclosing_%29.md): Returns a text range that corresponds to selection granularity of the enclosing location.

# offsetFromLocation:toLocation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the offset between the two locations you specify.

## Declaration

```objectivec
- (NSInteger) offsetFromLocation:(id<NSTextLocation>) from toLocation:(id<NSTextLocation>) to;
```

## Parameters

- `from`: The starting location.
- `to`: The ending location.

## See Also

### Finding specific content in the selection

- [locationFromLocation:withOffset:](location%28__offsetby_%29.md): Returns a new location using the location and offset you specify.
- [lineFragmentRangeForPoint:inContainerAtLocation:](linefragmentrange%28for_incontainerat_%29.md): Returns the range of the line fragment that contains the point you specify.
- [textRangeForSelectionGranularity:enclosingLocation:](textrange%28for_enclosing_%29.md): Returns a text range that corresponds to selection granularity of the enclosing location.
