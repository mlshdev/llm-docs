> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextsuggestion](https://developer.apple.com/documentation/browserenginekit/betextsuggestion)

# BETextSuggestion (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

A text suggestion to insert into a document.

## Declaration

```swift
class BETextSuggestion
```

## Mentioned In

- [Integrating custom browser text views with UIKit](integrating-custom-browser-text-views-with-uikit.md)

<a id="overview"></a>

## Overview

Don’t create instances of this class. The system provides instances to your app through a text view’s [insert(\_:)](betextinput/insert%28__%29-5iryn.md) method when it suggests text insertions, for example, an AutoFill suggestion.

## Topics

### Creating a text suggestion

- [init(inputText:)](betextsuggestion/init%28inputtext_%29.md): Initializes a new text suggestion with the given input text.

### Getting the suggested text

- [inputText](betextsuggestion/inputtext.md): Text that will be inserted into the document when the user chooses the suggestion.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [BEAutoFillTextSuggestion](beautofilltextsuggestion.md)

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
- [BETextDocumentRequest](betextdocumentrequest.md): A description of the contextual information that a text document request retrieves.
- [BETextDocumentRequest.Options](betextdocumentrequest/options-swift.struct.md): Options that describe the contextual information for a text document request.
- [BETextReplacementOptions](betextreplacementoptions.md): Options that determine the way your app processes text in webpages.

# BETextSuggestion (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

A text suggestion to insert into a document.

## Declaration

```objectivec
@interface BETextSuggestion : NSObject
```

## Mentioned In

- [Integrating custom browser text views with UIKit](integrating-custom-browser-text-views-with-uikit.md)

<a id="overview"></a>

## Overview

Don’t create instances of this class. The system provides instances to your app through a text view’s [insertTextSuggestion:](betextinput/insert%28__%29-5iryn.md) method when it suggests text insertions, for example, an AutoFill suggestion.

## Topics

### Creating a text suggestion

- [initWithInputText:](betextsuggestion/init%28inputtext_%29.md): Initializes a new text suggestion with the given input text.

### Getting the suggested text

- [inputText](betextsuggestion/inputtext.md): Text that will be inserted into the document when the user chooses the suggestion.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [BEAutoFillTextSuggestion](beautofilltextsuggestion.md)

## See Also

### Replacements and AutoFill

- [BEAutoFillTextSuggestion](beautofilltextsuggestion.md): A suggestion object that provides AutoFill text content for web form fields based on a person’s usage patterns.
- [BETextAlternatives](betextalternatives.md): An object that provides alternative text suggestions for a person’s text selection.
- [BETextDocumentContext](betextdocumentcontext.md): Information about the text surrounding a selection in a document.
- [BETextDocumentRequest](betextdocumentrequest.md): A description of the contextual information that a text document request retrieves.
- [BETextDocumentRequestOptions](betextdocumentrequest/options-swift.struct.md): Options that describe the contextual information for a text document request.
- [BETextReplacementOptions](betextreplacementoptions.md): Options that determine the way your app processes text in webpages.
