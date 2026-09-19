> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/iconactionprocptr

# IconActionProcPtr (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```swift
typealias IconActionProcPtr = (ResType, UnsafeMutablePointer<Handle?>?, UnsafeMutableRawPointer?) -> OSErr
```

# IconActionProcPtr (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```objectivec
typedef OSErr (*IconActionProcPtr)(ResType theType, Handle *theIcon, void *yourDataPtr);
```
