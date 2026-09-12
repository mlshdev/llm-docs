> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/qdopcodeprocptr](https://developer.apple.com/documentation/applicationservices/qdopcodeprocptr)

# QDOpcodeProcPtr (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```swift
typealias QDOpcodeProcPtr = (UnsafePointer<Rect>?, UnsafePointer<Rect>?, UInt16, Int16) -> Void
```

# QDOpcodeProcPtr (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```objectivec
typedef void (*QDOpcodeProcPtr)(const Rect *fromRect, const Rect *toRect, UInt16 opcode, SInt16 version);
```
