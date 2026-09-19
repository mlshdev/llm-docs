> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioaudiostream/1580021-addavailableformat

# addAvailableFormat

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.10)

## Declaration

```objectivec
virtual void addAvailableFormat(const IOAudioStreamFormat *streamFormat, const IOAudioStreamFormatExtension *formatExtension, const IOAudioSampleRate *minRate, const IOAudioSampleRate *maxRate, const AudioIOFunction *ioFunctionList, UInt32 numFunctions);
```
