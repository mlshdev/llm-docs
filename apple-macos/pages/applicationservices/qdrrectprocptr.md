> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/qdrrectprocptr](https://developer.apple.com/documentation/applicationservices/qdrrectprocptr)

# QDRRectProcPtr (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```swift
typealias QDRRectProcPtr = (GrafVerb, UnsafePointer<Rect>?, Int16, Int16) -> Void
```

# QDRRectProcPtr (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```objectivec
typedef void (*QDRRectProcPtr)(GrafVerb verb, const Rect *r, short ovalWidth, short ovalHeight);
```
