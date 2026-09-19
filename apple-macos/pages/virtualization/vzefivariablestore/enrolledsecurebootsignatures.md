> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzefivariablestore/enrolledsecurebootsignatures

# enrolledSecureBootSignatures

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The currently enrolled Key Exchange Key (KEK), allowed signature database (db), and forbidden signature database (dbx) signatures.

## Declaration

```swift
var enrolledSecureBootSignatures: VZEFISignatureDatabaseConfiguration { get throws }
```
