> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextselectiondatasource/linefragmentrange(for:incontainerat:)](https://developer.apple.com/documentation/appkit/nstextselectiondatasource/linefragmentrange(for:incontainerat:))

# lineFragmentRange(for:inContainerAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the range of the line fragment that contains the point you specify.

## Declaration

```swift
func lineFragmentRange(for point: CGPoint, inContainerAt location: any NSTextLocation) -> NSTextRange?
```

## Parameters

- `point`: The starting point that contains the line fragment, in the coordinate system of `location`.
- `location`: The location of the line fragment.

<a id="return-value"></a>

## Return Value

An `NSTextRange` that describes the location of the line fragment, or nil if the range isn’t found.

## See Also

### Finding specific content in the selection

- [location(\_:offsetBy:)](location%28__offsetby_%29.md): Returns a new location using the location and offset you specify.
- [offset(from:to:)](offset%28from_to_%29.md): Returns the offset between the two locations you specify.
- [textRange(for:enclosing:)](textrange%28for_enclosing_%29.md): Returns a text range that corresponds to selection granularity of the enclosing location.

# lineFragmentRangeForPoint:inContainerAtLocation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the range of the line fragment that contains the point you specify.

## Declaration

```objectivec
- (NSTextRange *) lineFragmentRangeForPoint:(CGPoint) point inContainerAtLocation:(id<NSTextLocation>) location;
```

## Parameters

- `point`: The starting point that contains the line fragment, in the coordinate system of `location`.
- `location`: The location of the line fragment.

<a id="return-value"></a>

## Return Value

An `NSTextRange` that describes the location of the line fragment, or nil if the range isn’t found.

## See Also

### Finding specific content in the selection

- [locationFromLocation:withOffset:](location%28__offsetby_%29.md): Returns a new location using the location and offset you specify.
- [offsetFromLocation:toLocation:](offset%28from_to_%29.md): Returns the offset between the two locations you specify.
- [textRangeForSelectionGranularity:enclosingLocation:](textrange%28for_enclosing_%29.md): Returns a text range that corresponds to selection granularity of the enclosing location.
