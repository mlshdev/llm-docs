> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioaudiocontroluserclient/1430435-withaudiocontrol](https://developer.apple.com/documentation/kernel/ioaudiocontroluserclient/1430435-withaudiocontrol)

# withAudioControl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.10)

## Declaration

```objectivec
static IOAudioControlUserClient * withAudioControl(IOAudioControl *control, task_t clientTask, void *securityID, UInt32 type);
```
