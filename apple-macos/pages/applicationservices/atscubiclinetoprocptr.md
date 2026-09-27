> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/atscubiclinetoprocptr

# ATSCubicLineToProcPtr (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```swift
typealias ATSCubicLineToProcPtr = (UnsafePointer<Float32Point>?, UnsafeMutableRawPointer?) -> OSStatus
```

# ATSCubicLineToProcPtr (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```objectivec
typedef OSStatus (*ATSCubicLineToProcPtr)(const Float32Point *pt, void *callBackDataPtr);
```
