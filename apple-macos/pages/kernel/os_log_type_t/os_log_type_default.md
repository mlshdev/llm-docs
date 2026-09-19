> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/os_log_type_t/os_log_type_default

# OS_LOG_TYPE_DEFAULT

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

Default-level messages are initially stored in memory buffers. Without a configuration change, they are compressed and moved to the data store as memory buffers fill. They remain there until a storage quota is exceeded, at which point, the oldest messages are purged. Use this level to capture information about things that *might* result a failure. Logging a message of this type is equivalent to calling the `os_log` function.

## Declaration

```objectivec
OS_LOG_TYPE_DEFAULT
```
