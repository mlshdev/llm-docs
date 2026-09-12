> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioeventlink/create](https://developer.apple.com/documentation/driverkit/ioeventlink/create)

# Create

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
static kern_return_t Create(OSString *name, IOUserClient *userClient, IOEventLink **eventLink);
```

## Parameters

- `name`: User-specified name. If an IOEventLink with the same name already exists in the specified user client, the old IOEventLink will be replaced.
- `userClient`: Userclient to create the eventlink in. The DriverKit runtime will retain the userclient, and will release it in Invalidate() or when the IOEventLink is freed.
- `eventLink`: Created IOEventLink with +1 retain count to be released by the caller.

<a id="return-value"></a>

## Return Value

kIOReturnSuccess on success. See IOReturn.h for error codes.

<a id="discussion"></a>

## Discussion

Create an IOEventLink.
