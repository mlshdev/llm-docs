> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1560256-anonymous/cmrgb16space](https://developer.apple.com/documentation/applicationservices/1560256-anonymous/cmrgb16space)

# cmRGB16Space

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

An RGB color space composed of red, green, and blue components whose values are packed with 5 bits of storage per component. The storage size for a color value expressed in this color space is 16 bits, with the high-order bit not used.

## Declaration

```objectivec
cmRGB16Space = cmRGBSpace + cmWord5ColorPacking
```
