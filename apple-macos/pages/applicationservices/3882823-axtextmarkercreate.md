> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/3882823-axtextmarkercreate

# AXTextMarkerCreate(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```swift
func AXTextMarkerCreate(_ allocator: CFAllocator?, _ bytes: UnsafePointer<UInt8>, _ length: CFIndex) -> AXTextMarker
```

# AXTextMarkerCreate (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 12.0+

## Declaration

```objectivec
AXTextMarkerRef AXTextMarkerCreate(CFAllocatorRef allocator, const UInt8 *bytes, CFIndex length);
```
