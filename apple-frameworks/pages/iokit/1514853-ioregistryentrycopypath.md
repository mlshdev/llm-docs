> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1514853-ioregistryentrycopypath](https://developer.apple.com/documentation/iokit/1514853-ioregistryentrycopypath)

# IORegistryEntryCopyPath(\_:\_:) (Swift)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

## Declaration

```swift
func IORegistryEntryCopyPath(_ entry: io_registry_entry_t, _ plane: UnsafePointer<CChar>!) -> Unmanaged<CFString>!
```

# IORegistryEntryCopyPath (Objective-C)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

## Declaration

```objectivec
CFStringRef IORegistryEntryCopyPath(io_registry_entry_t entry, const io_name_t plane);
```
