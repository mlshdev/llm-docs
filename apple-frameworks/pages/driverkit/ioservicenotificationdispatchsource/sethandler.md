> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioservicenotificationdispatchsource/sethandler](https://developer.apple.com/documentation/driverkit/ioservicenotificationdispatchsource/sethandler)

# SetHandler

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual kern_return_t SetHandler(OSAction *action);
```

<a id="return-value"></a>

## Return Value

kIOReturnSuccess on success. See `IOReturn.h` for error codes.
