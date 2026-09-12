> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosessiondatasourcedescription/preferredpolarpattern](https://developer.apple.com/documentation/avfaudio/avaudiosessiondatasourcedescription/preferredpolarpattern)

# preferredPolarPattern (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The preferred directivity configuration for the data source.

## Declaration

```swift
var preferredPolarPattern: AVAudioSession.PolarPattern? { get }
```

<a id="Discussion"></a>

## Discussion

If this value is [nil](../../objectivec/nil-227m0.md), the data source doesn’t support directivity configuration, or you haven’t selected a preferred polar pattern.

## See Also

### Configuring Microphone Directivity

- [selectedPolarPattern](selectedpolarpattern.md): The data source’s active polar pattern.
- [supportedPolarPatterns](supportedpolarpatterns.md): The set of directivity configurations supported by the data source.
- [setPreferredPolarPattern(\_:)](setpreferredpolarpattern%28__%29.md): Selects the preferred directivity configuration for the data source.
- [AVAudioSession.PolarPattern](../avaudiosession/polarpattern.md): Constants that describe the possible polar patterns of the data source on an iOS device.

# preferredPolarPattern (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The preferred directivity configuration for the data source.

## Declaration

```objectivec
@property (readonly, nullable) AVAudioSessionPolarPattern preferredPolarPattern;
```

<a id="Discussion"></a>

## Discussion

If this value is [nil](../../objectivec/nil-227m0.md), the data source doesn’t support directivity configuration, or you haven’t selected a preferred polar pattern.

## See Also

### Configuring Microphone Directivity

- [selectedPolarPattern](selectedpolarpattern.md): The data source’s active polar pattern.
- [supportedPolarPatterns](supportedpolarpatterns.md): The set of directivity configurations supported by the data source.
- [setPreferredPolarPattern:error:](setpreferredpolarpattern%28__%29.md): Selects the preferred directivity configuration for the data source.
- [AVAudioSessionPolarPattern](../avaudiosession/polarpattern.md): Constants that describe the possible polar patterns of the data source on an iOS device.
