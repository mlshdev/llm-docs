> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslider/settitlecell:](https://developer.apple.com/documentation/appkit/nsslider/settitlecell:)

# setTitleCell:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.9)

Sets the cell used to draw the slider’s title.

> No replacement needed.

## Declaration

```objectivec
- (void) setTitleCell:(NSCell *) cell;
```

## Parameters

- `cell`: The cell used to draw the title.

<a id="Discussion"></a>

## Discussion

You only need to invoke this method if the default title cell, `NSTextFieldCell`, doesn’t suit your needs—that is, you want to display the title in a manner that `NSTextFieldCell` doesn’t permit. When you do choose to override the default, `titleCell` should be an instance of a subclass of `NSTextFieldCell`.

## See Also

### Managing the slider’s title

- [title](title.md): Deprecated. Returns the slider’s title.
- [titleCell](titlecell.md): Deprecated. This method has been deprecated. Returns `nil`.
- [titleColor](titlecolor.md): Deprecated. This method has been deprecated. Returns `nil`.
- [titleFont](titlefont.md): Deprecated. This method has been deprecated. Returns `nil`.
- [setTitle:](settitle_.md): Deprecated. Sets the title the slider displays in the bar behind its knob.
- [setTitleColor:](settitlecolor_.md): Deprecated. Sets the color used to draw the slider’s title.
- [setTitleFont:](settitlefont_.md): Deprecated. Sets the font used to draw the slider’s title.
