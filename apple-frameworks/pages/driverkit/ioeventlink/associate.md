> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioeventlink/associate](https://developer.apple.com/documentation/driverkit/ioeventlink/associate)

# Associate

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
kern_return_t Associate(uint64_t options);
```

## Parameters

- `options`: Options for Associate(). Use kIOEventLinkAssociateCurrentThread or kIOEventLinkAssociateOnWait.

<a id="return-value"></a>

## Return Value

kIOReturnSuccess on success. See IOReturn.h for error codes.

<a id="discussion"></a>

## Discussion

Associate a thread with the eventlink.

The eventlink should be activated before this call. This is not real-time safe.
