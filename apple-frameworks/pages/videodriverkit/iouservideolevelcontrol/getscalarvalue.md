> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideolevelcontrol/getscalarvalue](https://developer.apple.com/documentation/videodriverkit/iouservideolevelcontrol/getscalarvalue)

# GetScalarValue

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the scalar level value for the control.

## Declaration

```objectivec
float GetScalarValue();
```

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the control value.

## See Also

### Accessing the value

- [SetScalarValue](setscalarvalue.md): Sets the current scalar level value.
- [SetDecibelValue](setdecibelvalue.md): Sets the current decibel level value.
- [GetDecibelValue](getdecibelvalue.md): Gets the decibel level value for the control.
