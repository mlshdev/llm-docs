> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizeanimalsrequest](https://developer.apple.com/documentation/vision/vnrecognizeanimalsrequest)

# VNRecognizeAnimalsRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A request that recognizes animals in an image.

## Declaration

```swift
class VNRecognizeAnimalsRequest
```

<a id="overview"></a>

## Overview

Use the [knownAnimalIdentifiers(forRevision:)](vnrecognizeanimalsrequest/knownanimalidentifiers%28forrevision_%29.md) method to determine which animals the request supports.

## Topics

### Accessing the Results

- [results](vnrecognizeanimalsrequest/results.md): The results of the request to recognize animals.

### Identifying Animals

- [supportedIdentifiers()](vnrecognizeanimalsrequest/supportedidentifiers%28%29.md): Returns the identifiers of the animals that the request detects.
- [VNAnimalIdentifier](vnanimalidentifier.md): An animal identifier string.
- [knownAnimalIdentifiers(forRevision:)](vnrecognizeanimalsrequest/knownanimalidentifiers%28forrevision_%29.md): Deprecated. Returns a list of animal identifiers the recognition algorithm supports for the specified revision.

### Identifying Request Revisions

- [VNRecognizeAnimalsRequestRevision2](vnrecognizeanimalsrequestrevision2.md): A constant for specifying revision 2 of the animal recognition request.
- [VNRecognizeAnimalsRequestRevision1](vnrecognizeanimalsrequestrevision1.md): A constant for specifying revision 1 of the animal recognition request.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# VNRecognizeAnimalsRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A request that recognizes animals in an image.

## Declaration

```objectivec
@interface VNRecognizeAnimalsRequest : VNImageBasedRequest
```

<a id="overview"></a>

## Overview

Use the [knownAnimalIdentifiersForRevision:error:](vnrecognizeanimalsrequest/knownanimalidentifiers%28forrevision_%29.md) method to determine which animals the request supports.

## Topics

### Accessing the Results

- [results](vnrecognizeanimalsrequest/results.md): The results of the request to recognize animals.

### Identifying Animals

- [supportedIdentifiersAndReturnError:](vnrecognizeanimalsrequest/supportedidentifiers%28%29.md): Returns the identifiers of the animals that the request detects.
- [VNAnimalIdentifier](vnanimalidentifier.md): An animal identifier string.
- [knownAnimalIdentifiersForRevision:error:](vnrecognizeanimalsrequest/knownanimalidentifiers%28forrevision_%29.md): Deprecated. Returns a list of animal identifiers the recognition algorithm supports for the specified revision.

### Identifying Request Revisions

- [VNRecognizeAnimalsRequestRevision2](vnrecognizeanimalsrequestrevision2.md): A constant for specifying revision 2 of the animal recognition request.
- [VNRecognizeAnimalsRequestRevision1](vnrecognizeanimalsrequestrevision1.md): A constant for specifying revision 1 of the animal recognition request.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)
