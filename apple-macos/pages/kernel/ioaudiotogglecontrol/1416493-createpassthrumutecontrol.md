> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudiotogglecontrol/1416493-createpassthrumutecontrol](https://developer.apple.com/documentation/kernel/ioaudiotogglecontrol/1416493-createpassthrumutecontrol)

# createPassThruMuteControl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.10)

## Declaration

```objectivec
static IOAudioToggleControl * createPassThruMuteControl(bool initialValue, UInt32 channelID, const char *channelName, UInt32 cntrlID);
```
