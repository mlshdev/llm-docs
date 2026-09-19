> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/iocommandpool/getcommand

# getCommand

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual IOCommandPtr getCommand(bool blockForCommand);
```

## Parameters

- `blockForCommand`: If the caller would like to have its thread slept until a command is available, it should pass true, else false.

<a id="return-value"></a>

## Return Value

If the caller passes true in blockForCommand, getCommand guarantees that the result will be a pointer to an IOCommand object from the pool. If the caller passes false, s/he is responsible for checking whether a non-NULL pointer was returned.

<a id="discussion"></a>

## Discussion

The getCommand method is used to get a pointer to an object of type IOCommand from the pool.
