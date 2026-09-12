> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/icongetterprocptr](https://developer.apple.com/documentation/applicationservices/icongetterprocptr)

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
