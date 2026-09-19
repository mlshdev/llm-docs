> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/osreportwithbacktrace

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
