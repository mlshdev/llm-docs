> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpsconvertercallbacks](https://developer.apple.com/documentation/coregraphics/cgpsconvertercallbacks)

# CGPSConverterCallbacks (Swift)

**Framework:** Core Graphics  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A structure for holding the callbacks provided when you create a PostScript converter object.

## Declaration

```swift
struct CGPSConverterCallbacks
```

## Topics

### Initializers

- [init()](cgpsconvertercallbacks/init%28%29.md)
- [init(version:beginDocument:endDocument:beginPage:endPage:noteProgress:noteMessage:releaseInfo:)](cgpsconvertercallbacks/init%28version_begindocument_enddocument_beginpage_endpage_noteprogress_notemessage_releaseinfo_%29.md)

### Instance Properties

- [beginDocument](cgpsconvertercallbacks/begindocument.md): The callback called at the beginning of the conversion of the PostScript document, or `NULL`.
- [beginPage](cgpsconvertercallbacks/beginpage.md): The callback called at the start of the conversion of each page in the PostScript document, or `NULL`.
- [endDocument](cgpsconvertercallbacks/enddocument.md): The callback called at the end of conversion of the PostScript document, or `NULL`.
- [endPage](cgpsconvertercallbacks/endpage.md): The callback called at the end of the conversion of each page in the PostScript document, or `NULL`.
- [noteMessage](cgpsconvertercallbacks/notemessage.md): The callback called to pass any messages that might result during the conversion, or `NULL`.
- [noteProgress](cgpsconvertercallbacks/noteprogress.md): The callback called periodically during the conversion to indicate that conversion is proceeding, or `NULL`.
- [releaseInfo](cgpsconvertercallbacks/releaseinfo.md): The callback called when the converter is deallocated, or `NULL`.
- [version](cgpsconvertercallbacks/version.md): The version number of the structure passed in as a parameter to the converter creation functions. The structure defined below is version `0`.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# CGPSConverterCallbacks (Objective-C)

**Framework:** Core Graphics  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A structure for holding the callbacks provided when you create a PostScript converter object.

## Declaration

```objectivec
struct CGPSConverterCallbacks;
```

## Topics

### Instance Properties

- [beginDocument](cgpsconvertercallbacks/begindocument.md): The callback called at the beginning of the conversion of the PostScript document, or `NULL`.
- [beginPage](cgpsconvertercallbacks/beginpage.md): The callback called at the start of the conversion of each page in the PostScript document, or `NULL`.
- [endDocument](cgpsconvertercallbacks/enddocument.md): The callback called at the end of conversion of the PostScript document, or `NULL`.
- [endPage](cgpsconvertercallbacks/endpage.md): The callback called at the end of the conversion of each page in the PostScript document, or `NULL`.
- [noteMessage](cgpsconvertercallbacks/notemessage.md): The callback called to pass any messages that might result during the conversion, or `NULL`.
- [noteProgress](cgpsconvertercallbacks/noteprogress.md): The callback called periodically during the conversion to indicate that conversion is proceeding, or `NULL`.
- [releaseInfo](cgpsconvertercallbacks/releaseinfo.md): The callback called when the converter is deallocated, or `NULL`.
- [version](cgpsconvertercallbacks/version.md): The version number of the structure passed in as a parameter to the converter creation functions. The structure defined below is version `0`.

## See Also

### Callbacks

- [CGPSConverterBeginDocumentCallback](cgpsconverterbegindocumentcallback.md): Performs custom tasks at the beginning of a PostScript conversion process.
- [CGPSConverterEndDocumentCallback](cgpsconverterenddocumentcallback.md): Performs custom tasks at the end of a PostScript conversion process.
- [CGPSConverterBeginPageCallback](cgpsconverterbeginpagecallback.md): Performs custom tasks at the beginning of each page in a PostScript conversion process.
- [CGPSConverterEndPageCallback](cgpsconverterendpagecallback.md): Performs custom tasks at the end of each page of a PostScript conversion process.
- [CGPSConverterProgressCallback](cgpsconverterprogresscallback.md): Reports progress periodically during a PostScript conversion process.
- [CGPSConverterMessageCallback](cgpsconvertermessagecallback.md): Passes messages generated during a PostScript conversion process.
- [CGPSConverterReleaseInfoCallback](cgpsconverterreleaseinfocallback.md): Performs custom tasks when a PostScript converter is released.
