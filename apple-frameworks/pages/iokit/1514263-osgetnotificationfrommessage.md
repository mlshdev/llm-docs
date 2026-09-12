> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1514263-osgetnotificationfrommessage](https://developer.apple.com/documentation/iokit/1514263-osgetnotificationfrommessage)

# OSGetNotificationFromMessage(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```swift
func OSGetNotificationFromMessage(_ msg: UnsafeMutablePointer<mach_msg_header_t>!, _ index: UInt32, _ type: UnsafeMutablePointer<UInt32>!, _ reference: UnsafeMutablePointer<UInt>!, _ content: UnsafeMutablePointer<UnsafeMutableRawPointer?>!, _ size: UnsafeMutablePointer<vm_size_t>!) -> kern_return_t
```

# OSGetNotificationFromMessage (Objective-C)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
kern_return_t OSGetNotificationFromMessage(mach_msg_header_t *msg, uint32_t index, uint32_t *type, uintptr_t *reference, void **content, vm_size_t *size);
```
