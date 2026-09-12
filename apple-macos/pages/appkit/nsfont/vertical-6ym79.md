> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/vertical-6ym79](https://developer.apple.com/documentation/appkit/nsfont/vertical-6ym79)

# vertical (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A vertical version of the font.

## Declaration

```swift
@NSCopying var vertical: NSFont { get }
```

<a id="Discussion"></a>

## Discussion

The value in this property is a vertical version of the font, if such a configuration is supported. If a vertical configuration is not supported, the value in the property is `self`.

A vertical font applies appropriate rotation to the text matrix in [set(in:)](set%28in_%29.md), returns vertical metrics, and enables the vertical glyph substitution feature by default.

## See Also

### Vertical Fonts

- [isVertical](isvertical.md): A Boolean value indicating whether the font is a vertical font.

# verticalFont (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A vertical version of the font.

## Declaration

```objectivec
@property (copy, readonly) NSFont * verticalFont;
```

<a id="Discussion"></a>

## Discussion

The value in this property is a vertical version of the font, if such a configuration is supported. If a vertical configuration is not supported, the value in the property is `self`.

A vertical font applies appropriate rotation to the text matrix in [setInContext:](set%28in_%29.md), returns vertical metrics, and enables the vertical glyph substitution feature by default.

## See Also

### Vertical Fonts

- [vertical](isvertical.md): A Boolean value indicating whether the font is a vertical font.
