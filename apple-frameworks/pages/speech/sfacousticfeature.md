> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfacousticfeature](https://developer.apple.com/documentation/speech/sfacousticfeature)

# SFAcousticFeature (Swift)

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

The value of a voice analysis metric.

## Declaration

```swift
class SFAcousticFeature
```

## Topics

### Inspecting a feature

- [frameDuration](sfacousticfeature/frameduration.md): The duration of the audio frame.
- [acousticFeatureValuePerFrame](sfacousticfeature/acousticfeaturevalueperframe-5krkk.md): An array of feature values, one value per audio frame, corresponding to a transcript segment of recorded audio.

### Initializers

- [init(coder:)](sfacousticfeature/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Voice analytics

- [SFVoiceAnalytics](sfvoiceanalytics.md): A collection of vocal analysis metrics.

# SFAcousticFeature (Objective-C)

**Framework:** Speech  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

The value of a voice analysis metric.

## Declaration

```objectivec
@interface SFAcousticFeature : NSObject
```

## Topics

### Inspecting a feature

- [frameDuration](sfacousticfeature/frameduration.md): The duration of the audio frame.
- [acousticFeatureValuePerFrame](sfacousticfeature/acousticfeaturevalueperframe-gsz5.md): An array of feature values, one value per audio frame, corresponding to a transcript segment of recorded audio.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Voice analytics

- [SFVoiceAnalytics](sfvoiceanalytics.md): A collection of vocal analysis metrics.
