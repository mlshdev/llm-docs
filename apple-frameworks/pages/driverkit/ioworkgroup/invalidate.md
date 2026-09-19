> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/ioworkgroup/invalidate

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
