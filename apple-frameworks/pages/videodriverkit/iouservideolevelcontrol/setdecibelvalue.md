> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideolevelcontrol/setdecibelvalue](https://developer.apple.com/documentation/videodriverkit/iouservideolevelcontrol/setdecibelvalue)

# SetDecibelValue

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Sets the current decibel level value.

## Declaration

```objectivec
kern_return_t SetDecibelValue(float in_decibel_value);
```

## Parameters

- `in_decibel_value`: Float decibel level value

<a id="discussion"></a>

## Discussion

Changing the decibel level value will send a notification to the host to update the object state if successful. The object’s work queue synchronizes access to the value.

## See Also

### Accessing the value

- [SetScalarValue](setscalarvalue.md): Sets the current scalar level value.
- [GetScalarValue](getscalarvalue.md): Gets the scalar level value for the control.
- [GetDecibelValue](getdecibelvalue.md): Gets the decibel level value for the control.
