> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmlab32space](https://developer.apple.com/documentation/applicationservices/cmlab32space)

# cmLAB32Space

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

## Declaration

```swift
var cmLAB32Space: Int { get }
```

<a id="discussion"></a>

## Discussion

An L\*a\*b\* color space composed of L\*, a\*, and b\* components whose values are packed with 10 bits per component. The storage size for a color value expressed in this color space is 32 bits, with the high-order 2 bits not used. The 10-bit unsigned a\* and b\* channels are interpreted numerically as ranging from -128.0 to approximately 128.0.
