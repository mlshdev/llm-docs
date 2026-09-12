> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioenvironmentdistanceattenuationmodel](https://developer.apple.com/documentation/avfaudio/avaudioenvironmentdistanceattenuationmodel)

# AVAudioEnvironmentDistanceAttenuationModel (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Types of distance attenuation models.

## Declaration

```swift
enum AVAudioEnvironmentDistanceAttenuationModel
```

<a id="overview"></a>

## Overview

Distance attenuation is the natural attenuation of sound when traveling from the source to the listener. The different attenuation models describe the drop-off in gain as the source moves away from the listener.

## Topics

### Attenuation Models

- [AVAudioEnvironmentDistanceAttenuationModel.exponential](avaudioenvironmentdistanceattenuationmodel/exponential.md): An exponential model that describes the drop-off in gain as the source moves away from the listener.
- [AVAudioEnvironmentDistanceAttenuationModel.inverse](avaudioenvironmentdistanceattenuationmodel/inverse.md): An inverse model that describes the drop-off in gain as the source moves away from the listener.
- [AVAudioEnvironmentDistanceAttenuationModel.linear](avaudioenvironmentdistanceattenuationmodel/linear.md): A linear model that describes the drop-off in gain as the source moves away from the listener.

### Initializers

- [init(rawValue:)](avaudioenvironmentdistanceattenuationmodel/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting and Setting the Attenuation Model

- [distanceAttenuationModel](avaudioenvironmentdistanceattenuationparameters/distanceattenuationmodel.md): The distance attenuation model that describes the drop-off in gain as the source moves away from the listener.

# AVAudioEnvironmentDistanceAttenuationModel (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Types of distance attenuation models.

## Declaration

```objectivec
enum AVAudioEnvironmentDistanceAttenuationModel : NSInteger;
```

<a id="overview"></a>

## Overview

Distance attenuation is the natural attenuation of sound when traveling from the source to the listener. The different attenuation models describe the drop-off in gain as the source moves away from the listener.

## Topics

### Attenuation Models

- [AVAudioEnvironmentDistanceAttenuationModelExponential](avaudioenvironmentdistanceattenuationmodel/exponential.md): An exponential model that describes the drop-off in gain as the source moves away from the listener.
- [AVAudioEnvironmentDistanceAttenuationModelInverse](avaudioenvironmentdistanceattenuationmodel/inverse.md): An inverse model that describes the drop-off in gain as the source moves away from the listener.
- [AVAudioEnvironmentDistanceAttenuationModelLinear](avaudioenvironmentdistanceattenuationmodel/linear.md): A linear model that describes the drop-off in gain as the source moves away from the listener.

## See Also

### Getting and Setting the Attenuation Model

- [distanceAttenuationModel](avaudioenvironmentdistanceattenuationparameters/distanceattenuationmodel.md): The distance attenuation model that describes the drop-off in gain as the source moves away from the listener.
