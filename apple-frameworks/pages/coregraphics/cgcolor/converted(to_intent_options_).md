> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolor/converted(to:intent:options:)](https://developer.apple.com/documentation/coregraphics/cgcolor/converted(to:intent:options:))

# converted(to:intent:options:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new color in a different color space that matches the provided color.

## Declaration

```swift
func converted(to _: CGColorSpace, intent: CGColorRenderingIntent, options: CFDictionary?) -> CGColor?
```

<a id="Parameters"></a>

### Parameters

- **CGColorSpaceRef**: The destination color space.
- **to**: The destination color space.
- **intent**: The mechanism to use to match the color when the color is outside the gamut of the new color space.
- **color**: The color to convert.
- **options**: A dictionary of options used to convert the color. Currently, you should pass `NULL`.

<a id="Returns"></a>

### Returns

A new color in the destination color space that matches (or closely approximates) the source color.

<a id="Discussion"></a>

## Discussion

To create the new color, this method creates a `CFColorConverterRef` using the options you specified and applies it to the source color.

## See Also

### Converting Between Color Spaces

- [conversionTRCSize](conversiontrcsize.md)

# CGColorCreateCopyByMatchingToColorSpace (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new color in a different color space that matches the provided color.

## Declaration

```objectivec
extern CGColorRefCGColorCreateCopyByMatchingToColorSpace(CGColorSpaceRef , CGColorRenderingIntent intent, CGColorRef color, CFDictionaryRef options);
```

<a id="Parameters"></a>

### Parameters

- **CGColorSpaceRef**: The destination color space.
- **to**: The destination color space.
- **intent**: The mechanism to use to match the color when the color is outside the gamut of the new color space.
- **color**: The color to convert.
- **options**: A dictionary of options used to convert the color. Currently, you should pass `NULL`.

<a id="Returns"></a>

### Returns

A new color in the destination color space that matches (or closely approximates) the source color.

<a id="Discussion"></a>

## Discussion

To create the new color, this method creates a `CFColorConverterRef` using the options you specified and applies it to the source color.

## See Also

### Converting Between Color Spaces

- [kCGColorConversionTRCSize](conversiontrcsize.md)
