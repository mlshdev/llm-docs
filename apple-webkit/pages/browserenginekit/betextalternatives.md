> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextalternatives](https://developer.apple.com/documentation/browserenginekit/betextalternatives)

# BETextAlternatives (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

An object that provides alternative text suggestions for a person’s text selection.

## Declaration

```swift
class BETextAlternatives
```

<a id="overview"></a>

## Overview

The [BETextInput](betextinput.md) protocol provides your app an instance of this class as an argument to the  [alternativesForSelectedText()](betextinput/alternativesforselectedtext%28%29.md) callback.

## Topics

### Considering alternative text

- [alternativeStrings](betextalternatives/alternativestrings.md): An array of strings that represent alternatives to the currently selected text.

### Reviewing the source text

- [primaryString](betextalternatives/primarystring.md): The original text that the alternatives derive from.

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
- [BETextDocumentContext](betextdocumentcontext.md): Information about the text surrounding a selection in a document.
- [BETextDocumentRequest](betextdocumentrequest.md): A description of the contextual information that a text document request retrieves.
- [BETextDocumentRequest.Options](betextdocumentrequest/options-swift.struct.md): Options that describe the contextual information for a text document request.
- [BETextSuggestion](betextsuggestion.md): A text suggestion to insert into a document.
- [BETextReplacementOptions](betextreplacementoptions.md): Options that determine the way your app processes text in webpages.

# BETextAlternatives (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

An object that provides alternative text suggestions for a person’s text selection.

## Declaration

```objectivec
@interface BETextAlternatives : NSObject
```

<a id="overview"></a>

## Overview

The [BETextInput](betextinput.md) protocol provides your app an instance of this class as an argument to the  [alternativesForSelectedText](betextinput/alternativesforselectedtext%28%29.md) callback.

## Topics

### Considering alternative text

- [alternativeStrings](betextalternatives/alternativestrings.md): An array of strings that represent alternatives to the currently selected text.

### Reviewing the source text

- [primaryString](betextalternatives/primarystring.md): The original text that the alternatives derive from.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Replacements and AutoFill

- [BEAutoFillTextSuggestion](beautofilltextsuggestion.md): A suggestion object that provides AutoFill text content for web form fields based on a person’s usage patterns.
- [BETextDocumentContext](betextdocumentcontext.md): Information about the text surrounding a selection in a document.
- [BETextDocumentRequest](betextdocumentrequest.md): A description of the contextual information that a text document request retrieves.
- [BETextDocumentRequestOptions](betextdocumentrequest/options-swift.struct.md): Options that describe the contextual information for a text document request.
- [BETextSuggestion](betextsuggestion.md): A text suggestion to insert into a document.
- [BETextReplacementOptions](betextreplacementoptions.md): Options that determine the way your app processes text in webpages.
