> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfont/copy(withvariations:)](https://developer.apple.com/documentation/coregraphics/cgfont/copy(withvariations:))

# copy(withVariations:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a copy of a font using a variation specification dictionary.

## Declaration

```swift
func copy(withVariations variations: CFDictionary?) -> CGFont?
```

## Parameters

- `variations`: A variation specification dictionary that contains keys corresponding to the variation axis names of the font. Each key in the dictionary is a variation axis name. The value for each key is the value specified for that particular variation axis represented as a CFNumber object. If a variation axis name is not specified in `variations`, then the current value from `font` is used.

<a id="return-value"></a>

## Return Value

The font object.

## See Also

### Working with Variations

- [variations](variations.md): Returns the variation specification dictionary for a font.
- [variationAxes](variationaxes.md): Returns an array of the variation axis dictionaries for a font.
- [Font Variation Axis Keys](../font-variation-axis-keys.md): Keys used for a font variation axis dictionary.

# CGFontCreateCopyWithVariations (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a copy of a font using a variation specification dictionary.

## Declaration

```objectivec
extern CGFontRefCGFontCreateCopyWithVariations(CGFontRef font, CFDictionaryRef variations);
```

## Parameters

- `font`: The font to copy.
- `variations`: A variation specification dictionary that contains keys corresponding to the variation axis names of the font. Each key in the dictionary is a variation axis name. The value for each key is the value specified for that particular variation axis represented as a CFNumber object. If a variation axis name is not specified in `variations`, then the current value from `font` is used.

<a id="return-value"></a>

## Return Value

The font object.

## See Also

### Working with Variations

- [CGFontCopyVariations](variations.md): Returns the variation specification dictionary for a font.
- [CGFontCopyVariationAxes](variationaxes.md): Returns an array of the variation axis dictionaries for a font.
- [Font Variation Axis Keys](../font-variation-axis-keys.md): Keys used for a font variation axis dictionary.
