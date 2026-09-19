> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/atsquadraticlineprocptr

# ATSQuadraticLineProcPtr (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```swift
typealias ATSQuadraticLineProcPtr = (UnsafePointer<Float32Point>?, UnsafePointer<Float32Point>?, UnsafeMutableRawPointer?) -> OSStatus
```

# ATSQuadraticLineProcPtr (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```objectivec
typedef OSStatus (*ATSQuadraticLineProcPtr)(const Float32Point *pt1, const Float32Point *pt2, void *callBackDataPtr);
```
