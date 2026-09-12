> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitynavigablestatictext/accessibilitystring(for:)](https://developer.apple.com/documentation/appkit/nsaccessibilitynavigablestatictext/accessibilitystring(for:))

# accessibilityString(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the substring for the specified range.

## Declaration

```swift
func accessibilityString(for range: NSRange) -> String?
```

## Parameters

- `range`: A range of characters contained by this element.

<a id="return-value"></a>

## Return Value

The substring specified by the given range.

## See Also

### Supporting Accessibility

- [accessibilityFrame(for:)](accessibilityframe%28for_%29.md): Returns the rectangle that encloses the specified range of characters.
- [accessibilityLine(for:)](accessibilityline%28for_%29.md): Returns the line number for the line that contains the specified character index.
- [accessibilityRange(forLine:)](accessibilityrange%28forline_%29.md): Returns the range of characters in the specified line.

# accessibilityStringForRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the substring for the specified range.

## Declaration

```objectivec
- (NSString *) accessibilityStringForRange:(NSRange) range;
```

## Parameters

- `range`: A range of characters contained by this element.

<a id="return-value"></a>

## Return Value

The substring specified by the given range.

## See Also

### Supporting Accessibility

- [accessibilityFrameForRange:](accessibilityframe%28for_%29.md): Returns the rectangle that encloses the specified range of characters.
- [accessibilityLineForIndex:](accessibilityline%28for_%29.md): Returns the line number for the line that contains the specified character index.
- [accessibilityRangeForLine:](accessibilityrange%28forline_%29.md): Returns the range of characters in the specified line.
