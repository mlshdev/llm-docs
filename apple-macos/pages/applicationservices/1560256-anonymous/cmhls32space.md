> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1560256-anonymous/cmhls32space](https://developer.apple.com/documentation/applicationservices/1560256-anonymous/cmhls32space)

# cmHLS32Space

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

An HLS color space composed of hue, lightness, and saturation components whose values are packed with 10 bits of storage per component. The storage size for a color value expressed in this color space is 32 bits, with the high-order 2 bits not used.

## Declaration

```objectivec
cmHLS32Space = cmHLSSpace + cmLong10ColorPacking
```
