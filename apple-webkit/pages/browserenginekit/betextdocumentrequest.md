> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextdocumentrequest](https://developer.apple.com/documentation/browserenginekit/betextdocumentrequest)

# BETextDocumentRequest (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A description of the contextual information that a text document request retrieves.

## Declaration

```swift
class BETextDocumentRequest
```

<a id="overview"></a>

## Overview

The [BETextInput](betextinput.md) protocol’s [requestDocumentContext(\_:completionHandler:)](betextinput/requestdocumentcontext%28__completionhandler_%29.md) and [selectPosition(at:for:completionHandler:)](betextinput/selectposition%28at_for_completionhandler_%29.md) methods take an instance of this class as an argument.

## Topics

### Scoping the document request

- [surroundingGranularity](betextdocumentrequest/surroundinggranularity.md): The unit of measurement for the document request’s scope.
- [granularityCount](betextdocumentrequest/granularitycount.md): A count of granularity units that defines the scope of the document request.

### Specifying the requested information

- [options](betextdocumentrequest/options-swift.property.md): A set of options that describes the contextual information the system requests from the document.
- [BETextDocumentRequest.Options](betextdocumentrequest/options-swift.struct.md): Options that describe the contextual information for a text document request.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Replacements and AutoFill

- [BEAutoFillTextSuggestion](beautofilltextsuggestion.md): A suggestion object that provides AutoFill text content for web form fields based on a person’s usage patterns.
- [BETextAlternatives](betextalternatives.md): An object that provides alternative text suggestions for a person’s text selection.
- [BETextDocumentContext](betextdocumentcontext.md): Information about the text surrounding a selection in a document.
- [BETextDocumentRequest.Options](betextdocumentrequest/options-swift.struct.md): Options that describe the contextual information for a text document request.
- [BETextSuggestion](betextsuggestion.md): A text suggestion to insert into a document.
- [BETextReplacementOptions](betextreplacementoptions.md): Options that determine the way your app processes text in webpages.

# BETextDocumentRequest (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A description of the contextual information that a text document request retrieves.

## Declaration

```objectivec
@interface BETextDocumentRequest : NSObject
```

<a id="overview"></a>

## Overview

The [BETextInput](betextinput.md) protocol’s [requestDocumentContext:completionHandler:](betextinput/requestdocumentcontext%28__completionhandler_%29.md) and [selectPositionAtPoint:withContextRequest:completionHandler:](betextinput/selectposition%28at_for_completionhandler_%29.md) methods take an instance of this class as an argument.

## Topics

### Scoping the document request

- [surroundingGranularity](betextdocumentrequest/surroundinggranularity.md): The unit of measurement for the document request’s scope.
- [granularityCount](betextdocumentrequest/granularitycount.md): A count of granularity units that defines the scope of the document request.

### Specifying the requested information

- [options](betextdocumentrequest/options-swift.property.md): A set of options that describes the contextual information the system requests from the document.
- [BETextDocumentRequestOptions](betextdocumentrequest/options-swift.struct.md): Options that describe the contextual information for a text document request.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Replacements and AutoFill

- [BEAutoFillTextSuggestion](beautofilltextsuggestion.md): A suggestion object that provides AutoFill text content for web form fields based on a person’s usage patterns.
- [BETextAlternatives](betextalternatives.md): An object that provides alternative text suggestions for a person’s text selection.
- [BETextDocumentContext](betextdocumentcontext.md): Information about the text surrounding a selection in a document.
- [BETextDocumentRequestOptions](betextdocumentrequest/options-swift.struct.md): Options that describe the contextual information for a text document request.
- [BETextSuggestion](betextsuggestion.md): A text suggestion to insert into a document.
- [BETextReplacementOptions](betextreplacementoptions.md): Options that determine the way your app processes text in webpages.
