> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizetextrequest](https://developer.apple.com/documentation/vision/vnrecognizetextrequest)

# VNRecognizeTextRequest (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An image-analysis request that finds and recognizes text in an image.

## Declaration

```swift
class VNRecognizeTextRequest
```

## Mentioned In

- [Recognizing Text in Images](recognizing-text-in-images.md)

<a id="overview"></a>

## Overview

By default, a text recognition request first locates all possible glyphs or characters in the input image, and then analyzes each string. To specify or limit the languages to find in the request, set the [recognitionLanguages](vnrecognizetextrequest/recognitionlanguages.md) property to an array that contains the names of the languages of text you want to recognize. Vision returns the result of this request in a [VNRecognizedTextObservation](vnrecognizedtextobservation.md) object.

## Topics

### Customizing Recognition Constraints

- [minimumTextHeight](vnrecognizetextrequest/minimumtextheight.md): The minimum height, relative to the image height, of the text to recognize.
- [recognitionLevel](vnrecognizetextrequest/recognitionlevel.md): A value that determines whether the request prioritizes accuracy or speed in text recognition.
- [VNRequestTextRecognitionLevel](vnrequesttextrecognitionlevel.md): Constants that identify the performance and accuracy of the text recognition.

### Accessing the Results

- [results](vnrecognizetextrequest/results.md): The results of the text recognition request.

### Specifying the Language

- [automaticallyDetectsLanguage](vnrecognizetextrequest/automaticallydetectslanguage.md): A Boolean value that indicates whether to attempt detecting the language to use the appropriate model for recognition and language correction.
- [recognitionLanguages](vnrecognizetextrequest/recognitionlanguages.md): An array of languages to detect, in priority order.
- [usesLanguageCorrection](vnrecognizetextrequest/useslanguagecorrection.md): A Boolean value that indicates whether the request applies language correction during the recognition process.
- [customWords](vnrecognizetextrequest/customwords.md): An array of strings to supplement the recognized languages at the word-recognition stage.
- [supportedRecognitionLanguages()](vnrecognizetextrequest/supportedrecognitionlanguages%28%29.md): Returns the identifiers of the languages that the request supports.
- [supportedRecognitionLanguages(for:revision:)](vnrecognizetextrequest/supportedrecognitionlanguages%28for_revision_%29.md): Deprecated. Requests a list of languages that the specified revision recognizes.

### Identifying Request Revisions

- [VNRecognizeTextRequestRevision3](vnrecognizetextrequestrevision3.md): A constant for specifying revision 3 of the text recognition request.
- [VNRecognizeTextRequestRevision2](vnrecognizetextrequestrevision2.md): Deprecated. A constant for specifying revision 2 of the text recognition request.
- [VNRecognizeTextRequestRevision1](vnrecognizetextrequestrevision1.md): Deprecated. A constant for specifying revision 1 of the text recognition request.

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
- [VNRequestProgressProviding](vnrequestprogressproviding.md)

## See Also

### Text recognition

- [Recognizing Text in Images](recognizing-text-in-images.md): Add text-recognition features to your app using the Vision framework.
- [Structuring recognized text on a document](../visionkit/structuring-recognized-text-on-a-document.md): Detect, recognize, and structure text on a business card or receipt using Vision and VisionKit.
- [Extracting phone numbers from text in images](extracting-phone-numbers-from-text-in-images.md): Analyze and filter phone numbers from text in live capture by using Vision.
- [Locating and displaying recognized text](locating-and-displaying-recognized-text.md): Perform text recognition on a photo using the Vision framework’s text-recognition request.
- [VNRecognizedTextObservation](vnrecognizedtextobservation.md): A request that detects and recognizes regions of text in an image.

# VNRecognizeTextRequest (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

An image-analysis request that finds and recognizes text in an image.

## Declaration

```objectivec
@interface VNRecognizeTextRequest : VNImageBasedRequest
```

## Mentioned In

- [Recognizing Text in Images](recognizing-text-in-images.md)

<a id="overview"></a>

## Overview

By default, a text recognition request first locates all possible glyphs or characters in the input image, and then analyzes each string. To specify or limit the languages to find in the request, set the [recognitionLanguages](vnrecognizetextrequest/recognitionlanguages.md) property to an array that contains the names of the languages of text you want to recognize. Vision returns the result of this request in a [VNRecognizedTextObservation](vnrecognizedtextobservation.md) object.

## Topics

### Customizing Recognition Constraints

- [minimumTextHeight](vnrecognizetextrequest/minimumtextheight.md): The minimum height, relative to the image height, of the text to recognize.
- [recognitionLevel](vnrecognizetextrequest/recognitionlevel.md): A value that determines whether the request prioritizes accuracy or speed in text recognition.
- [VNRequestTextRecognitionLevel](vnrequesttextrecognitionlevel.md): Constants that identify the performance and accuracy of the text recognition.

### Accessing the Results

- [results](vnrecognizetextrequest/results.md): The results of the text recognition request.

### Specifying the Language

- [automaticallyDetectsLanguage](vnrecognizetextrequest/automaticallydetectslanguage.md): A Boolean value that indicates whether to attempt detecting the language to use the appropriate model for recognition and language correction.
- [recognitionLanguages](vnrecognizetextrequest/recognitionlanguages.md): An array of languages to detect, in priority order.
- [usesLanguageCorrection](vnrecognizetextrequest/useslanguagecorrection.md): A Boolean value that indicates whether the request applies language correction during the recognition process.
- [customWords](vnrecognizetextrequest/customwords.md): An array of strings to supplement the recognized languages at the word-recognition stage.
- [supportedRecognitionLanguagesAndReturnError:](vnrecognizetextrequest/supportedrecognitionlanguages%28%29.md): Returns the identifiers of the languages that the request supports.
- [supportedRecognitionLanguagesForTextRecognitionLevel:revision:error:](vnrecognizetextrequest/supportedrecognitionlanguages%28for_revision_%29.md): Deprecated. Requests a list of languages that the specified revision recognizes.

### Identifying Request Revisions

- [VNRecognizeTextRequestRevision3](vnrecognizetextrequestrevision3.md): A constant for specifying revision 3 of the text recognition request.
- [VNRecognizeTextRequestRevision2](vnrecognizetextrequestrevision2.md): Deprecated. A constant for specifying revision 2 of the text recognition request.
- [VNRecognizeTextRequestRevision1](vnrecognizetextrequestrevision1.md): Deprecated. A constant for specifying revision 1 of the text recognition request.

## Relationships

### Inherits From

- [VNImageBasedRequest](vnimagebasedrequest.md)

### Conforms To

- [VNRequestProgressProviding](vnrequestprogressproviding.md)

## See Also

### Text recognition

- [Recognizing Text in Images](recognizing-text-in-images.md): Add text-recognition features to your app using the Vision framework.
- [Structuring recognized text on a document](../visionkit/structuring-recognized-text-on-a-document.md): Detect, recognize, and structure text on a business card or receipt using Vision and VisionKit.
- [VNRecognizedTextObservation](vnrecognizedtextobservation.md): A request that detects and recognizes regions of text in an image.
