> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureaudiofileoutput/audiosettings](https://developer.apple.com/documentation/avfoundation/avcaptureaudiofileoutput/audiosettings)

# audioSettings (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The settings used to decode or re-encode audio before it is output by the receiver.

## Declaration

```swift
var audioSettings: [String : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is a dictionary containing values for audio settings keys defined in `AVAudioSettings.h`. If you set the value of this property to `nil`, the output vends samples in their device native format.

## See Also

### Configuring output

- [metadata](metadata.md): A collection of metadata to be written to the receiver’s output files.

# audioSettings (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The settings used to decode or re-encode audio before it is output by the receiver.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDictionary<NSString *,id> * audioSettings;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a dictionary containing values for audio settings keys defined in `AVAudioSettings.h`. If you set the value of this property to `nil`, the output vends samples in their device native format.

## See Also

### Configuring output

- [metadata](metadata.md): A collection of metadata to be written to the receiver’s output files.
