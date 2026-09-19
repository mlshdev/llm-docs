> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcaptureaudiopreviewoutput/outputdeviceuniqueid

# outputDeviceUniqueID (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The unique identifier of the Core Audio output device to use for audio preview.

## Declaration

```swift
var outputDeviceUniqueID: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Set the value to the unique identifier of the audio output device, or `nil` to use default system output.

## See Also

### Configuring the output

- [volume](volume.md): The output volume of the audio preview.

# outputDeviceUniqueID (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The unique identifier of the Core Audio output device to use for audio preview.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * outputDeviceUniqueID;
```

<a id="Discussion"></a>

## Discussion

Set the value to the unique identifier of the audio output device, or `nil` to use default system output.

## See Also

### Configuring the output

- [volume](volume.md): The output volume of the audio preview.
