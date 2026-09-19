> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1514265-iocfunserialize

# IOCFUnserialize(\_:\_:\_:\_:) (Swift)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 13.0+ · macOS 10.0+ · visionOS 2.4+

## Declaration

```swift
func IOCFUnserialize(_ buffer: UnsafePointer<CChar>!, _ allocator: CFAllocator!, _ options: CFOptionFlags, _ errorString: UnsafeMutablePointer<Unmanaged<CFString>?>!) -> CFTypeRef!
```

# IOCFUnserialize (Objective-C)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 13.0+ · macOS 10.0+ · visionOS 2.4+

## Declaration

```objectivec
CFTypeRef IOCFUnserialize(const char *buffer, CFAllocatorRef allocator, CFOptionFlags options, CFStringRef *errorString);
```
