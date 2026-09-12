> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkingdriverkit/iousernetworkethernet/sethardwareassists-3vpkr](https://developer.apple.com/documentation/networkingdriverkit/iousernetworkethernet/sethardwareassists-3vpkr)

# setHardwareAssists

**Interface language:** Objective-C

**Framework:** NetworkingDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 22.0+

## Declaration

```objectivec
virtual IOReturn setHardwareAssists(uint32_t hardwareAssists, uint32_t hardwareAssistsMask);
```

## Parameters

- `hardwareAssists`: The requested assists available to the stack.
- `hardwareAssistsMask`: The Specific assist that the driver should set..

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess on success, or an error otherwise.

<a id="discussion"></a>

## Discussion

Set the stack requested hardware assists.

Driver should implement this function to be able to update itself with requested assists.
