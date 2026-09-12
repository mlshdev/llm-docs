> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudiocontrol/intvaluechangehandler](https://developer.apple.com/documentation/kernel/ioaudiocontrol/intvaluechangehandler)

# IntValueChangeHandler

**Interface language:** Objective-C

**Framework:** Kernel

Handler function used to make a notification when a value is to be changed.

## Declaration

```objectivec
typedef IOReturn ( *IntValueChangeHandler)(
   OSObject *target,
   IOAudioControl *audioControl,
   SInt32 oldValue,
   SInt32 newValue);
```

## Parameters

- `target`: Reference supplied when the handler was registered.
- `audioControl`: The IOAudioControl that is changing.
- `oldValue`: The old value of the control.
- `newValue`: The new value the control is being changed to.

<a id="return_value"></a>

## Return Value

Must return kIOReturnSuccess when the hardware is successfully updated.
