> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1560256-anonymous/cmlab48space](https://developer.apple.com/documentation/applicationservices/1560256-anonymous/cmlab48space)

# cmLAB48Space

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
cmLAB48Space = cmLABSpace + cm48_16ColorPacking
```

<a id="discussion"></a>

## Discussion

An L\*a\*b\* color space composed of L\*, a\*, and b\* components whose values are packed with 16 bits per component. The storage size for a color value expressed in this color space is 48 bits. The 16-bit unsigned a\* and b\* channels are interpreted numerically as ranging from -128.0 to approximately 128.0.
