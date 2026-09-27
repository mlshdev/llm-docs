> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/icongetterprocptr

# IconGetterProcPtr (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```swift
typealias IconGetterProcPtr = (ResType, UnsafeMutableRawPointer?) -> Handle?
```

# IconGetterProcPtr (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```objectivec
typedef Handle (*IconGetterProcPtr)(ResType theType, void *yourDataPtr);
```
