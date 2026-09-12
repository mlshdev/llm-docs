> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1643798-os_log_create](https://developer.apple.com/documentation/kernel/1643798-os_log_create)

# os_log_create

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.12+

Creates a custom log object, to be passed to logging functions for sending messages to the logging system.

## Declaration

```objectivec
os_log_t os_log_create(const char *subsystem, const char *category);
```

## Parameters

- `subsystem`: An identifier string, in reverse DNS notation, representing the subsystem that’s performing logging. For example, `com.your_company.your_subsystem_name`. The subsystem is used for categorization and filtering of related log messages, as well as for grouping related logging settings.
- `category`: A category within the specified subsystem. The category is used for categorization and filtering of related log messages, as well as for grouping related logging settings within the subsystem’s settings. A category’s logging settings override those of the parent subsystem.

<a id="return_value"></a>

## Return Value

A value of type `os_log_t`, which can be passed to other logging functions to perform logging and to determine whether a specific level of logging is enabled. A value is always returned and should be released when no longer needed.

<a id="discussion"></a>

## Discussion

Generally, use the `OS_LOG_DEFAULT` constant to perform logging using the system’s behavior. Create a custom log object only when you want to tag messages with a specific subsystem and category for the purpose of filtering, or to customize the logging behavior of your subsystem with a profile for debugging purposes. This function only needs to be called once to initialize a custom log object. It doesn’t need to be called again when changing logging settings. The system automatically detects changes to logging settings.

## See Also

### Logging

- [OS_os_log](os_os_log.md)
- [IOLog](1575337-iolog.md): Log a message to console in text mode, and /var/log/system.log.
- [IOLogv](1575323-iologv.md): Log a message to console in text mode, and /var/log/system.log.
- [os_log_debug_enabled](1643808-os_log_debug_enabled.md): Returns a Boolean value indicating whether debug-level logging is enabled for a specified log object.
- [os_log_info_enabled](1643817-os_log_info_enabled.md): Returns a Boolean value indicating whether info-level logging is enabled for a specified log object.

### Related Documentation

- [OS_LOG_TYPE_DEFAULT](os_log_type_t/os_log_type_default.md): Default-level messages are initially stored in memory buffers. Without a configuration change, they are compressed and moved to the data store as memory buffers fill. They remain there until a storage quota is exceeded, at which point, the oldest messages are purged. Use this level to capture information about things that *might* result a failure. Logging a message of this type is equivalent to calling the function.
- [isEnabled(type:)](https://developer.apple.com/documentation/os/oslog/isenabled%28type:%29): Returns a Boolean value that indicates whether the log can write messages with the specified log type.
