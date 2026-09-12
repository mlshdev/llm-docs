> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudiolevelcontrol/1811880-setlinearscale](https://developer.apple.com/documentation/kernel/ioaudiolevelcontrol/1811880-setlinearscale)

# setLinearScale

**Interface language:** Objective-C

**Framework:** Kernel

This function tells CoreAudio if it should apply a curve to the scaler representation of the volume.

## Declaration

```objectivec
virtual void setLinearScale(
 booluseLinearScale); 
```

## Parameters

- `useLinearScale`: TRUE instructs CoreAudio to not apply a curve to the scaler representation of the volume, FALSE instructs CoreAudio to apply a curve, which is CoreAudio's default behavior.

## See Also

### Miscellaneous

- [create](1811861-create.md): Allocates a new level control with the given attributes
- [init](1811868-init.md): Initializes a newly allocated IOAudioLevelControl with the given attributes
- [setMaxDB](1811889-setmaxdb.md): Sets the maximum value in db that the control may have
- [setMaxValue](1811896-setmaxvalue.md): Sets the maximum value the control may have
- [setMinDB](1811907-setmindb.md): Sets the minimum value in db that the control may have
- [setMinValue](1811910-setminvalue.md): Sets the minimum value the control may have
