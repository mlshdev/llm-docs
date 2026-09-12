> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideolevelcontrol/getdecibelvalue](https://developer.apple.com/documentation/videodriverkit/iouservideolevelcontrol/getdecibelvalue)

# GetDecibelValue

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the decibel level value for the control.

## Declaration

```objectivec
float GetDecibelValue();
```

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the control value.

## See Also

### Accessing the value

- [SetScalarValue](setscalarvalue.md): Sets the current scalar level value.
- [SetDecibelValue](setdecibelvalue.md): Sets the current decibel level value.
- [GetScalarValue](getscalarvalue.md): Gets the scalar level value for the control.
