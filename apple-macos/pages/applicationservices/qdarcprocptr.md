> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/qdarcprocptr](https://developer.apple.com/documentation/applicationservices/qdarcprocptr)

# QDArcProcPtr (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```swift
typealias QDArcProcPtr = (GrafVerb, UnsafePointer<Rect>?, Int16, Int16) -> Void
```

# QDArcProcPtr (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```objectivec
typedef void (*QDArcProcPtr)(GrafVerb verb, const Rect *r, short startAngle, short arcAngle);
```
