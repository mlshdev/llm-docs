> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiouniteqfiltertype/lowpass](https://developer.apple.com/documentation/avfaudio/avaudiouniteqfiltertype/lowpass)

# AVAudioUnitEQFilterType.lowPass (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A type that represents a simple Butterworth second-order low-pass filter.

## Declaration

```swift
case lowPass
```

<a id="Discussion"></a>

## Discussion

The necessary parameter for this type is [frequency](../avaudiouniteqfilterparameters/frequency.md) (`-3 dB` cutoff at specified frequency).

## See Also

### Filter Types

- [AVAudioUnitEQFilterType.parametric](parametric.md): A type that represents a parametric filter that derives from a Butterworth analog prototype.
- [AVAudioUnitEQFilterType.highPass](highpass.md): A type that represents a simple Butterworth second-order high-pass filter.
- [AVAudioUnitEQFilterType.resonantLowPass](resonantlowpass.md): A type that represents a low-pass filter with resonance support using the bandwidth parameter.
- [AVAudioUnitEQFilterType.resonantHighPass](resonanthighpass.md): A type that represents a high-pass filter with resonance support using the bandwidth parameter.
- [AVAudioUnitEQFilterType.bandPass](bandpass.md): A type that represents a bandpass filter.
- [AVAudioUnitEQFilterType.bandStop](bandstop.md): A type that represents a band-stop filter, also known as a notch filter.
- [AVAudioUnitEQFilterType.lowShelf](lowshelf.md): A type that represents a low-shelf filter.
- [AVAudioUnitEQFilterType.highShelf](highshelf.md): A type that represents a high-shelf filter.
- [AVAudioUnitEQFilterType.resonantLowShelf](resonantlowshelf.md): A type that represents a low-shelf filter with resonance support using the bandwidth parameter.
- [AVAudioUnitEQFilterType.resonantHighShelf](resonanthighshelf.md): A type that represents a high-shelf filter with resonance support using the bandwidth parameter.

# AVAudioUnitEQFilterTypeLowPass (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A type that represents a simple Butterworth second-order low-pass filter.

## Declaration

```objectivec
AVAudioUnitEQFilterTypeLowPass
```

<a id="Discussion"></a>

## Discussion

The necessary parameter for this type is [frequency](../avaudiouniteqfilterparameters/frequency.md) (`-3 dB` cutoff at specified frequency).

## See Also

### Filter Types

- [AVAudioUnitEQFilterTypeParametric](parametric.md): A type that represents a parametric filter that derives from a Butterworth analog prototype.
- [AVAudioUnitEQFilterTypeHighPass](highpass.md): A type that represents a simple Butterworth second-order high-pass filter.
- [AVAudioUnitEQFilterTypeResonantLowPass](resonantlowpass.md): A type that represents a low-pass filter with resonance support using the bandwidth parameter.
- [AVAudioUnitEQFilterTypeResonantHighPass](resonanthighpass.md): A type that represents a high-pass filter with resonance support using the bandwidth parameter.
- [AVAudioUnitEQFilterTypeBandPass](bandpass.md): A type that represents a bandpass filter.
- [AVAudioUnitEQFilterTypeBandStop](bandstop.md): A type that represents a band-stop filter, also known as a notch filter.
- [AVAudioUnitEQFilterTypeLowShelf](lowshelf.md): A type that represents a low-shelf filter.
- [AVAudioUnitEQFilterTypeHighShelf](highshelf.md): A type that represents a high-shelf filter.
- [AVAudioUnitEQFilterTypeResonantLowShelf](resonantlowshelf.md): A type that represents a low-shelf filter with resonance support using the bandwidth parameter.
- [AVAudioUnitEQFilterTypeResonantHighShelf](resonanthighshelf.md): A type that represents a high-shelf filter with resonance support using the bandwidth parameter.
