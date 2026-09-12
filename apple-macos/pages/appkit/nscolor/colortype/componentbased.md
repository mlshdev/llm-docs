> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/colortype/componentbased](https://developer.apple.com/documentation/appkit/nscolor/colortype/componentbased)

# NSColor.ColorType.componentBased (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

Colors that include floating-point color components and a color space.

## Declaration

```swift
case componentBased
```

<a id="Discussion"></a>

## Discussion

Examples of this type are RGB, CMYK, and HSB colors. Before acessing components that are specific to one colorspace, such as the [redComponent](../redcomponent.md) of an RGB color, call [usingColorSpace(\_:)](../usingcolorspace%28__%29.md).

## See Also

### Color Types

- [NSColor.ColorType.pattern](pattern.md): Colors that include an image to be used as a pattern.
- [NSColor.ColorType.catalog](catalog.md): Colors that are retrieved from an asset catalog.

# NSColorTypeComponentBased (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

Colors that include floating-point color components and a color space.

## Declaration

```objectivec
NSColorTypeComponentBased
```

<a id="Discussion"></a>

## Discussion

Examples of this type are RGB, CMYK, and HSB colors. Before acessing components that are specific to one colorspace, such as the [redComponent](../redcomponent.md) of an RGB color, call [colorUsingColorSpace:](../usingcolorspace%28__%29.md).

## See Also

### Color Types

- [NSColorTypePattern](pattern.md): Colors that include an image to be used as a pattern.
- [NSColorTypeCatalog](catalog.md): Colors that are retrieved from an asset catalog.
