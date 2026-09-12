> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioservicenotificationdispatchsource/create](https://developer.apple.com/documentation/driverkit/ioservicenotificationdispatchsource/create)

# Create

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
static kern_return_t Create(OSDictionary *matching, uint64_t options, IODispatchQueue *queue, IOServiceNotificationDispatchSource **notification);
```

<a id="return-value"></a>

## Return Value

kIOReturnSuccess on success. See `IOReturn.h` for error codes.
