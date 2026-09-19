> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssmoidtoalg(_:_:)

# cssmOidToAlg(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```swift
func cssmOidToAlg(_ oid: UnsafePointer<SecAsn1Oid>!, _ alg: UnsafeMutablePointer<CSSM_ALGORITHMS>!) -> Bool
```

# cssmOidToAlg (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
bool cssmOidToAlg(const SecAsn1Oid *oid, CSSM_ALGORITHMS *alg);
```
