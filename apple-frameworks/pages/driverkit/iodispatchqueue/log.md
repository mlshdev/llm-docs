> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iodispatchqueue/log

# Log

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Log the current execution context with respect to any queues the current thread holds.

## Declaration

```objectivec
static void Log(const char *message, IODispatchLogFunction output);
```

## Parameters

- `message`: A C string that contains the message to add to the log file.
- `output`: The function address to use for logging the content. The address of [IOLog](../iolog.md) is suitable for use.

## See Also

### Logging Dispatch Information

- [IODispatchLogFunction](../iodispatchlogfunction.md): A function that logs content.
