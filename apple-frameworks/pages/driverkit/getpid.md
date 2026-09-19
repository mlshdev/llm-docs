> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/getpid

# getpid

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Function  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
pid_t getpid();
```

<a id="return-value"></a>

## Return Value

Value of the process ID

<a id="discussion"></a>

## Discussion

Returns the process ID (pid) of the current driver instance
