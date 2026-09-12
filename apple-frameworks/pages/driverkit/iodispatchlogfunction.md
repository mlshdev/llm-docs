> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodispatchlogfunction](https://developer.apple.com/documentation/driverkit/iodispatchlogfunction)

# IODispatchLogFunction

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit · iOS · iPadOS · macOS

A function that logs content.

## Declaration

```objectivec
typedef int (*)(const char *, ...) IODispatchLogFunction;
```

## Parameters

- `format`: The C string to add to the log.

## See Also

### Logging Dispatch Information

- [Log](iodispatchqueue/log.md): Log the current execution context with respect to any queues the current thread holds.
