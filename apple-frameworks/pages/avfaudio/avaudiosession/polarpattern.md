> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/polarpattern](https://developer.apple.com/documentation/avfaudio/avaudiosession/polarpattern)

# AVAudioSession.PolarPattern (Swift)

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Constants that describe the possible polar patterns of the data source on an iOS device.

## Declaration

```swift
struct PolarPattern
```

<a id="overview"></a>

## Overview

The direction of a polar pattern is relative to the orientation of the data source. For example, you can use the cardioid pattern with a back-facing data source to more clearly record sound from behind the device, or with a front-facing data source to more clearly record sound from in front of the device (such as the user’s voice).

## Topics

### Creating a Polar Pattern

- [init(rawValue:)](polarpattern/init%28rawvalue_%29.md): Creates a new instance with the raw value you specify.

### Getting Standard Polar Patterns

- [stereo](polarpattern/stereo.md): A polar pattern that captures a stereo image of an audio source.
- [cardioid](polarpattern/cardioid.md): A data source that’s most sensitive to sound from the direction of the data source and is nearly insensitive to sound from the opposite direction.
- [subcardioid](polarpattern/subcardioid.md): A data source that’s most sensitive to sound from the direction of the data source and is less sensitive to sound from the opposite direction.
- [omnidirectional](polarpattern/omnidirectional.md): A data source that’s equally sensitive to sound from any direction.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring Microphone Directivity

- [selectedPolarPattern](../avaudiosessiondatasourcedescription/selectedpolarpattern.md): The data source’s active polar pattern.
- [supportedPolarPatterns](../avaudiosessiondatasourcedescription/supportedpolarpatterns.md): The set of directivity configurations supported by the data source.
- [preferredPolarPattern](../avaudiosessiondatasourcedescription/preferredpolarpattern.md): The preferred directivity configuration for the data source.
- [setPreferredPolarPattern(\_:)](../avaudiosessiondatasourcedescription/setpreferredpolarpattern%28__%29.md): Selects the preferred directivity configuration for the data source.

# AVAudioSessionPolarPattern (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe the possible polar patterns of the data source on an iOS device.

## Declaration

```objectivec
typedef NSString * AVAudioSessionPolarPattern;
```

<a id="overview"></a>

## Overview

The direction of a polar pattern is relative to the orientation of the data source. For example, you can use the cardioid pattern with a back-facing data source to more clearly record sound from behind the device, or with a front-facing data source to more clearly record sound from in front of the device (such as the user’s voice).

## Topics

### Getting Standard Polar Patterns

- [AVAudioSessionPolarPatternStereo](polarpattern/stereo.md): A polar pattern that captures a stereo image of an audio source.
- [AVAudioSessionPolarPatternCardioid](polarpattern/cardioid.md): A data source that’s most sensitive to sound from the direction of the data source and is nearly insensitive to sound from the opposite direction.
- [AVAudioSessionPolarPatternSubcardioid](polarpattern/subcardioid.md): A data source that’s most sensitive to sound from the direction of the data source and is less sensitive to sound from the opposite direction.
- [AVAudioSessionPolarPatternOmnidirectional](polarpattern/omnidirectional.md): A data source that’s equally sensitive to sound from any direction.

## See Also

### Configuring Microphone Directivity

- [selectedPolarPattern](../avaudiosessiondatasourcedescription/selectedpolarpattern.md): The data source’s active polar pattern.
- [supportedPolarPatterns](../avaudiosessiondatasourcedescription/supportedpolarpatterns.md): The set of directivity configurations supported by the data source.
- [preferredPolarPattern](../avaudiosessiondatasourcedescription/preferredpolarpattern.md): The preferred directivity configuration for the data source.
- [setPreferredPolarPattern:error:](../avaudiosessiondatasourcedescription/setpreferredpolarpattern%28__%29.md): Selects the preferred directivity configuration for the data source.
