> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssmoidtoalg(_:_:)](https://developer.apple.com/documentation/security/cssmoidtoalg(_:_:))

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
