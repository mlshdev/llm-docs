> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioeventlink/invalidate](https://developer.apple.com/documentation/driverkit/ioeventlink/invalidate)

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

Invalidate the IOEventLink.

This releases the kernel reference to the IOEventLink, allowing the name to be used for a different IOEventLink. This method should be called after the client has configured the eventlink with the IOConnectTrap call. After invalidation, the IOEventLink can no longer be configured through the IOConnectTrap call. No other functionality is affected.
