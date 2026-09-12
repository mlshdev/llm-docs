> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnimageaestheticsscoresobservation](https://developer.apple.com/documentation/vision/vnimageaestheticsscoresobservation)

# VNImageAestheticsScoresObservation (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An object that represents the overall score of aesthetic attributes for an image.

## Declaration

```swift
class VNImageAestheticsScoresObservation
```

## Topics

### Parsing Observation Content

- [overallScore](vnimageaestheticsscoresobservation/overallscore.md): A score which incorporates aesthetic score, failure score, and utility labels.
- [isUtility](vnimageaestheticsscoresobservation/isutility.md): A Boolean value that represents images that are not necessarily of poor image quality, but may not have memorable or exciting content.

## Relationships

### Inherits From

- [VNObservation](vnobservation.md)

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
- [VNRequestRevisionProviding](vnrequestrevisionproviding.md)

## See Also

### Accessing the results

- [results](vncalculateimageaestheticsscoresrequest/results.md): The results of the aesthetics request.

# VNImageAestheticsScoresObservation (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An object that represents the overall score of aesthetic attributes for an image.

## Declaration

```objectivec
@interface VNImageAestheticsScoresObservation : VNObservation
```

## Topics

### Parsing Observation Content

- [overallScore](vnimageaestheticsscoresobservation/overallscore.md): A score which incorporates aesthetic score, failure score, and utility labels.
- [isUtility](vnimageaestheticsscoresobservation/isutility.md): A Boolean value that represents images that are not necessarily of poor image quality, but may not have memorable or exciting content.

## Relationships

### Inherits From

- [VNObservation](vnobservation.md)

## See Also

### Accessing the results

- [results](vncalculateimageaestheticsscoresrequest/results.md): The results of the aesthetics request.
