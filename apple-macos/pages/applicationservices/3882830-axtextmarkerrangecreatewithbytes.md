> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/3882830-axtextmarkerrangecreatewithbytes

# AXTextMarkerRangeCreateWithBytes(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```swift
func AXTextMarkerRangeCreateWithBytes(_ allocator: CFAllocator?, _ startMarkerBytes: UnsafePointer<UInt8>, _ startMarkerLength: CFIndex, _ endMarkerBytes: UnsafePointer<UInt8>, _ endMarkerLength: CFIndex) -> AXTextMarkerRange
```

# AXTextMarkerRangeCreateWithBytes (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
AXTextMarkerRangeRef AXTextMarkerRangeCreateWithBytes(CFAllocatorRef allocator, const UInt8 *startMarkerBytes, CFIndex startMarkerLength, const UInt8 *endMarkerBytes, CFIndex endMarkerLength);
```
