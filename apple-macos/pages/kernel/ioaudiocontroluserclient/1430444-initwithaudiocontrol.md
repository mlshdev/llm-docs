> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioaudiocontroluserclient/1430444-initwithaudiocontrol

# initWithAudioControl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.10)

## Declaration

```objectivec
virtual bool initWithAudioControl(IOAudioControl *control, task_t owningTask, void *securityID, UInt32 type, OSDictionary *properties);
```
