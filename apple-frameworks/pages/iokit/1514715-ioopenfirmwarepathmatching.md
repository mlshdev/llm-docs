> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1514715-ioopenfirmwarepathmatching](https://developer.apple.com/documentation/iokit/1514715-ioopenfirmwarepathmatching)

# IOOpenFirmwarePathMatching(\_:\_:\_:) (Swift)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```swift
func IOOpenFirmwarePathMatching(_ mainPort: mach_port_t, _ options: UInt32, _ path: UnsafePointer<CChar>!) -> Unmanaged<CFMutableDictionary>!
```

# IOOpenFirmwarePathMatching (Objective-C)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
CFMutableDictionaryRef IOOpenFirmwarePathMatching(mach_port_t mainPort, uint32_t options, const char *path);
```
