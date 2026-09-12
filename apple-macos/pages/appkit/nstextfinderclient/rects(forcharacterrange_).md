> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinderclient/rects(forcharacterrange:)](https://developer.apple.com/documentation/appkit/nstextfinderclient/rects(forcharacterrange:))

# rects(forCharacterRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

An array containing the located text in the content view’s coordinate system.

## Declaration

```swift
optional func rects(forCharacterRange range: NSRange) -> [NSValue]?
```

## Parameters

- `range`: The range of the located character string.

<a id="return-value"></a>

## Return Value

An array containing the rectangles containing the located text in the content view object’s coordinate system and return that array. The rectangles are return wrapped as `NSValue` objects.

<a id="Discussion"></a>

## Discussion

The text finder uses this method to determine the location to display the find indicator.

The given range is guaranteed not to overlap multiple views.

## See Also

### Determining and Displaying Text Locations

- [contentView(at:effectiveCharacterRange:)](contentview%28at_effectivecharacterrange_%29.md): Returns the view the context is displayed in.
- [scrollRangeToVisible(\_:)](scrollrangetovisible%28__%29.md): Scrolls the specified range such that it is visible.
- [visibleCharacterRanges](visiblecharacterranges.md): An array of visible character ranges.

# rectsForCharacterRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

An array containing the located text in the content view’s coordinate system.

## Declaration

```objectivec
- (NSArray<NSValue *> *) rectsForCharacterRange:(NSRange) range;
```

## Parameters

- `range`: The range of the located character string.

<a id="return-value"></a>

## Return Value

An array containing the rectangles containing the located text in the content view object’s coordinate system and return that array. The rectangles are return wrapped as `NSValue` objects.

<a id="Discussion"></a>

## Discussion

The text finder uses this method to determine the location to display the find indicator.

The given range is guaranteed not to overlap multiple views.

## See Also

### Determining and Displaying Text Locations

- [contentViewAtIndex:effectiveCharacterRange:](contentview%28at_effectivecharacterrange_%29.md): Returns the view the context is displayed in.
- [scrollRangeToVisible:](scrollrangetovisible%28__%29.md): Scrolls the specified range such that it is visible.
- [visibleCharacterRanges](visiblecharacterranges.md): An array of visible character ranges.
