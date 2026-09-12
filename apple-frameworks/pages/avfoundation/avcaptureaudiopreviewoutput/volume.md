> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureaudiopreviewoutput/volume](https://developer.apple.com/documentation/avfoundation/avcaptureaudiopreviewoutput/volume)

# volume (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The output volume of the audio preview.

## Declaration

```swift
var volume: Float { get set }
```

<a id="Discussion"></a>

## Discussion

A value of `1.0` indicates maximum volume, and a value of `0.0` mutes the audio preview.

## See Also

### Configuring the output

- [outputDeviceUniqueID](outputdeviceuniqueid.md): The unique identifier of the Core Audio output device to use for audio preview.

# volume (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The output volume of the audio preview.

## Declaration

```objectivec
@property (nonatomic) float volume;
```

<a id="Discussion"></a>

## Discussion

A value of `1.0` indicates maximum volume, and a value of `0.0` mutes the audio preview.

## See Also

### Configuring the output

- [outputDeviceUniqueID](outputdeviceuniqueid.md): The unique identifier of the Core Audio output device to use for audio preview.
