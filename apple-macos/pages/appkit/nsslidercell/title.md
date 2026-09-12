> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslidercell/title](https://developer.apple.com/documentation/appkit/nsslidercell/title)

# title

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.9)

Returns the slider’s title.

> A slider doesn’t include a title.

## Declaration

```objectivec
- (NSString *) title;
```

<a id="return-value"></a>

## Return Value

The title. The default title is the empty string (`@""`).

## See Also

### Managing Cell Appearance

- [knobThickness](knobthickness.md): The thickness of the slider knob, in pixels.
- [vertical](isvertical.md): An integer indicating the orientation (vertical or horizontal) of the slider.
- [setTitle:](settitle_.md): Deprecated. Sets the title in the bar behind the slider’s knob.
- [titleCell](titlecell.md): Deprecated. Returns `nil`.
- [setTitleCell:](settitlecell_.md): Deprecated. Sets the cell used to draw the slider’s title.
- [titleFont](titlefont.md): Deprecated. Returns `nil`.
- [titleColor](titlecolor.md): Deprecated. Returns `nil`.
- [setTitleFont:](settitlefont_.md): Deprecated. Sets the font used to draw the slider’s title.
- [setTitleColor:](settitlecolor_.md): Deprecated. Sets the color used to draw the slider’s title.
