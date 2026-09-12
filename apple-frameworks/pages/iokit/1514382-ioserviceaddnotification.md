> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1514382-ioserviceaddnotification](https://developer.apple.com/documentation/iokit/1514382-ioserviceaddnotification)

# IOServiceAddNotification(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.6)

## Declaration

```swift
func IOServiceAddNotification(_ mainPort: mach_port_t, _ notificationType: UnsafePointer<CChar>!, _ matching: CFDictionary!, _ wakePort: mach_port_t, _ reference: UInt, _ notification: UnsafeMutablePointer<io_iterator_t>!) -> kern_return_t
```

# IOServiceAddNotification (Objective-C)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.6)

## Declaration

```objectivec
kern_return_t IOServiceAddNotification(mach_port_t mainPort, const io_name_t notificationType, CFDictionaryRef matching, mach_port_t wakePort, uintptr_t reference, io_iterator_t *notification);
```
