> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioaudiostream/1580041-processoutputsamples

# processOutputSamples

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.10)

## Declaration

```objectivec
virtual IOReturn processOutputSamples(IOAudioClientBuffer *clientBuffer, UInt32 firstSampleFrame, UInt32 loopCount, bool samplesAvailable);
```
