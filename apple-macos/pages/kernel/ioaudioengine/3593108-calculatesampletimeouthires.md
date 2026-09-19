> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioaudioengine/3593108-calculatesampletimeouthires

# calculateSampleTimeoutHiRes

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
virtual IOReturn calculateSampleTimeoutHiRes(uint64_t sampleIntervalHiRes, UInt32 numSampleFrames, IOAudioEnginePosition *startingPosition, AbsoluteTime *wakeupTime);
```
