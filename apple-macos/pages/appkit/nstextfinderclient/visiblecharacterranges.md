> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinderclient/visiblecharacterranges](https://developer.apple.com/documentation/appkit/nstextfinderclient/visiblecharacterranges)

# visibleCharacterRanges (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of visible character ranges.

## Declaration

```swift
optional var visibleCharacterRanges: [NSValue] { get }
```

<a id="Discussion"></a>

## Discussion

The text finder uses this property’s value to determine which ranges it should search to show all of the incremental matches that are currently visible.

If this property is not implemented, then the incremental matches cannot be shown.

The array contains `NSValue` objects that wrap `NSRect` structures.

## See Also

### Determining and Displaying Text Locations

- [contentView(at:effectiveCharacterRange:)](contentview%28at_effectivecharacterrange_%29.md): Returns the view the context is displayed in.
- [rects(forCharacterRange:)](rects%28forcharacterrange_%29.md): An array containing the located text in the content view’s coordinate system.
- [scrollRangeToVisible(\_:)](scrollrangetovisible%28__%29.md): Scrolls the specified range such that it is visible.

# visibleCharacterRanges (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array of visible character ranges.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSValue *> * visibleCharacterRanges;
```

<a id="Discussion"></a>

## Discussion

The text finder uses this property’s value to determine which ranges it should search to show all of the incremental matches that are currently visible.

If this property is not implemented, then the incremental matches cannot be shown.

The array contains `NSValue` objects that wrap `NSRect` structures.

## See Also

### Determining and Displaying Text Locations

- [contentViewAtIndex:effectiveCharacterRange:](contentview%28at_effectivecharacterrange_%29.md): Returns the view the context is displayed in.
- [rectsForCharacterRange:](rects%28forcharacterrange_%29.md): An array containing the located text in the content view’s coordinate system.
- [scrollRangeToVisible:](scrollrangetovisible%28__%29.md): Scrolls the specified range such that it is visible.
