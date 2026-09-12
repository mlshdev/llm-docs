> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzefivariablestore/enrolledsecurebootsignatures](https://developer.apple.com/documentation/virtualization/vzefivariablestore/enrolledsecurebootsignatures)

# enrolledSecureBootSignatures

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The currently enrolled Key Exchange Key (KEK), allowed signature database (db), and forbidden signature database (dbx) signatures.

## Declaration

```swift
var enrolledSecureBootSignatures: VZEFISignatureDatabaseConfiguration { get throws }
```
