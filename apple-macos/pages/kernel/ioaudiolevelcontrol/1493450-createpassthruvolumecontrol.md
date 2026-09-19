> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioaudiolevelcontrol/1493450-createpassthruvolumecontrol

# createPassThruVolumeControl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.10)

## Declaration

```objectivec
static IOAudioLevelControl * createPassThruVolumeControl(SInt32 initialValue, SInt32 minValue, SInt32 maxValue, IOFixed minDB, IOFixed maxDB, UInt32 channelID, const char *channelName, UInt32 cntrlID);
```
