> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snclassification](https://developer.apple.com/documentation/soundanalysis/snclassification)

# SNClassification (Swift)

**Framework:** Sound Analysis  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type that pairs a sound classifier’s prediction with its confidence in that prediction.

## Declaration

```swift
class SNClassification
```

<a id="overview"></a>

## Overview

An `SNClassification` represents a single sound classification prediction, and the sound classifier model’s confidence in that prediction.

## Topics

### Inspecting a Classification

- [identifier](snclassification/identifier.md): A prediction label that’s one of the classifications a sound classifier’s underlying model defines.
- [confidence](snclassification/confidence.md): The confidence value the model has in its prediction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Inspecting the Result

- [timeRange](snclassificationresult/timerange.md): The time span that corresponds to the result’s classifications.
- [classifications](snclassificationresult/classifications.md): A sorted array of the request’s top classification candidates.
- [classification(forIdentifier:)](snclassificationresult/classification%28foridentifier_%29.md): Returns the classification for an identifier.

# SNClassification (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type that pairs a sound classifier’s prediction with its confidence in that prediction.

## Declaration

```objectivec
@interface SNClassification : NSObject
```

<a id="overview"></a>

## Overview

An `SNClassification` represents a single sound classification prediction, and the sound classifier model’s confidence in that prediction.

## Topics

### Inspecting a Classification

- [identifier](snclassification/identifier.md): A prediction label that’s one of the classifications a sound classifier’s underlying model defines.
- [confidence](snclassification/confidence.md): The confidence value the model has in its prediction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Inspecting the Result

- [timeRange](snclassificationresult/timerange.md): The time span that corresponds to the result’s classifications.
- [classifications](snclassificationresult/classifications.md): A sorted array of the request’s top classification candidates.
- [classificationForIdentifier:](snclassificationresult/classification%28foridentifier_%29.md): Returns the classification for an identifier.
