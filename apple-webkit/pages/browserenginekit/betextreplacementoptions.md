> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/betextreplacementoptions](https://developer.apple.com/documentation/browserenginekit/betextreplacementoptions)

# BETextReplacementOptions (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Options that determine the way your app processes text in webpages.

## Declaration

```swift
struct BETextReplacementOptions
```

<a id="overview"></a>

## Overview

The [BETextInput](betextinput.md) protocol’s [replaceText(\_:withText:options:completionHandler:)](betextinput/replacetext%28__withtext_options_completionhandler_%29.md) method takes in instance of this structure as an argument.

## Topics

### Identifying text-replacement options

- [addUnderline](betextreplacementoptions/addunderline.md): An option that processes text by adding an underline to its visual style.

### Creating text-replacement options

- [init(rawValue:)](betextreplacementoptions/init%28rawvalue_%29.md): Creates a text-replacement option with the specified underlying value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Replacements and AutoFill

- [BEAutoFillTextSuggestion](beautofilltextsuggestion.md): A suggestion object that provides AutoFill text content for web form fields based on a person’s usage patterns.
- [BETextAlternatives](betextalternatives.md): An object that provides alternative text suggestions for a person’s text selection.
- [BETextDocumentContext](betextdocumentcontext.md): Information about the text surrounding a selection in a document.
- [BETextDocumentRequest](betextdocumentrequest.md): A description of the contextual information that a text document request retrieves.
- [BETextDocumentRequest.Options](betextdocumentrequest/options-swift.struct.md): Options that describe the contextual information for a text document request.
- [BETextSuggestion](betextsuggestion.md): A text suggestion to insert into a document.

# BETextReplacementOptions (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

Options that determine the way your app processes text in webpages.

## Declaration

```objectivec
enum BETextReplacementOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

The [BETextInput](betextinput.md) protocol’s [replaceText:withText:options:completionHandler:](betextinput/replacetext%28__withtext_options_completionhandler_%29.md) method takes in instance of this structure as an argument.

## Topics

### Identifying text-replacement options

- [BETextReplacementOptionsNone](betextreplacementoptions/betextreplacementoptionsnone.md): An option that specifies no processing for the text.
- [BETextReplacementOptionsAddUnderline](betextreplacementoptions/addunderline.md): An option that processes text by adding an underline to its visual style.

## See Also

### Replacements and AutoFill

- [BEAutoFillTextSuggestion](beautofilltextsuggestion.md): A suggestion object that provides AutoFill text content for web form fields based on a person’s usage patterns.
- [BETextAlternatives](betextalternatives.md): An object that provides alternative text suggestions for a person’s text selection.
- [BETextDocumentContext](betextdocumentcontext.md): Information about the text surrounding a selection in a document.
- [BETextDocumentRequest](betextdocumentrequest.md): A description of the contextual information that a text document request retrieves.
- [BETextDocumentRequestOptions](betextdocumentrequest/options-swift.struct.md): Options that describe the contextual information for a text document request.
- [BETextSuggestion](betextsuggestion.md): A text suggestion to insert into a document.
