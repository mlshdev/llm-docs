> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1560701-abstract_color_space_constants/cmrgbaspace](https://developer.apple.com/documentation/applicationservices/1560701-abstract_color_space_constants/cmrgbaspace)

# cmRGBASpace

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
cmRGBASpace = cmRGBSpace + cmAlphaSpace
```

<a id="discussion"></a>

## Discussion

An RGB color space composed of red, green, and blue color value components and an alpha channel component. ColorSync does not currently support bitmaps that use this constant alone. Instead, this constant indicates the presence of an alpha channel in combination with `cmLong8ColorPacking` to indicate 8-bit packing format and `cmAlphaFirstPacking` to indicate the position of the alpha channel as the first component.
