> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinderclient/scrollrangetovisible(_:)](https://developer.apple.com/documentation/appkit/nstextfinderclient/scrollrangetovisible(_:))

# scrollRangeToVisible(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Scrolls the specified range such that it is visible.

## Declaration

```swift
optional func scrollRangeToVisible(_ range: NSRange)
```

## Parameters

- `range`: The range to display.

<a id="Discussion"></a>

## Discussion

This method is used by all actions, but is not strictly required by any.

## See Also

### Determining and Displaying Text Locations

- [contentView(at:effectiveCharacterRange:)](contentview%28at_effectivecharacterrange_%29.md): Returns the view the context is displayed in.
- [rects(forCharacterRange:)](rects%28forcharacterrange_%29.md): An array containing the located text in the content view’s coordinate system.
- [visibleCharacterRanges](visiblecharacterranges.md): An array of visible character ranges.

# scrollRangeToVisible: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Scrolls the specified range such that it is visible.

## Declaration

```objectivec
- (void) scrollRangeToVisible:(NSRange) range;
```

## Parameters

- `range`: The range to display.

<a id="Discussion"></a>

## Discussion

This method is used by all actions, but is not strictly required by any.

## See Also

### Determining and Displaying Text Locations

- [contentViewAtIndex:effectiveCharacterRange:](contentview%28at_effectivecharacterrange_%29.md): Returns the view the context is displayed in.
- [rectsForCharacterRange:](rects%28forcharacterrange_%29.md): An array containing the located text in the content view’s coordinate system.
- [visibleCharacterRanges](visiblecharacterranges.md): An array of visible character ranges.
