> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/atsquadraticlineprocptr](https://developer.apple.com/documentation/applicationservices/atsquadraticlineprocptr)

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
