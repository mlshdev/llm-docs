> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/legacy-logging-symbols](https://developer.apple.com/documentation/os/legacy-logging-symbols)

# Legacy Logging Symbols (Swift)

**Framework:** os  
**Kind:** API Collection

Migrate your code away from using these legacy symbols.

## Topics

### Log Messages

- [os_log(\_:)](https://developer.apple.com/documentation/os/os_log%28_:%29): Deprecated. Adds a new log message to the default subsystem.
- [os_log(\_:log:\_:)](https://developer.apple.com/documentation/os/os_log%28_:log:_:%29): Deprecated. Adds a new log message using an optional log object and log level.
- [os_log(\_:dso:log:\_:\_:)](https://developer.apple.com/documentation/os/os_log%28_:dso:log:_:_:%29): Deprecated. Sends a message to the logging system, optionally specifying a custom log object, log level, and any message-format arguments.
- [os_log(\_:dso:log:type:\_:)](https://developer.apple.com/documentation/os/os_log%28_:dso:log:type:_:%29): Deprecated. Sends a message to the logging system, optionally specifying a custom log object, log level, and any message format arguments.

# Legacy Logging Symbols (Objective-C)

**Framework:** os  
**Kind:** API Collection

Migrate your code away from using these legacy symbols.

## See Also

### Log Messages

- [Message Argument Formatters](message-argument-formatters.md): Manage the privacy and presentation of the message’s interpolated values using type-aware formatters.
- [os_log_t](os-log-t.md): A log object that you pass to logging functions to send messages to that log.
- [os_log_with_type](os_log_with_type.md): Sends a message at a specific logging level, such as default, info, debug, error, or fault, to the logging system.
- [os_log_type_t](oslogtype.md): The various log levels that the unified logging system provides.
- [os_log](os_log.md): Sends a default-level message to the logging system.
- [os_log_info](os_log_info.md): Sends an info-level message to the logging system.
- [os_log_debug](os_log_debug.md): Sends a debug-level message to the logging system.
- [os_log_error](os_log_error.md): Sends an error-level message to the logging system.
- [os_log_fault](os_log_fault.md): Sends a fault-level message to the logging system.
