> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideolevelcontrol/setscalarvalue](https://developer.apple.com/documentation/videodriverkit/iouservideolevelcontrol/setscalarvalue)

# SetScalarValue

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Sets the current scalar level value.

## Declaration

```objectivec
kern_return_t SetScalarValue(float in_scalar);
```

<a id="discussion"></a>

## Discussion

Changing the scalar level value will send a notification to the host to update the object state if successful. The object’s work queue synchronizes access to the value.

## See Also

### Accessing the value

- [SetDecibelValue](setdecibelvalue.md): Sets the current decibel level value.
- [GetScalarValue](getscalarvalue.md): Gets the scalar level value for the control.
- [GetDecibelValue](getdecibelvalue.md): Gets the decibel level value for the control.
