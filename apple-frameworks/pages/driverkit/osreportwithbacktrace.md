> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osreportwithbacktrace](https://developer.apple.com/documentation/driverkit/osreportwithbacktrace)

# OSReportWithBacktrace

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function  
**Availability:** DriverKit · iOS · iPadOS · macOS

Generates a backtrace and message for debugging.

## Declaration

```objectivec
void OSReportWithBacktrace(const char *str, ...);
```

## Parameters

- `str`: Printf-Like arguments to be logged, along with the backtrace of the caller.

<a id="Discussion"></a>

## Discussion

Generates a backtrace and message for debugging. May be inoperative on release OS builds.

## See Also

### Additional Utilities

- [OSSynchronizeIO](ossynchronizeio.md): Performs an `mfence` instruction on Intel-based Mac computers.
