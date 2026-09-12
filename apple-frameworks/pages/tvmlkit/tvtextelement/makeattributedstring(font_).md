> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvtextelement/makeattributedstring(font:)](https://developer.apple.com/documentation/tvmlkit/tvtextelement/makeattributedstring(font:))

# makeAttributedString(font:) (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Provides an attributed string for a given font.

> Please use SwiftUI or UIKit

## Declaration

```swift
func makeAttributedString(font: UIFont) -> NSAttributedString
```

## Parameters

- `font`: The font used for the attributed string. This can be any available font on the device.

<a id="return-value"></a>

## Return Value

An [NSAttributedString](../../foundation/nsattributedstring.md) object with the supplied font.

<a id="Discussion"></a>

## Discussion

Supply a font to this method to get the [NSAttributedString](../../foundation/nsattributedstring.md) representation of the text contained within an element.

## See Also

### Creating Attributed Strings

- [makeAttributedString(font:foregroundColor:textAlignment:)](makeattributedstring%28font_foregroundcolor_textalignment_%29.md): Deprecated. Convenience method for configuring an attributed string given the specified attributes.

# attributedStringWithFont: (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Provides an attributed string for a given font.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
- (NSAttributedString *) attributedStringWithFont:(UIFont *) font;
```

## Parameters

- `font`: The font used for the attributed string. This can be any available font on the device.

<a id="return-value"></a>

## Return Value

An [NSAttributedString](../../foundation/nsattributedstring.md) object with the supplied font.

<a id="Discussion"></a>

## Discussion

Supply a font to this method to get the [NSAttributedString](../../foundation/nsattributedstring.md) representation of the text contained within an element.

## See Also

### Creating Attributed Strings

- [attributedStringWithFont:foregroundColor:textAlignment:](makeattributedstring%28font_foregroundcolor_textalignment_%29.md): Deprecated. Convenience method for configuring an attributed string given the specified attributes.
