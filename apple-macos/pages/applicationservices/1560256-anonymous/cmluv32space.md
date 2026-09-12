> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1560256-anonymous/cmluv32space](https://developer.apple.com/documentation/applicationservices/1560256-anonymous/cmluv32space)

# cmLUV32Space

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

An L\*u\*v\* color space composed of L\*, u\*, and v\* components whose values are packed with 10 bits per component. The storage size for a color value expressed in this color space is 32 bits, with the high-order 2 bits not used.

## Declaration

```objectivec
cmLUV32Space = cmLUVSpace + cmLong10ColorPacking
```
