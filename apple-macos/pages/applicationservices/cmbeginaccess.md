> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/cmbeginaccess

# cmBeginAccess

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

Begin the process of procedural access. This is always the first operation constant passed to the access procedure. If the call is successful, the `cmEndAccess` operation is guaranteed to be the last call to the procedure.

## Declaration

```swift
var cmBeginAccess: Int { get }
```
