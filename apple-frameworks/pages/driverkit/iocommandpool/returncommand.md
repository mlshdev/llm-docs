> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iocommandpool/returncommand

# returnCommand

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual void returnCommand(IOCommand *command);
```

## Parameters

- `command`: The command to place in the pool.

<a id="discussion"></a>

## Discussion

The returnCommand method is used to place an object of type IOCommand into the pool, whether it be the first time, or the 1000th time.
