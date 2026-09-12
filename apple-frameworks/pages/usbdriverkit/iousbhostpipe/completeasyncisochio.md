> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostpipe/completeasyncisochio](https://developer.apple.com/documentation/usbdriverkit/iousbhostpipe/completeasyncisochio)

# CompleteAsyncIsochIO

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Handles the completion of an asynchronous request.

## Declaration

```objectivec
virtual void CompleteAsyncIsochIO(OSAction *action, IOReturn status);
```

## Parameters

- `action`: A pointer to the [OSAction](../../driverkit/osaction.md) object of the request.
- `status`: The result of the operation.

<a id="Discussion"></a>

## Discussion

Implement a custom version of this method and use the [TYPE](../../driverkit/type.md) macro to let the system know that your method conforms to this prototype.

## See Also

### Interacting with Isochronous Endpoints

- [IsochIO](isochio.md): Performs a synchronous or asynchronous request on an isochronous endpoint.
- [IOUSBIsochronousFrame](../iousbisochronousframe.md): A structure representing a single frame in an isochronous transfer.
