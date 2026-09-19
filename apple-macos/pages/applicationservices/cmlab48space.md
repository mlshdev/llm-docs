> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/cmlab48space

# cmLAB48Space

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

## Declaration

```swift
var cmLAB48Space: Int { get }
```

<a id="discussion"></a>

## Discussion

An L\*a\*b\* color space composed of L\*, a\*, and b\* components whose values are packed with 16 bits per component. The storage size for a color value expressed in this color space is 48 bits. The 16-bit unsigned a\* and b\* channels are interpreted numerically as ranging from -128.0 to approximately 128.0.
