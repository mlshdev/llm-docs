> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/message-argument-formatters](https://developer.apple.com/documentation/os/message-argument-formatters)

# Message Argument Formatters (Swift)

**Framework:** os  
**Kind:** API Collection

Manage the privacy and presentation of the message’s interpolated values using type-aware formatters.

## Topics

### Privacy Options

- [OSLogPrivacy](oslogprivacy.md): The privacy options that determine when to redact or display values in log messages.

### Value Formatters

- [OSLogBoolFormat](oslogboolformat.md): The formatting options for Boolean values.
- [OSLogIntegerFormatting](oslogintegerformatting.md): The formatting options for integer values.
- [OSLogInt32ExtendedFormat](oslogint32extendedformat.md): The formatting options for 32-bit integer values.
- [OSLogFloatFormatting](oslogfloatformatting.md): The formatting options for double and floating-point numbers.
- [OSLogPointerFormat](oslogpointerformat.md): The formatting options for pointer data.

### Value Interpolation

- [OSLogInterpolation](osloginterpolation.md): A container for the elements of a log message.
- [OSLogIntExtendedFormat](oslogintextendedformat.md): Options for expanding bit rate information stored as an int during logging.

### String Alignment

- [OSLogStringAlignment](oslogstringalignment.md): The alignment options for interpolated strings.

## See Also

### Log Messages

- [Logger](logger.md): An object for writing interpolated string messages to the unified logging system.
- [OSLogType](oslogtype.md): The various log levels that the unified logging system provides.

# Message Argument Formatters (Objective-C)

**Framework:** os  
**Kind:** API Collection

Manage the privacy and presentation of the message’s interpolated values using type-aware formatters.

## See Also

### Log Messages

- [Legacy Logging Symbols](legacy-logging-symbols.md): Migrate your code away from using these legacy symbols.
- [os_log_t](os-log-t.md): A log object that you pass to logging functions to send messages to that log.
- [os_log_with_type](os_log_with_type.md): Sends a message at a specific logging level, such as default, info, debug, error, or fault, to the logging system.
- [os_log_type_t](oslogtype.md): The various log levels that the unified logging system provides.
- [os_log](os_log.md): Sends a default-level message to the logging system.
- [os_log_info](os_log_info.md): Sends an info-level message to the logging system.
- [os_log_debug](os_log_debug.md): Sends a debug-level message to the logging system.
- [os_log_error](os_log_error.md): Sends an error-level message to the logging system.
- [os_log_fault](os_log_fault.md): Sends a fault-level message to the logging system.
