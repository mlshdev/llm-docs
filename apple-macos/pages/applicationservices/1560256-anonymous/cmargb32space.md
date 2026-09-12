> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1560256-anonymous/cmargb32space](https://developer.apple.com/documentation/applicationservices/1560256-anonymous/cmargb32space)

# cmARGB32Space

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
cmARGB32Space = cmRGBASpace + cm32_8ColorPacking + cmAlphaFirstPacking
```

<a id="discussion"></a>

## Discussion

An RGB color space composed of red, green, and blue color value components preceded by an alpha channel component whose values are packed with 8 bits of storage per component. The storage size for a color value expressed in this color space is 32 bits.
