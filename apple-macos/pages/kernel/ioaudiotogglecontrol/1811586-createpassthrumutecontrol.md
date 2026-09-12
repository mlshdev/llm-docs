> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudiotogglecontrol/1811586-createpassthrumutecontrol](https://developer.apple.com/documentation/kernel/ioaudiotogglecontrol/1811586-createpassthrumutecontrol)

# createPassThruMuteControl

**Interface language:** Objective-C

**Framework:** Kernel

Allocates a new pass through mute control with the given attributes

## Declaration

```objectivec
static IOAudioToggleControl *createPassThruMuteControl (
 boolinitialValue, 
 UInt32channelID, 
 const char *channelName, 
 UInt32cntrlID); 
```

## Parameters

- `initialValue`: The initial value of the control
- `channelID`: The ID of the channel(s) that the control acts on. Common IDs are located in IOAudioTypes.h.
- `channelName`: An optional name for the channel. Common names are located in IOAudioPort.h.
- `cntrlID`: An optional ID for the control that can be used to uniquely identify controls

<a id="return_value"></a>

## Return Value

Returns a newly allocated and initialized mute IOAudioControl

## See Also

### Miscellaneous

- [create](1811569-create.md): Allocates a new mute control with the given attributes
- [init](1811599-init.md): Initializes a newly allocated IOAudioToggleControl with the given attributes
