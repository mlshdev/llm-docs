> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitdelay/delaytime](https://developer.apple.com/documentation/avfaudio/avaudiounitdelay/delaytime)

# delayTime (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The time for the input signal to reach the output.

## Declaration

```swift
var delayTime: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

You specify the delay in seconds. The default value is `1`. The valid range of values is `0` to `2` seconds.

## See Also

### Getting and setting the delay values

- [feedback](feedback.md): The amount of the output signal that feeds back into the delay line.
- [lowPassCutoff](lowpasscutoff.md): The cutoff frequency above which high frequency content rolls off, in hertz.
- [wetDryMix](wetdrymix.md): The blend of the wet and dry signals.

# delayTime (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The time for the input signal to reach the output.

## Declaration

```objectivec
@property (nonatomic) NSTimeInterval delayTime;
```

<a id="Discussion"></a>

## Discussion

You specify the delay in seconds. The default value is `1`. The valid range of values is `0` to `2` seconds.

## See Also

### Getting and setting the delay values

- [feedback](feedback.md): The amount of the output signal that feeds back into the delay line.
- [lowPassCutoff](lowpasscutoff.md): The cutoff frequency above which high frequency content rolls off, in hertz.
- [wetDryMix](wetdrymix.md): The blend of the wet and dry signals.
