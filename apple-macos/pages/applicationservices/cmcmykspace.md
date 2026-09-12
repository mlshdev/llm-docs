> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmcmykspace](https://developer.apple.com/documentation/applicationservices/cmcmykspace)

# cmCMYKSpace

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

A CMYK color space composed of cyan, magenta, yellow, and black. A bitmap never uses this constant alone. Instead, this color space is always combined with a packing format describing the amount of storage per component.

## Declaration

```swift
var cmCMYKSpace: Int { get }
```
