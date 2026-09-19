> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/hishapeenumerateprocptr

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
