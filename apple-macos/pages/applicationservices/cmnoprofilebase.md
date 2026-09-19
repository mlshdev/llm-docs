> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/cmnoprofilebase

# cmNoProfileBase

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

The profile is temporary. It will not persist in memory after its use for a color session. You can specify this type of profile location with the `CMNewProfile` and the `CMCopyProfile` functions.

## Declaration

```swift
var cmNoProfileBase: Int { get }
```
