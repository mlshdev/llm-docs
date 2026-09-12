> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/atscubicmovetoprocptr](https://developer.apple.com/documentation/applicationservices/atscubicmovetoprocptr)

# ATSCubicMoveToProcPtr (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```swift
typealias ATSCubicMoveToProcPtr = (UnsafePointer<Float32Point>?, UnsafeMutableRawPointer?) -> OSStatus
```

# ATSCubicMoveToProcPtr (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```objectivec
typedef OSStatus (*ATSCubicMoveToProcPtr)(const Float32Point *pt, void *callBackDataPtr);
```
