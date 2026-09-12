> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/os_log_type_t/os_log_type_fault](https://developer.apple.com/documentation/kernel/os_log_type_t/os_log_type_fault)

# OS_LOG_TYPE_FAULT

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

Fault-level messages are always saved in the data store. They remain there until a storage quota is exceeded, at which point, the oldest messages are purged. Fault-level messages are intended for capturing system-level or multi-process errors only. If an activity object exists, logging at this level captures information for the entire process chain. Logging a message at this level is equivalent to calling the `os_log_fault` function.

## Declaration

```objectivec
OS_LOG_TYPE_FAULT
```
