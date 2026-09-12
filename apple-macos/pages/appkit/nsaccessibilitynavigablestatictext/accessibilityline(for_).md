> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitynavigablestatictext/accessibilityline(for:)](https://developer.apple.com/documentation/appkit/nsaccessibilitynavigablestatictext/accessibilityline(for:))

# accessibilityLine(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the line number for the line that contains the specified character index.

## Declaration

```swift
func accessibilityLine(for index: Int) -> Int
```

## Parameters

- `index`: The index for a character.

<a id="return-value"></a>

## Return Value

The line number for the line holding the specified character index.

## See Also

### Supporting Accessibility

- [accessibilityFrame(for:)](accessibilityframe%28for_%29.md): Returns the rectangle that encloses the specified range of characters.
- [accessibilityRange(forLine:)](accessibilityrange%28forline_%29.md): Returns the range of characters in the specified line.
- [accessibilityString(for:)](accessibilitystring%28for_%29.md): Returns the substring for the specified range.

# accessibilityLineForIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the line number for the line that contains the specified character index.

## Declaration

```objectivec
- (NSInteger) accessibilityLineForIndex:(NSInteger) index;
```

## Parameters

- `index`: The index for a character.

<a id="return-value"></a>

## Return Value

The line number for the line holding the specified character index.

## See Also

### Supporting Accessibility

- [accessibilityFrameForRange:](accessibilityframe%28for_%29.md): Returns the rectangle that encloses the specified range of characters.
- [accessibilityRangeForLine:](accessibilityrange%28forline_%29.md): Returns the range of characters in the specified line.
- [accessibilityStringForRange:](accessibilitystring%28for_%29.md): Returns the substring for the specified range.
