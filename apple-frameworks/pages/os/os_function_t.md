> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_function_t](https://developer.apple.com/documentation/os/os_function_t)

# os_function_t

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer to a function.

## Declaration

```objectivec
typedef void (*)(void *) os_function_t;
```

## See Also

### Memory

- [os_proc_available_memory](os_proc_available_memory.md): Determines the amount of memory available to the current app.
- [os_block_t](os_block_t.md): A block that takes no arguments and returns no value.
- [os_release](os_release-c.func.md)
- [os_retain](os_retain-c.func.md)
