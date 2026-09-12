> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/os_log_type_t/os_log_type_error](https://developer.apple.com/documentation/kernel/os_log_type_t/os_log_type_error)

# OS_LOG_TYPE_ERROR

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

Error-level messages are always saved in the data store. They remain there until a storage quota is exceeded, at which point, the oldest messages are purged. Error-level messages are intended for reporting process-level errors. If an activity object exists, logging at this level captures information for the entire process chain. Logging a message of this type is equivalent to calling the `os_log_error` function.

## Declaration

```objectivec
OS_LOG_TYPE_ERROR
```
