> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudiolevelcontrol/1493470-createvolumecontrol](https://developer.apple.com/documentation/kernel/ioaudiolevelcontrol/1493470-createvolumecontrol)

# createVolumeControl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.10)

## Declaration

```objectivec
static IOAudioLevelControl * createVolumeControl(SInt32 initialValue, SInt32 minValue, SInt32 maxValue, IOFixed minDB, IOFixed maxDB, UInt32 channelID, const char *channelName, UInt32 cntrlID, UInt32 usage);
```
