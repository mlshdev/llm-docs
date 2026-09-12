> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioworkgroup/invalidate](https://developer.apple.com/documentation/driverkit/ioworkgroup/invalidate)

# Invalidate

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
kern_return_t Invalidate();
```

<a id="return-value"></a>

## Return Value

kIOReturnSuccess on success. See IOReturn.h for error codes.

<a id="discussion"></a>

## Discussion

Invalidate the IOWorkGroup.

This releases the kernel reference to the IOWorkGroup, allowing the name to be used for a different IOWorkGroup. This method should be called after the client has configured the eventlink with the IOConnectTrap call. After invalidation, the IOWorkGroup can no longer be configured through the IOConnectTrap call. No other functionality is affected.
