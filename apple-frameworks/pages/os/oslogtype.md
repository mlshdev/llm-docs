> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslogtype](https://developer.apple.com/documentation/os/oslogtype)

# OSLogType (Swift)

**Framework:** os  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The various log levels that the unified logging system provides.

## Declaration

```swift
struct OSLogType
```

<a id="overview"></a>

## Overview

A log level controls how and when the system writes a message to the unified logging system. To write a message with a specific log level, create a [Logger](logger.md) and call its [log(level:\_:)](logger/log%28level___%29.md) method. Alternatively, call the method that corresponds to the desired log level, such as [debug(\_:)](logger/debug%28__%29.md) or [fault(\_:)](logger/fault%28__%29.md).

## Topics

### Getting Log Types

- [debug](oslogtype/debug.md): The debug log level.
- [info](oslogtype/info.md): The informative log level.
- [default](oslogtype/default.md): The default log level.
- [error](oslogtype/error.md): The error log level.
- [fault](oslogtype/fault.md): The fault log level.

### Creating a Log Type

- [init(\_:)](oslogtype/init%28__%29.md): Creates a log type from the specified value.
- [init(rawValue:)](oslogtype/init%28rawvalue_%29.md): Creates a log type from the specified raw value.

### Getting the Raw Value

- [rawValue](oslogtype/rawvalue.md): The log type’s raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Log Messages

- [Logger](logger.md): An object for writing interpolated string messages to the unified logging system.
- [Message Argument Formatters](message-argument-formatters.md): Manage the privacy and presentation of the message’s interpolated values using type-aware formatters.

# os_log_type_t (Objective-C)

**Framework:** os  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The various log levels that the unified logging system provides.

## Declaration

```objectivec
typedef enum { ... } os_log_type_t;
```

<a id="overview"></a>

## Overview

A log level controls how and when the system writes a message to the unified logging system. To write a message with a specific log level, create a [Logger](logger.md) and call its [log(level:\_:)](logger/log%28level___%29.md) method. Alternatively, call the method that corresponds to the desired log level, such as [debug(\_:)](logger/debug%28__%29.md) or [fault(\_:)](logger/fault%28__%29.md).

## Topics

### Enumeration Cases

- [OS_LOG_TYPE_DEBUG](os_log_type_t/os_log_type_debug.md): The debug log level.
- [OS_LOG_TYPE_DEFAULT](os_log_type_t/os_log_type_default.md): The default log level.
- [OS_LOG_TYPE_ERROR](os_log_type_t/os_log_type_error.md): The error log level.
- [OS_LOG_TYPE_FAULT](os_log_type_t/os_log_type_fault.md): The fault log level.
- [OS_LOG_TYPE_INFO](os_log_type_t/os_log_type_info.md): The informational log level.

## See Also

### Log Messages

- [Message Argument Formatters](message-argument-formatters.md): Manage the privacy and presentation of the message’s interpolated values using type-aware formatters.
- [Legacy Logging Symbols](legacy-logging-symbols.md): Migrate your code away from using these legacy symbols.
- [os_log_t](os-log-t.md): A log object that you pass to logging functions to send messages to that log.
- [os_log_with_type](os_log_with_type.md): Sends a message at a specific logging level, such as default, info, debug, error, or fault, to the logging system.
- [os_log](os_log.md): Sends a default-level message to the logging system.
- [os_log_info](os_log_info.md): Sends an info-level message to the logging system.
- [os_log_debug](os_log_debug.md): Sends a debug-level message to the logging system.
- [os_log_error](os_log_error.md): Sends an error-level message to the logging system.
- [os_log_fault](os_log_fault.md): Sends a fault-level message to the logging system.
