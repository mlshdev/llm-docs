> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/darwinnotify/notify_register_file_descriptor(_:_:_:_:)](https://developer.apple.com/documentation/darwinnotify/notify_register_file_descriptor(_:_:_:_:))

# notify_register_file_descriptor(\_:\_:\_:\_:) (Swift)

**Framework:** Darwin Notify  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
func notify_register_file_descriptor(_ name: UnsafePointer<CChar>!, _ notify_fd: UnsafeMutablePointer<Int32>!, _ flags: Int32, _ out_token: UnsafeMutablePointer<Int32>!) -> UInt32
```

## See Also

### Functions

- [notify_is_valid_token(\_:)](notify_is_valid_token%28__%29.md)

# notify_register_file_descriptor (Objective-C)

**Framework:** Darwin Notify  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
extern uint32_t notify_register_file_descriptor(const char *name, int *notify_fd, int flags, int *out_token);
```

## See Also

### Functions

- [notify_is_valid_token](notify_is_valid_token%28__%29.md)
