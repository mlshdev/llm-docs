> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/hyphenationfactor](https://developer.apple.com/documentation/appkit/nslayoutmanager/hyphenationfactor)

# hyphenationFactor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.15)

The threshold controlling when hyphenation is done.

> Use [usesDefaultHyphenation](usesdefaulthyphenation.md) instead.

## Declaration

```swift
var hyphenationFactor: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Whenever (width of the real contents of the line) / (the line fragment width) is below `factor`, hyphenation is attempted when laying out the line. Hyphenation slows down text layout and increases memory usage, so it should be used sparingly.

## See Also

### Properties

- [usesScreenFonts](usesscreenfonts.md): Deprecated. A Boolean that controls using screen fonts to calculate layout and display text.

# hyphenationFactor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.15)

The threshold controlling when hyphenation is done.

> Use [usesDefaultHyphenation](usesdefaulthyphenation.md) instead.

## Declaration

```objectivec
@property float hyphenationFactor;
```

<a id="Discussion"></a>

## Discussion

Whenever (width of the real contents of the line) / (the line fragment width) is below `factor`, hyphenation is attempted when laying out the line. Hyphenation slows down text layout and increases memory usage, so it should be used sparingly.

## See Also

### Properties

- [usesScreenFonts](usesscreenfonts.md): Deprecated. A Boolean that controls using screen fonts to calculate layout and display text.
