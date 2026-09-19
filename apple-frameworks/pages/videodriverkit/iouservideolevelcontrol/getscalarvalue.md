> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideolevelcontrol/getscalarvalue

# GetScalarValue

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [SetScalarValue](setscalarvalue.md): Beta. Sets the current scalar level value.
- [SetDecibelValue](setdecibelvalue.md): Beta. Sets the current decibel level value.
- [GetDecibelValue](getdecibelvalue.md): Beta. Gets the decibel level value for the control.
