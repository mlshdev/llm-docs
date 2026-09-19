> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1514499-iourlcreatepropertyfromresource

# IOURLCreatePropertyFromResource(\_:\_:\_:\_:)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ · Xcode 6.1+

## Declaration

```swift
func IOURLCreatePropertyFromResource(_ alloc: CFAllocator!, _ url: CFURL!, _ property: CFString!, _ errorCode: UnsafeMutablePointer<Int32>!) -> Unmanaged<CFTypeRef>!
```
