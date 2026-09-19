> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/atscubicmovetoprocptr

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
