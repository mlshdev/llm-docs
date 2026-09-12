> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinderclient/contentview(at:effectivecharacterrange:)](https://developer.apple.com/documentation/appkit/nstextfinderclient/contentview(at:effectivecharacterrange:))

# contentView(at:effectiveCharacterRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the view the context is displayed in.

## Declaration

```swift
optional func contentView(at index: Int, effectiveCharacterRange outRange: NSRangePointer) -> NSView
```

## Parameters

- `index`: The index of the view containing the located text.
- `outRange`: Returns, by reference, the entire range of the string displayed by the view

<a id="return-value"></a>

## Return Value

Returns the view the contains the found text.

## See Also

### Determining and Displaying Text Locations

- [rects(forCharacterRange:)](rects%28forcharacterrange_%29.md): An array containing the located text in the content view’s coordinate system.
- [scrollRangeToVisible(\_:)](scrollrangetovisible%28__%29.md): Scrolls the specified range such that it is visible.
- [visibleCharacterRanges](visiblecharacterranges.md): An array of visible character ranges.

# contentViewAtIndex:effectiveCharacterRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the view the context is displayed in.

## Declaration

```objectivec
- (NSView *) contentViewAtIndex:(NSUInteger) index effectiveCharacterRange:(NSRangePointer) outRange;
```

## Parameters

- `index`: The index of the view containing the located text.
- `outRange`: Returns, by reference, the entire range of the string displayed by the view

<a id="return-value"></a>

## Return Value

Returns the view the contains the found text.

## See Also

### Determining and Displaying Text Locations

- [rectsForCharacterRange:](rects%28forcharacterrange_%29.md): An array containing the located text in the content view’s coordinate system.
- [scrollRangeToVisible:](scrollrangetovisible%28__%29.md): Scrolls the specified range such that it is visible.
- [visibleCharacterRanges](visiblecharacterranges.md): An array of visible character ranges.
