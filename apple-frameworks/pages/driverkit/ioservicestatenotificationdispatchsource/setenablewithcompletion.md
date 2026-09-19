> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/ioservicestatenotificationdispatchsource/setenablewithcompletion

# SetEnableWithCompletion

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual kern_return_t SetEnableWithCompletion(bool enable, IODispatchSourceCancelHandler handler);
```

<a id="return-value"></a>

## Return Value

kIOReturnSuccess on success. See `IOReturn.h` for error codes.
