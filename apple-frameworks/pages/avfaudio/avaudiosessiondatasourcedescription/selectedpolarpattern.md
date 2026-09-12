> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessiondatasourcedescription/selectedpolarpattern](https://developer.apple.com/documentation/avfaudio/avaudiosessiondatasourcedescription/selectedpolarpattern)

# selectedPolarPattern (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The data source’s active polar pattern.

## Declaration

```swift
var selectedPolarPattern: AVAudioSession.PolarPattern? { get }
```

<a id="Discussion"></a>

## Discussion

If this value is [nil](../../objectivec/nil-227m0.md), the data source doesn’t support directivity configuration.

## See Also

### Configuring Microphone Directivity

- [supportedPolarPatterns](supportedpolarpatterns.md): The set of directivity configurations supported by the data source.
- [preferredPolarPattern](preferredpolarpattern.md): The preferred directivity configuration for the data source.
- [setPreferredPolarPattern(\_:)](setpreferredpolarpattern%28__%29.md): Selects the preferred directivity configuration for the data source.
- [AVAudioSession.PolarPattern](../avaudiosession/polarpattern.md): Constants that describe the possible polar patterns of the data source on an iOS device.

# selectedPolarPattern (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The data source’s active polar pattern.

## Declaration

```objectivec
@property (readonly, nullable) AVAudioSessionPolarPattern selectedPolarPattern;
```

<a id="Discussion"></a>

## Discussion

If this value is [nil](../../objectivec/nil-227m0.md), the data source doesn’t support directivity configuration.

## See Also

### Configuring Microphone Directivity

- [supportedPolarPatterns](supportedpolarpatterns.md): The set of directivity configurations supported by the data source.
- [preferredPolarPattern](preferredpolarpattern.md): The preferred directivity configuration for the data source.
- [setPreferredPolarPattern:error:](setpreferredpolarpattern%28__%29.md): Selects the preferred directivity configuration for the data source.
- [AVAudioSessionPolarPattern](../avaudiosession/polarpattern.md): Constants that describe the possible polar patterns of the data source on an iOS device.
