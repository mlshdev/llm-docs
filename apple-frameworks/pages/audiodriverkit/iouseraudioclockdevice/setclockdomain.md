> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioclockdevice/setclockdomain](https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/setclockdomain)

# SetClockDomain

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Sets the clock domain value of the clock device.

## Declaration

```objectivec
kern_return_t SetClockDomain(uint32_t in_clock_domain);
```

## Parameters

- `in_clock_domain`: The clock domain to set, as a `uint32_t`. This value indicates the clock domain to which this AudioDevice belongs. Audio hardware can synchronize AudioDevices that have the same value for this property. However, a value of `0` indicates an unspecified clock domain for the device. The framework assumes devices with unspecified clock domains are separate from one another, even if they also has `0` as their clock domain value.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

Drivers can change the transport type of the clock device dynamically. If successful, changing the transport type sends a notification to the host to update the object state.

## See Also

### Working with Clock Domain

- [GetClockDomain](getclockdomain.md): Gets the clock domain value of the clock device.
