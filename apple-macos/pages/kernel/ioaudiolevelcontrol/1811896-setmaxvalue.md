> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudiolevelcontrol/1811896-setmaxvalue](https://developer.apple.com/documentation/kernel/ioaudiolevelcontrol/1811896-setmaxvalue)

# setMaxValue

**Interface language:** Objective-C

**Framework:** Kernel

Sets the maximum value the control may have

## Declaration

```objectivec
virtual void setMaxValue(
 SInt32maxValue); 
```

## Parameters

- `maxValue`: The maximum value for the control

## See Also

### Miscellaneous

- [create](1811861-create.md): Allocates a new level control with the given attributes
- [init](1811868-init.md): Initializes a newly allocated IOAudioLevelControl with the given attributes
- [setLinearScale](1811880-setlinearscale.md): This function tells CoreAudio if it should apply a curve to the scaler representation of the volume.
- [setMaxDB](1811889-setmaxdb.md): Sets the maximum value in db that the control may have
- [setMinDB](1811907-setmindb.md): Sets the minimum value in db that the control may have
- [setMinValue](1811910-setminvalue.md): Sets the minimum value the control may have
