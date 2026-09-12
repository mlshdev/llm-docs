> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslider/settitle:](https://developer.apple.com/documentation/appkit/nsslider/settitle:)

# setTitle:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.9)

Sets the title the slider displays in the bar behind its knob.

> No replacement needed.

## Declaration

```objectivec
- (void) setTitle:(NSString *) string;
```

## Parameters

- `string`: The slider’s title. The knob may cover part or all of the title. If you want the title to be visible all the time, you’re better off placing a label near the slider.

## See Also

### Managing the slider’s title

- [title](title.md): Deprecated. Returns the slider’s title.
- [titleCell](titlecell.md): Deprecated. This method has been deprecated. Returns `nil`.
- [titleColor](titlecolor.md): Deprecated. This method has been deprecated. Returns `nil`.
- [titleFont](titlefont.md): Deprecated. This method has been deprecated. Returns `nil`.
- [setTitleCell:](settitlecell_.md): Deprecated. Sets the cell used to draw the slider’s title.
- [setTitleColor:](settitlecolor_.md): Deprecated. Sets the color used to draw the slider’s title.
- [setTitleFont:](settitlefont_.md): Deprecated. Sets the font used to draw the slider’s title.
