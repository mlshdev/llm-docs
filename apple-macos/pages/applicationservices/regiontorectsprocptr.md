> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/regiontorectsprocptr](https://developer.apple.com/documentation/applicationservices/regiontorectsprocptr)

# RegionToRectsProcPtr (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```swift
typealias RegionToRectsProcPtr = (UInt16, RgnHandle?, UnsafePointer<Rect>?, UnsafeMutableRawPointer?) -> OSStatus
```

# RegionToRectsProcPtr (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```objectivec
typedef OSStatus (*RegionToRectsProcPtr)(UInt16 message, RgnHandle rgn, const Rect *rect, void *refCon);
```
