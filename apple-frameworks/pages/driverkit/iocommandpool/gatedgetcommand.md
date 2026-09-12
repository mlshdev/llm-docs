> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/iocommandpool/gatedgetcommand](https://developer.apple.com/documentation/driverkit/iocommandpool/gatedgetcommand)

# gatedGetCommand

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual kern_return_t gatedGetCommand(IOCommand **command, bool blockForCommand);
```

## Parameters

- `command`: A pointer to a pointer to an IOCommand object where the returned command will be stored.
- `blockForCommand`: A bool that indicates whether to block the request until a command becomes available.

<a id="return-value"></a>

## Return Value

kIOReturnNoResources if no command is available and the client doesn’t wish to block until one does become available. kIOReturnSuccess if the vCommand argument is valid.

<a id="discussion"></a>

## Discussion

The gatedGetCommand method is used to serialize the extraction of a command from the pool synchronized with the pool’s queue.
