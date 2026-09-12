> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp/biquad](https://developer.apple.com/documentation/accelerate/vdsp/biquad)

# vDSP.Biquad

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

A single- or double-precision biquadratic filter.

## Declaration

```swift
struct Biquad<T> where T : vDSP_FloatingPointBiquadFilterable
```

<a id="overview"></a>

## Overview

> **Note**

>  The vDSP biquadratic filters work in place. That is, the source and destination pointers may point to the same memory.

## Topics

### Initializers

- [init(coefficients:channelCount:sectionCount:ofType:)](biquad/init%28coefficients_channelcount_sectioncount_oftype_%29.md): Creates a new single-channel or multichannel cascaded biquad IIR structure.

### Instance methods

- [apply(input:)](biquad/apply%28input_%29.md): Applies a single- or double-precision single-channel or multichannel biquad IIR filter, returning the filtered signal.
- [apply(input:output:)](biquad/apply%28input_output_%29.md): Applies a single- or double-precision single-channel or multichannel biquad IIR filter, overwriting the supplied output vector.

## See Also

### Biquadratic IIR Filters

- [Equalizing audio with discrete cosine transforms (DCTs)](../equalizing-audio-with-discrete-cosine-transforms-dcts.md): Change the frequency response of an audio signal by manipulating frequency-domain data.
