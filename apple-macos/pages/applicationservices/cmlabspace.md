> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmlabspace](https://developer.apple.com/documentation/applicationservices/cmlabspace)

# cmLABSpace

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

An L\*a\*b\* color space composed of L\*, a\*, b\* components. A bitmap never uses this constant alone. Instead, this color space is always combined with a packing format describing the amount of storage per component.

## Declaration

```swift
var cmLABSpace: Int { get }
```
