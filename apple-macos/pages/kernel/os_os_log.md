> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/os_os_log](https://developer.apple.com/documentation/kernel/os_os_log)

# OS_os_log

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Protocol  
**Availability:** macOS 10.12+

## Declaration

```objectivec
@protocol OS_os_log
```

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Logging

- [IOLog](1575337-iolog.md): Log a message to console in text mode, and /var/log/system.log.
- [IOLogv](1575323-iologv.md): Log a message to console in text mode, and /var/log/system.log.
- [os_log_create](1643798-os_log_create.md): Creates a custom log object, to be passed to logging functions for sending messages to the logging system.
- [os_log_debug_enabled](1643808-os_log_debug_enabled.md): Returns a Boolean value indicating whether debug-level logging is enabled for a specified log object.
- [os_log_info_enabled](1643817-os_log_info_enabled.md): Returns a Boolean value indicating whether info-level logging is enabled for a specified log object.
