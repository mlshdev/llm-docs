> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioaudioselectorcontrol/1485376-createoutputclockselector

# createOutputClockSelector

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.10)

## Declaration

```objectivec
static IOAudioSelectorControl * createOutputClockSelector(SInt32 initialValue, UInt32 channelID, UInt32 clockSource, const char *channelName, UInt32 cntrlID);
```
