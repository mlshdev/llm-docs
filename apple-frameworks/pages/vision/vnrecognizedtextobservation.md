> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizedtextobservation](https://developer.apple.com/documentation/vision/vnrecognizedtextobservation)

# VNRecognizedTextObservation (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A request that detects and recognizes regions of text in an image.

## Declaration

```swift
class VNRecognizedTextObservation
```

## Mentioned In

- [Recognizing Text in Images](recognizing-text-in-images.md)

<a id="overview"></a>

## Overview

This type of observation results from a [VNRecognizeTextRequest](vnrecognizetextrequest.md). It contains information about both the location and content of text and glyphs that Vision recognized in the input image.

## Topics

### Obtaining Recognized Text

- [topCandidates(\_:)](vnrecognizedtextobservation/topcandidates%28__%29.md): Requests the *n* top candidates for a recognized text string.
- [VNRecognizedText](vnrecognizedtext.md): Text recognized in an image through a text recognition request.

## Relationships

### Inherits From

- [VNRectangleObservation](vnrectangleobservation.md)

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

### Text recognition

- [Recognizing Text in Images](recognizing-text-in-images.md): Add text-recognition features to your app using the Vision framework.
- [Structuring recognized text on a document](../visionkit/structuring-recognized-text-on-a-document.md): Detect, recognize, and structure text on a business card or receipt using Vision and VisionKit.
- [Extracting phone numbers from text in images](extracting-phone-numbers-from-text-in-images.md): Analyze and filter phone numbers from text in live capture by using Vision.
- [Locating and displaying recognized text](locating-and-displaying-recognized-text.md): Perform text recognition on a photo using the Vision framework’s text-recognition request.
- [VNRecognizeTextRequest](vnrecognizetextrequest.md): An image-analysis request that finds and recognizes text in an image.

# VNRecognizedTextObservation (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A request that detects and recognizes regions of text in an image.

## Declaration

```objectivec
@interface VNRecognizedTextObservation : VNRectangleObservation
```

## Mentioned In

- [Recognizing Text in Images](recognizing-text-in-images.md)

<a id="overview"></a>

## Overview

This type of observation results from a [VNRecognizeTextRequest](vnrecognizetextrequest.md). It contains information about both the location and content of text and glyphs that Vision recognized in the input image.

## Topics

### Obtaining Recognized Text

- [topCandidates:](vnrecognizedtextobservation/topcandidates%28__%29.md): Requests the *n* top candidates for a recognized text string.
- [VNRecognizedText](vnrecognizedtext.md): Text recognized in an image through a text recognition request.

## Relationships

### Inherits From

- [VNRectangleObservation](vnrectangleobservation.md)

## See Also

### Text recognition

- [Recognizing Text in Images](recognizing-text-in-images.md): Add text-recognition features to your app using the Vision framework.
- [Structuring recognized text on a document](../visionkit/structuring-recognized-text-on-a-document.md): Detect, recognize, and structure text on a business card or receipt using Vision and VisionKit.
- [VNRecognizeTextRequest](vnrecognizetextrequest.md): An image-analysis request that finds and recognizes text in an image.
