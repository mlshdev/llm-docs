> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmhsvspace](https://developer.apple.com/documentation/applicationservices/cmhsvspace)

# cmHSVSpace

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

An HSV color space composed of hue, saturation, and value components. A bitmap never uses this constant alone. Instead, this color space is always combined with a packing format describing the amount of storage per component.

## Declaration

```swift
var cmHSVSpace: Int { get }
```
