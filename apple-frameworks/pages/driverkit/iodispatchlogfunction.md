> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iodispatchlogfunction

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
