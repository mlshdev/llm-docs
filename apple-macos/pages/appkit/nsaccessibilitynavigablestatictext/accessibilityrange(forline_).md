> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitynavigablestatictext/accessibilityrange(forline:)](https://developer.apple.com/documentation/appkit/nsaccessibilitynavigablestatictext/accessibilityrange(forline:))

# accessibilityRange(forLine:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the range of characters in the specified line.

## Declaration

```swift
func accessibilityRange(forLine lineNumber: Int) -> NSRange
```

## Parameters

- `lineNumber`: The line number to be examined.

<a id="return-value"></a>

## Return Value

The range of characters for the specified line number. If the line ends with a newline character, including the newline is preferred.

## See Also

### Supporting Accessibility

- [accessibilityFrame(for:)](accessibilityframe%28for_%29.md): Returns the rectangle that encloses the specified range of characters.
- [accessibilityLine(for:)](accessibilityline%28for_%29.md): Returns the line number for the line that contains the specified character index.
- [accessibilityString(for:)](accessibilitystring%28for_%29.md): Returns the substring for the specified range.

# accessibilityRangeForLine: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the range of characters in the specified line.

## Declaration

```objectivec
- (NSRange) accessibilityRangeForLine:(NSInteger) lineNumber;
```

## Parameters

- `lineNumber`: The line number to be examined.

<a id="return-value"></a>

## Return Value

The range of characters for the specified line number. If the line ends with a newline character, including the newline is preferred.

## See Also

### Supporting Accessibility

- [accessibilityFrameForRange:](accessibilityframe%28for_%29.md): Returns the rectangle that encloses the specified range of characters.
- [accessibilityLineForIndex:](accessibilityline%28for_%29.md): Returns the line number for the line that contains the specified character index.
- [accessibilityStringForRange:](accessibilitystring%28for_%29.md): Returns the substring for the specified range.
