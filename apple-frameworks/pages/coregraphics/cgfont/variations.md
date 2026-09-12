> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfont/variations](https://developer.apple.com/documentation/coregraphics/cgfont/variations)

# variations (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the variation specification dictionary for a font.

## Declaration

```swift
var variations: CFDictionary? { get }
```

<a id="Discussion"></a>

## Discussion

The variation specification dictionary contains keys that correspond to the variation axis names of the font. Each key is a variation axis name. The value for each key is the value specified for that particular variation axis represented as a [CFNumber](../../corefoundation/cfnumber.md) object.

## See Also

### Working with Variations

- [copy(withVariations:)](copy%28withvariations_%29.md): Creates a copy of a font using a variation specification dictionary.
- [variationAxes](variationaxes.md): Returns an array of the variation axis dictionaries for a font.
- [Font Variation Axis Keys](../font-variation-axis-keys.md): Keys used for a font variation axis dictionary.

# CGFontCopyVariations (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the variation specification dictionary for a font.

## Declaration

```objectivec
extern CFDictionaryRefCGFontCopyVariations(CGFontRef font);
```

## Parameters

- `font`: A font object.

<a id="return-value"></a>

## Return Value

The variation specification dictionary for the font. Returns `NULL` if the font doesn’t support variations.

<a id="Discussion"></a>

## Discussion

The variation specification dictionary contains keys that correspond to the variation axis names of the font. Each key is a variation axis name. The value for each key is the value specified for that particular variation axis represented as a [CFNumberRef](../../corefoundation/cfnumber.md) object.

## See Also

### Working with Variations

- [CGFontCreateCopyWithVariations](copy%28withvariations_%29.md): Creates a copy of a font using a variation specification dictionary.
- [CGFontCopyVariationAxes](variationaxes.md): Returns an array of the variation axis dictionaries for a font.
- [Font Variation Axis Keys](../font-variation-axis-keys.md): Keys used for a font variation axis dictionary.
