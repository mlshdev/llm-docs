> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreaderaudiomixoutput/audiosettings](https://developer.apple.com/documentation/avfoundation/avassetreaderaudiomixoutput/audiosettings)

# audioSettings (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The audio settings that the output uses.

## Declaration

```swift
var audioSettings: [String : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

The dictionary must contain values for the keys in [Linear PCM format settings](../linear-pcm-format-settings.md).

Setting the property value to `nil` indicates that the output returns audio samples in an uncompressed format.

## See Also

### Inspecting an output

- [audioTracks](audiotracks.md): The tracks from which the output reads audio.

# audioSettings (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The audio settings that the output uses.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDictionary<NSString *,id> * audioSettings;
```

<a id="Discussion"></a>

## Discussion

The dictionary must contain values for the keys in [Linear PCM format settings](../linear-pcm-format-settings.md).

Setting the property value to `nil` indicates that the output returns audio samples in an uncompressed format.

## See Also

### Inspecting an output

- [audioTracks](audiotracks.md): The tracks from which the output reads audio.
