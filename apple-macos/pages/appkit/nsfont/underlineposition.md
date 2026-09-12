> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/underlineposition](https://developer.apple.com/documentation/appkit/nsfont/underlineposition)

# underlinePosition (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The baseline offset to use when drawing underlines with the font.

## Declaration

```swift
var underlinePosition: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

The value in this property is determined by the font’s AFM file. The value is usually negative, which must be considered when drawing in a flipped coordinate system.

## See Also

### Getting Underline and Italic Metrics

- [italicAngle](italicangle.md): The number of degrees that the font is slanted counterclockwise from the vertical.
- [underlineThickness](underlinethickness.md): The thickness to use when drawing underlines with the font.

# underlinePosition (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The baseline offset to use when drawing underlines with the font.

## Declaration

```objectivec
@property (readonly) CGFloat underlinePosition;
```

<a id="Discussion"></a>

## Discussion

The value in this property is determined by the font’s AFM file. The value is usually negative, which must be considered when drawing in a flipped coordinate system.

## See Also

### Getting Underline and Italic Metrics

- [italicAngle](italicangle.md): The number of degrees that the font is slanted counterclockwise from the vertical.
- [underlineThickness](underlinethickness.md): The thickness to use when drawing underlines with the font.
