> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslidercell/settitlecell:](https://developer.apple.com/documentation/appkit/nsslidercell/settitlecell:)

# setTitleCell:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.9)

Sets the cell used to draw the slider’s title.

> A slider doesn’t include a title.

## Declaration

```objectivec
- (void) setTitleCell:(NSCell *) cell;
```

<a id="Discussion"></a>

## Discussion

You only need to call this method if the default title cell, `NSTextFieldCell`, doesn’t suit your needs—that is, if you want to display the title in a manner that `NSTextFieldCell` doesn’t permit. When you do choose to override the default, `aCell` should be an instance of a subclass of `NSTextFieldCell`.

## See Also

### Managing Cell Appearance

- [knobThickness](knobthickness.md): The thickness of the slider knob, in pixels.
- [vertical](isvertical.md): An integer indicating the orientation (vertical or horizontal) of the slider.
- [title](title.md): Deprecated. Returns the slider’s title.
- [setTitle:](settitle_.md): Deprecated. Sets the title in the bar behind the slider’s knob.
- [titleCell](titlecell.md): Deprecated. Returns `nil`.
- [titleFont](titlefont.md): Deprecated. Returns `nil`.
- [titleColor](titlecolor.md): Deprecated. Returns `nil`.
- [setTitleFont:](settitlefont_.md): Deprecated. Sets the font used to draw the slider’s title.
- [setTitleColor:](settitlecolor_.md): Deprecated. Sets the color used to draw the slider’s title.
