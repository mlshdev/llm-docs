> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioaudiotogglecontrol/1416493-createpassthrumutecontrol

# createPassThruMuteControl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.10)

## Declaration

```objectivec
static IOAudioToggleControl * createPassThruMuteControl(bool initialValue, UInt32 channelID, const char *channelName, UInt32 cntrlID);
```
