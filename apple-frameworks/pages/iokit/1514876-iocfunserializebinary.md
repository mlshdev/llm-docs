> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1514876-iocfunserializebinary

# IOCFUnserializeBinary(\_:\_:\_:\_:\_:) (Swift)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 13.0+ · macOS 10.10+ · visionOS 2.4+

## Declaration

```swift
func IOCFUnserializeBinary(_ buffer: UnsafePointer<CChar>!, _ bufferSize: Int, _ allocator: CFAllocator!, _ options: CFOptionFlags, _ errorString: UnsafeMutablePointer<Unmanaged<CFString>?>!) -> CFTypeRef!
```

# IOCFUnserializeBinary (Objective-C)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 13.0+ · macOS 10.10+ · visionOS 2.4+

## Declaration

```objectivec
CFTypeRef IOCFUnserializeBinary(const char *buffer, size_t bufferSize, CFAllocatorRef allocator, CFOptionFlags options, CFStringRef *errorString);
```
