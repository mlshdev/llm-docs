> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslidercell/knobthickness](https://developer.apple.com/documentation/appkit/nsslidercell/knobthickness)

# knobThickness (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The thickness of the slider knob, in pixels.

## Declaration

```swift
var knobThickness: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

The thickness is defined to be the extent of the knob along the long dimension of the bar. In a vertical slider, a knob’s thickness is its height; in a horizontal slider, its thickness is its width.

## See Also

### Managing Cell Appearance

- [isVertical](isvertical.md): An integer indicating the orientation (vertical or horizontal) of the slider.

# knobThickness (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The thickness of the slider knob, in pixels.

## Declaration

```objectivec
@property (readonly) CGFloat knobThickness;
```

<a id="Discussion"></a>

## Discussion

The thickness is defined to be the extent of the knob along the long dimension of the bar. In a vertical slider, a knob’s thickness is its height; in a horizontal slider, its thickness is its width.

## See Also

### Managing Cell Appearance

- [vertical](isvertical.md): An integer indicating the orientation (vertical or horizontal) of the slider.
- [title](title.md): Deprecated. Returns the slider’s title.
- [setTitle:](settitle_.md): Deprecated. Sets the title in the bar behind the slider’s knob.
- [titleCell](titlecell.md): Deprecated. Returns `nil`.
- [setTitleCell:](settitlecell_.md): Deprecated. Sets the cell used to draw the slider’s title.
- [titleFont](titlefont.md): Deprecated. Returns `nil`.
- [titleColor](titlecolor.md): Deprecated. Returns `nil`.
- [setTitleFont:](settitlefont_.md): Deprecated. Sets the font used to draw the slider’s title.
- [setTitleColor:](settitlecolor_.md): Deprecated. Sets the color used to draw the slider’s title.
