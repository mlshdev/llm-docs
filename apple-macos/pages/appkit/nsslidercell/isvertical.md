> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsslidercell/isvertical](https://developer.apple.com/documentation/appkit/nsslidercell/isvertical)

# isVertical (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

An integer indicating the orientation (vertical or horizontal) of the slider.

## Declaration

```swift
var isVertical: Bool { get set }
```

```swift
var vertical: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is 1 if the slider is vertical, 0 if it’s horizontal, and –1 if the orientation can’t be determined (for example, if the slider hasn’t been displayed yet). A slider is defined as vertical if its height is greater than its width.

## See Also

### Managing Cell Appearance

- [knobThickness](knobthickness.md): The thickness of the slider knob, in pixels.

# vertical (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

An integer indicating the orientation (vertical or horizontal) of the slider.

## Declaration

```objectivec
@property (readwrite, getter=isVertical) BOOL vertical;
```

<a id="Discussion"></a>

## Discussion

The value of this property is 1 if the slider is vertical, 0 if it’s horizontal, and –1 if the orientation can’t be determined (for example, if the slider hasn’t been displayed yet). A slider is defined as vertical if its height is greater than its width.

## See Also

### Managing Cell Appearance

- [knobThickness](knobthickness.md): The thickness of the slider knob, in pixels.
- [title](title.md): Deprecated. Returns the slider’s title.
- [setTitle:](settitle_.md): Deprecated. Sets the title in the bar behind the slider’s knob.
- [titleCell](titlecell.md): Deprecated. Returns `nil`.
- [setTitleCell:](settitlecell_.md): Deprecated. Sets the cell used to draw the slider’s title.
- [titleFont](titlefont.md): Deprecated. Returns `nil`.
- [titleColor](titlecolor.md): Deprecated. Returns `nil`.
- [setTitleFont:](settitlefont_.md): Deprecated. Sets the font used to draw the slider’s title.
- [setTitleColor:](settitlecolor_.md): Deprecated. Sets the color used to draw the slider’s title.
