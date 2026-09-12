> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostpipe/adjustpipe](https://developer.apple.com/documentation/usbdriverkit/iousbhostpipe/adjustpipe)

# AdjustPipe

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Adjusts the behavior of periodic endpoints to consume a different amount of bus bandwidth.

## Declaration

```objectivec
virtual kern_return_t AdjustPipe(const IOUSBStandardEndpointDescriptors *descriptors);
```

## Parameters

- `descriptors`: A pointer to a descriptor’s structure describing the new endpoint policy. Copy the original endpoint descriptors and modify to adjust maximum packet size, burst, and interval values.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

Periodic (interrupt and isochronous) endpoints reserve bus bandwidth when they’re created. This reserved bandwidth takes into account the maximum packet size, burst size, and endpoint service interval. If you know the endpoint won’t use all of its allocated bandwidth, you can call the `AdjustPipe` method to reduce the bandwidth reserved for the endpoint.

## See Also

### Adjusting the Pipe’s Status

- [ClearStall](clearstall.md): Clears the halt condition of the pipe.
