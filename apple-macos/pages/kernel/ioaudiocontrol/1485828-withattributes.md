> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioaudiocontrol/1485828-withattributes

# withAttributes

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.10)

## Declaration

```objectivec
static IOAudioControl * withAttributes(UInt32 type, OSObject *initialValue, UInt32 channelID, const char *channelName, UInt32 cntrlID, UInt32 subType, UInt32 usage);
```
