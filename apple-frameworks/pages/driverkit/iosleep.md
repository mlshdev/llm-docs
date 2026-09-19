> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iosleep

# IOSleep

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function  
**Availability:** DriverKit · iOS · iPadOS · macOS

Sleep the calling thread for a number of milliseconds.

## Declaration

```objectivec
void IOSleep(uint64_t ms);
```

## Parameters

- `ms`: The integer number of milliseconds to wait.

<a id="Discussion"></a>

## Discussion

This function blocks the calling thread for at least the number of specified milliseconds, giving time to other processes.

## See Also

### Thread Utilities

- [IODelay](iodelay.md): Sleep the calling thread for a number of microseconds.
