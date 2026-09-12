> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioslidercontrol/handlechangecontrolvalue](https://developer.apple.com/documentation/audiodriverkit/iouseraudioslidercontrol/handlechangecontrolvalue)

# HandleChangeControlValue

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Tells the slider control the value is changing.

## Declaration

```objectivec
virtual kern_return_t HandleChangeControlValue(uint32_t in_control_value);
```

## Parameters

- `in_control_value`: The new value to set.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

The default implementation calls [SetControlValue](setcontrolvalue.md) and returns [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md). Subclass and override this method to handle changes to the stream format and return [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) upon success.
