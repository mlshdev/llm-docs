> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/descender](https://developer.apple.com/documentation/appkit/nsfont/descender)

# descender (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The bottom y-coordinate, offset from the baseline, of the font’s longest descender.

## Declaration

```swift
var descender: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

For example, if the longest descender extends 2 points below the baseline, the value in this property is `–2`.

## See Also

### Getting the Font Metrics

- [ascender](ascender.md): The top y-coordinate, offset from the baseline, of the font’s longest ascender.
- [capHeight](capheight.md): The cap height of the font.
- [leading](leading.md): The leading value of the font.
- [xHeight](xheight.md): The x-height of the font.

# descender (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The bottom y-coordinate, offset from the baseline, of the font’s longest descender.

## Declaration

```objectivec
@property (readonly) CGFloat descender;
```

<a id="Discussion"></a>

## Discussion

For example, if the longest descender extends 2 points below the baseline, the value in this property is `–2`.

## See Also

### Getting the Font Metrics

- [ascender](ascender.md): The top y-coordinate, offset from the baseline, of the font’s longest ascender.
- [capHeight](capheight.md): The cap height of the font.
- [leading](leading.md): The leading value of the font.
- [xHeight](xheight.md): The x-height of the font.
