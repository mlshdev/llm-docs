> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1560733-profile_access_procedures/cmbeginaccess](https://developer.apple.com/documentation/applicationservices/1560733-profile_access_procedures/cmbeginaccess)

# cmBeginAccess

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

Begin the process of procedural access. This is always the first operation constant passed to the access procedure. If the call is successful, the `cmEndAccess` operation is guaranteed to be the last call to the procedure.

## Declaration

```objectivec
cmBeginAccess = 8
```
