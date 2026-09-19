> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iocommandpool/gatedreturncommand

# gatedReturnCommand

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual kern_return_t gatedReturnCommand(IOCommand *command);
```

## Parameters

- `command`: A pointer to the IOCommand object to be returned to the pool.

<a id="return-value"></a>

## Return Value

kIOReturnSuccess on success. See IOReturn.h for error codes.

<a id="discussion"></a>

## Discussion

The gatedReturnCommand method is used to serialize the return of a command to the pool synchronized with the pool’s queue.
