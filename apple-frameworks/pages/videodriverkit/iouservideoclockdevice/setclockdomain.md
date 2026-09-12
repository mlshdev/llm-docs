> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoclockdevice/setclockdomain](https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/setclockdomain)

# SetClockDomain

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Sets the clock domain value of the clock device.

## Declaration

```objectivec
kern_return_t SetClockDomain(uint32_t in_clock_domain);
```

## Parameters

- `in_clock_domain`: The uint32_t clock domain value to set.

<a id="return-value"></a>

## Return Value

A kern_return_t value indicating success or failure.

<a id="discussion"></a>

## Discussion

A uint32_t whose value indicates the clock domain to which the IOUserVideoClockDevice belongs. IOUserVideoClockDevices that have the same value for this property can synchronize in hardware. However, a value of 0 indicates that the clock domain for the device is unspecified; treat it as separate from every other device’s clock domain, even if they have the value of 0 as their clock domain as well.

Drivers can change the clock domain of the clock device dynamically. If successful, the clock device sends a notification to the host to update the object state.

## See Also

### Working with the clock domain

- [GetClockDomain](getclockdomain.md): Gets the clock domain value of the clock device.
