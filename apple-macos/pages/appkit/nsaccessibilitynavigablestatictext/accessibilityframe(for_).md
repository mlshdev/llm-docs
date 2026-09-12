> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitynavigablestatictext/accessibilityframe(for:)](https://developer.apple.com/documentation/appkit/nsaccessibilitynavigablestatictext/accessibilityframe(for:))

# accessibilityFrame(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the rectangle that encloses the specified range of characters.

## Declaration

```swift
func accessibilityFrame(for range: NSRange) -> NSRect
```

## Parameters

- `range`: The range of characters.

<a id="return-value"></a>

## Return Value

The rectangle that encloses the specified characters.

<a id="Discussion"></a>

## Discussion

If the range crosses a line boundary, the returned rectangle will fully enclose all the lines of characters.

## See Also

### Supporting Accessibility

- [accessibilityLine(for:)](accessibilityline%28for_%29.md): Returns the line number for the line that contains the specified character index.
- [accessibilityRange(forLine:)](accessibilityrange%28forline_%29.md): Returns the range of characters in the specified line.
- [accessibilityString(for:)](accessibilitystring%28for_%29.md): Returns the substring for the specified range.

# accessibilityFrameForRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the rectangle that encloses the specified range of characters.

## Declaration

```objectivec
- (NSRect) accessibilityFrameForRange:(NSRange) range;
```

## Parameters

- `range`: The range of characters.

<a id="return-value"></a>

## Return Value

The rectangle that encloses the specified characters.

<a id="Discussion"></a>

## Discussion

If the range crosses a line boundary, the returned rectangle will fully enclose all the lines of characters.

## See Also

### Supporting Accessibility

- [accessibilityLineForIndex:](accessibilityline%28for_%29.md): Returns the line number for the line that contains the specified character index.
- [accessibilityRangeForLine:](accessibilityrange%28forline_%29.md): Returns the range of characters in the specified line.
- [accessibilityStringForRange:](accessibilitystring%28for_%29.md): Returns the substring for the specified range.
