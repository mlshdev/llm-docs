> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/cmendaccess

# cmEndAccess

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

End the process of procedural access. This is always the last operation constant passed to the access procedure (unless the `cmBeginAccess` call failed).

## Declaration

```swift
var cmEndAccess: Int { get }
```
