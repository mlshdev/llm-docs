> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudioselectorcontrol/1485365-createinputclockselector](https://developer.apple.com/documentation/kernel/ioaudioselectorcontrol/1485365-createinputclockselector)

# createInputClockSelector

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.10)

## Declaration

```objectivec
static IOAudioSelectorControl * createInputClockSelector(SInt32 initialValue, UInt32 channelID, UInt32 clockSource, const char *channelName, UInt32 cntrlID);
```
