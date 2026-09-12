> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/hishapeenumerateprocptr](https://developer.apple.com/documentation/applicationservices/hishapeenumerateprocptr)

# HIShapeEnumerateProcPtr (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.5+

## Declaration

```swift
typealias HIShapeEnumerateProcPtr = (Int32, HIShape?, UnsafePointer<CGRect>?, UnsafeMutableRawPointer?) -> OSStatus
```

# HIShapeEnumerateProcPtr (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.5+

## Declaration

```objectivec
typedef OSStatus (*HIShapeEnumerateProcPtr)(int inMessage, HIShapeRef inShape, const CGRect *inRect, void *inRefcon);
```
