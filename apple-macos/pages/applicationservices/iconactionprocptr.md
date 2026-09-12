> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/iconactionprocptr](https://developer.apple.com/documentation/applicationservices/iconactionprocptr)

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
