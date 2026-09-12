> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitdelay/wetdrymix](https://developer.apple.com/documentation/avfaudio/avaudiounitdelay/wetdrymix)

# wetDryMix (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The blend of the wet and dry signals.

## Declaration

```swift
var wetDryMix: Float { get set }
```

<a id="Discussion"></a>

## Discussion

You specify the blend as a percentage. The default value is `100%`. The valid range of values is `0%` through `100%`, where `0%` represents all dry.

## See Also

### Getting and setting the delay values

- [delayTime](delaytime.md): The time for the input signal to reach the output.
- [feedback](feedback.md): The amount of the output signal that feeds back into the delay line.
- [lowPassCutoff](lowpasscutoff.md): The cutoff frequency above which high frequency content rolls off, in hertz.

# wetDryMix (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The blend of the wet and dry signals.

## Declaration

```objectivec
@property (nonatomic) float wetDryMix;
```

<a id="Discussion"></a>

## Discussion

You specify the blend as a percentage. The default value is `100%`. The valid range of values is `0%` through `100%`, where `0%` represents all dry.

## See Also

### Getting and setting the delay values

- [delayTime](delaytime.md): The time for the input signal to reach the output.
- [feedback](feedback.md): The amount of the output signal that feeds back into the delay line.
- [lowPassCutoff](lowpasscutoff.md): The cutoff frequency above which high frequency content rolls off, in hertz.
