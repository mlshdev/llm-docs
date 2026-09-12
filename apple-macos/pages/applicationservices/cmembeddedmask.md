> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmembeddedmask](https://developer.apple.com/documentation/applicationservices/cmembeddedmask)

# cmEmbeddedMask

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

This mask provides access to bit 0 of the `flags` field, which specifies whether the profile is embedded. It has the value 1 if the profile is embedded, 0 if it is not.

## Declaration

```swift
var cmEmbeddedMask: Int { get }
```
