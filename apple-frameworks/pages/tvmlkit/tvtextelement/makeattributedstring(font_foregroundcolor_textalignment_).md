> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvtextelement/makeattributedstring(font:foregroundcolor:textalignment:)](https://developer.apple.com/documentation/tvmlkit/tvtextelement/makeattributedstring(font:foregroundcolor:textalignment:))

# makeAttributedString(font:foregroundColor:textAlignment:) (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Convenience method for configuring an attributed string given the specified attributes.

> Please use SwiftUI or UIKit

## Declaration

```swift
func makeAttributedString(font: UIFont, foregroundColor: UIColor?, textAlignment alignment: NSTextAlignment) -> NSAttributedString
```

## Parameters

- `font`: The font used for the attributed string. This can be any available font on the device.
- `foregroundColor`: The foreground color for the element.
- `alignment`: The alignment for the text contained within the element.

<a id="return-value"></a>

## Return Value

An [NSAttributedString](../../foundation/nsattributedstring.md) object with the applied attributes.

<a id="Discussion"></a>

## Discussion

Supply a font to this method to get the [NSAttributedString](../../foundation/nsattributedstring.md) representation of the text contained within an element. Use the `foregroundColor` and `alignment` parameters to override the value specified in the text element.

## See Also

### Creating Attributed Strings

- [makeAttributedString(font:)](makeattributedstring%28font_%29.md): Deprecated. Provides an attributed string for a given font.

# attributedStringWithFont:foregroundColor:textAlignment: (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Convenience method for configuring an attributed string given the specified attributes.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
- (NSAttributedString *) attributedStringWithFont:(UIFont *) font foregroundColor:(UIColor *) foregroundColor textAlignment:(NSTextAlignment) alignment;
```

## Parameters

- `font`: The font used for the attributed string. This can be any available font on the device.
- `foregroundColor`: The foreground color for the element.
- `alignment`: The alignment for the text contained within the element.

<a id="return-value"></a>

## Return Value

An [NSAttributedString](../../foundation/nsattributedstring.md) object with the applied attributes.

<a id="Discussion"></a>

## Discussion

Supply a font to this method to get the [NSAttributedString](../../foundation/nsattributedstring.md) representation of the text contained within an element. Use the `foregroundColor` and `alignment` parameters to override the value specified in the text element.

## See Also

### Creating Attributed Strings

- [attributedStringWithFont:](makeattributedstring%28font_%29.md): Deprecated. Provides an attributed string for a given font.
