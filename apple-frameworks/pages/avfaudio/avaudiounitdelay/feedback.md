> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitdelay/feedback](https://developer.apple.com/documentation/avfaudio/avaudiounitdelay/feedback)

# feedback (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The amount of the output signal that feeds back into the delay line.

## Declaration

```swift
var feedback: Float { get set }
```

<a id="Discussion"></a>

## Discussion

You specify the feedback as a percentage. The default value is `50%`. The valid range of values is `-100%` to `100%`.

## See Also

### Getting and setting the delay values

- [delayTime](delaytime.md): The time for the input signal to reach the output.
- [lowPassCutoff](lowpasscutoff.md): The cutoff frequency above which high frequency content rolls off, in hertz.
- [wetDryMix](wetdrymix.md): The blend of the wet and dry signals.

# feedback (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The amount of the output signal that feeds back into the delay line.

## Declaration

```objectivec
@property (nonatomic) float feedback;
```

<a id="Discussion"></a>

## Discussion

You specify the feedback as a percentage. The default value is `50%`. The valid range of values is `-100%` to `100%`.

## See Also

### Getting and setting the delay values

- [delayTime](delaytime.md): The time for the input signal to reach the output.
- [lowPassCutoff](lowpasscutoff.md): The cutoff frequency above which high frequency content rolls off, in hertz.
- [wetDryMix](wetdrymix.md): The blend of the wet and dry signals.
