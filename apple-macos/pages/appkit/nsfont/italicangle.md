> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/italicangle](https://developer.apple.com/documentation/appkit/nsfont/italicangle)

# italicAngle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of degrees that the font is slanted counterclockwise from the vertical.

## Declaration

```swift
var italicAngle: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

The italic angle value is read from the font’s AFM file. Because the slant is measured counterclockwise, English italic fonts typically return a negative value.

## See Also

### Getting Underline and Italic Metrics

- [underlinePosition](underlineposition.md): The baseline offset to use when drawing underlines with the font.
- [underlineThickness](underlinethickness.md): The thickness to use when drawing underlines with the font.

# italicAngle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of degrees that the font is slanted counterclockwise from the vertical.

## Declaration

```objectivec
@property (readonly) CGFloat italicAngle;
```

<a id="Discussion"></a>

## Discussion

The italic angle value is read from the font’s AFM file. Because the slant is measured counterclockwise, English italic fonts typically return a negative value.

## See Also

### Getting Underline and Italic Metrics

- [underlinePosition](underlineposition.md): The baseline offset to use when drawing underlines with the font.
- [underlineThickness](underlinethickness.md): The thickness to use when drawing underlines with the font.
