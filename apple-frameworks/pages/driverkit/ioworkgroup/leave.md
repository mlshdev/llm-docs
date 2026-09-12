> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioworkgroup/leave](https://developer.apple.com/documentation/driverkit/ioworkgroup/leave)

# Leave

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
kern_return_t Leave(void *token);
```

## Parameters

- `token`: The workgroup token.

<a id="return-value"></a>

## Return Value

kIOReturnSuccess on success. See IOReturn.h for error codes.

<a id="discussion"></a>

## Discussion

Leave the workgroup.

The workgroup must have been joined with Join(). Use the same token in Join() for this method.
