> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessiondatasourcedescription/supportedpolarpatterns](https://developer.apple.com/documentation/avfaudio/avaudiosessiondatasourcedescription/supportedpolarpatterns)

# supportedPolarPatterns (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The set of directivity configurations supported by the data source.

## Declaration

```swift
var supportedPolarPatterns: [AVAudioSession.PolarPattern]? { get }
```

<a id="Discussion"></a>

## Discussion

This property returns an array of one or more polar patterns, or [nil](../../objectivec/nil-227m0.md) if the data source doesn’t support directivity configuration. This feature is available only on the built-in microphone port for certain devices.

## See Also

### Configuring Microphone Directivity

- [selectedPolarPattern](selectedpolarpattern.md): The data source’s active polar pattern.
- [preferredPolarPattern](preferredpolarpattern.md): The preferred directivity configuration for the data source.
- [setPreferredPolarPattern(\_:)](setpreferredpolarpattern%28__%29.md): Selects the preferred directivity configuration for the data source.
- [AVAudioSession.PolarPattern](../avaudiosession/polarpattern.md): Constants that describe the possible polar patterns of the data source on an iOS device.

# supportedPolarPatterns (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The set of directivity configurations supported by the data source.

## Declaration

```objectivec
@property (readonly, nullable) NSArray<NSString *> * supportedPolarPatterns;
```

<a id="Discussion"></a>

## Discussion

This property returns an array of one or more polar patterns, or [nil](../../objectivec/nil-227m0.md) if the data source doesn’t support directivity configuration. This feature is available only on the built-in microphone port for certain devices.

## See Also

### Configuring Microphone Directivity

- [selectedPolarPattern](selectedpolarpattern.md): The data source’s active polar pattern.
- [preferredPolarPattern](preferredpolarpattern.md): The preferred directivity configuration for the data source.
- [setPreferredPolarPattern:error:](setpreferredpolarpattern%28__%29.md): Selects the preferred directivity configuration for the data source.
- [AVAudioSessionPolarPattern](../avaudiosession/polarpattern.md): Constants that describe the possible polar patterns of the data source on an iOS device.
