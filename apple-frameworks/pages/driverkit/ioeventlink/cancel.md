> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/ioeventlink/cancel

# Cancel

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
kern_return_t Cancel();
```

<a id="return-value"></a>

## Return Value

kIOReturnSuccess on success. See IOReturn.h for error codes.

<a id="discussion"></a>

## Discussion

Cancel the event link.

If a thread is waiting on the eventlink, cancellation will wake up that thread.
