> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1514248-ioregistryentrycopyfrompath](https://developer.apple.com/documentation/iokit/1514248-ioregistryentrycopyfrompath)

# IORegistryEntryCopyFromPath(\_:\_:) (Swift)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

## Declaration

```swift
func IORegistryEntryCopyFromPath(_ mainPort: mach_port_t, _ path: CFString!) -> io_registry_entry_t
```

# IORegistryEntryCopyFromPath (Objective-C)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

## Declaration

```objectivec
io_registry_entry_t IORegistryEntryCopyFromPath(mach_port_t mainPort, CFStringRef path);
```
