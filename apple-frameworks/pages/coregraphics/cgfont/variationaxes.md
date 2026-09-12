> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfont/variationaxes](https://developer.apple.com/documentation/coregraphics/cgfont/variationaxes)

# variationAxes (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an array of the variation axis dictionaries for a font.

## Declaration

```swift
var variationAxes: CFArray? { get }
```

<a id="Discussion"></a>

## Discussion

A variation axis is a range included in a font by the font designer that allows a font to produce different type styles. Each variation axis dictionary contains key-value pairs that specify the variation axis name and the minimum, maximum, and default values for that variation axis.

## See Also

### Working with Variations

- [copy(withVariations:)](copy%28withvariations_%29.md): Creates a copy of a font using a variation specification dictionary.
- [variations](variations.md): Returns the variation specification dictionary for a font.
- [Font Variation Axis Keys](../font-variation-axis-keys.md): Keys used for a font variation axis dictionary.

# CGFontCopyVariationAxes (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an array of the variation axis dictionaries for a font.

## Declaration

```objectivec
extern CFArrayRefCGFontCopyVariationAxes(CGFontRef font);
```

## Parameters

- `font`: A CGFont object.

<a id="return-value"></a>

## Return Value

An array of the variation axis dictionaries. Returns `NULL` if the font doesn’t support variations.

<a id="Discussion"></a>

## Discussion

A variation axis is a range included in a font by the font designer that allows a font to produce different type styles. Each variation axis dictionary contains key-value pairs that specify the variation axis name and the minimum, maximum, and default values for that variation axis.

## See Also

### Working with Variations

- [CGFontCreateCopyWithVariations](copy%28withvariations_%29.md): Creates a copy of a font using a variation specification dictionary.
- [CGFontCopyVariations](variations.md): Returns the variation specification dictionary for a font.
- [Font Variation Axis Keys](../font-variation-axis-keys.md): Keys used for a font variation axis dictionary.
