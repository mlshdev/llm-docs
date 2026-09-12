> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iodelay](https://developer.apple.com/documentation/driverkit/iodelay)

# IODelay

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function  
**Availability:** DriverKit · iOS · iPadOS · macOS

Sleep the calling thread for a number of microseconds.

## Declaration

```objectivec
void IODelay(uint64_t us);
```

## Parameters

- `us`: The integer number of microseconds to wait.

<a id="Discussion"></a>

## Discussion

This function blocks the calling thread for at least the number of specified microseconds, giving time to other processes.

## See Also

### Thread Utilities

- [IOSleep](iosleep.md): Sleep the calling thread for a number of milliseconds.
