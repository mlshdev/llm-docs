> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os](https://developer.apple.com/documentation/os)

# os (Swift)

**Framework:** os  
**Kind:** Framework  
**Availability:** iOS 8.0+ · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Coordinate the scheduling and synchronization of your app’s tasks, and log information to the console to diagnose issues.

## Topics

### Logs

- [Logging](os/logging.md): Capture telemetry from your app for debugging and performance analysis using the unified logging system.

### Task Management

- [Synchronization](os/synchronization.md): Access low-level synchronization mechanisms to control state across threads.

### Deprecated

- [Deprecated Symbols](os/deprecated-symbols.md): Review unsupported symbols and their replacements.

### Reference

- [os Constants](os/os-constants.md)

### Variables

- [OS_LOG_STRING_SECTION](os/os_log_string_section.md)

# os (Objective-C)

**Framework:** os  
**Kind:** Framework  
**Availability:** iOS 8.0+ · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Coordinate the scheduling and synchronization of your app’s tasks, and log information to the console to diagnose issues.

## Topics

### Logs

- [Logging](os/logging.md): Capture telemetry from your app for debugging and performance analysis using the unified logging system.

### Task Management

- [Workgroups](os/workgroups.md): Schedule one or more threads to run at regular intervals and before specific deadlines.
- [Synchronization](os/synchronization.md): Access low-level synchronization mechanisms to control state across threads.

### Memory

- [os_proc_available_memory](os/os_proc_available_memory.md): Determines the amount of memory available to the current app.
- [os_block_t](os/os_block_t.md): A block that takes no arguments and returns no value.
- [os_function_t](os/os_function_t.md): A pointer to a function.
- [os_release](os/os_release-c.func.md)
- [os_retain](os/os_retain-c.func.md)

### Deprecated

- [Deprecated Symbols](os/deprecated-symbols.md): Review unsupported symbols and their replacements.

### Reference

- [os Macros](os/os-macros.md)
- [os Data Types](os/os-data-types.md)

### Functions

- [os_lockdown_mode_enabled](os/os_lockdown_mode_enabled.md)
- [os_security_config_get](os/os_security_config_get.md)
- [os_security_config_get_for_proc](os/os_security_config_get_for_proc.md)
- [os_security_config_get_for_task](os/os_security_config_get_for_task.md)

### Macros

- [API_OBSOLETED](os/api_obsoleted.md)
- [API_OBSOLETED_BEGIN](os/api_obsoleted_begin.md)
- [API_OBSOLETED_END](os/api_obsoleted_end.md)
- [API_OBSOLETED_WITH_REPLACEMENT](os/api_obsoleted_with_replacement.md)
- [API_OBSOLETED_WITH_REPLACEMENT_BEGIN](os/api_obsoleted_with_replacement_begin.md)
- [API_OBSOLETED_WITH_REPLACEMENT_END](os/api_obsoleted_with_replacement_end.md)
- [LOG_SWIFT_NAME](os/log_swift_name.md)
- [LOG_SWIFT_NEWTYPE](os/log_swift_newtype.md)
- [OS_LOG_STRING_SECTION](os/os_log_string_section.md)
- [OS_WORKGROUP_ENUM_API_DEPRECATED_WITH_REPLACEMENT](os/os_workgroup_enum_api_deprecated_with_replacement.md)

### Enumerations

- [os_security_config_t](os/os_security_config_t.md)
