> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizedtext](https://developer.apple.com/documentation/vision/vnrecognizedtext)

# VNRecognizedText (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Text recognized in an image through a text recognition request.

## Declaration

```swift
class VNRecognizedText
```

<a id="overview"></a>

## Overview

A single [VNRecognizedTextObservation](vnrecognizedtextobservation.md) can contain multiple recognized text objects—one for each candidate.

## Topics

### Creating a Recognized Text Instance

- [init(coder:)](vnrecognizedtext/init%28coder_%29.md)

### Determining Recognized Text

- [string](vnrecognizedtext/string.md): The top candidate for recognized text.
- [confidence](vnrecognizedtext/confidence.md): A normalized confidence score for the text recognition result.

### Locating Recognized Text

- [boundingBox(for:)](vnrecognizedtext/boundingbox%28for_%29.md): Calculates the bounding box around the characters in the range of a string.

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
- [VNRequestRevisionProviding](vnrequestrevisionproviding.md)

## See Also

### Obtaining Recognized Text

- [topCandidates(\_:)](vnrecognizedtextobservation/topcandidates%28__%29.md): Requests the *n* top candidates for a recognized text string.

# VNRecognizedText (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Text recognized in an image through a text recognition request.

## Declaration

```objectivec
@interface VNRecognizedText : NSObject
```

<a id="overview"></a>

## Overview

A single [VNRecognizedTextObservation](vnrecognizedtextobservation.md) can contain multiple recognized text objects—one for each candidate.

## Topics

### Determining Recognized Text

- [string](vnrecognizedtext/string.md): The top candidate for recognized text.
- [confidence](vnrecognizedtext/confidence.md): A normalized confidence score for the text recognition result.

### Locating Recognized Text

- [boundingBoxForRange:error:](vnrecognizedtext/boundingboxforrange_error_.md): Calculates the bounding box around the characters in the range of a string.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [VNRequestRevisionProviding](vnrequestrevisionproviding.md)

## See Also

### Obtaining Recognized Text

- [topCandidates:](vnrecognizedtextobservation/topcandidates%28__%29.md): Requests the *n* top candidates for a recognized text string.
