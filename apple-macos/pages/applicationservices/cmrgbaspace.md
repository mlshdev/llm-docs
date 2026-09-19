> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/cmrgbaspace

# cmRGBASpace

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

## Declaration

```swift
var cmRGBASpace: Int { get }
```

<a id="discussion"></a>

## Discussion

An RGB color space composed of red, green, and blue color value components and an alpha channel component. ColorSync does not currently support bitmaps that use this constant alone. Instead, this constant indicates the presence of an alpha channel in combination with `cmLong8ColorPacking` to indicate 8-bit packing format and `cmAlphaFirstPacking` to indicate the position of the alpha channel as the first component.
