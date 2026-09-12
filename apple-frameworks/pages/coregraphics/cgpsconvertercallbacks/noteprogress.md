> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpsconvertercallbacks/noteprogress](https://developer.apple.com/documentation/coregraphics/cgpsconvertercallbacks/noteprogress)

# noteProgress (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The callback called periodically during the conversion to indicate that conversion is proceeding, or `NULL`.

## Declaration

```swift
var noteProgress: CGPSConverterProgressCallback?
```

## See Also

### Instance Properties

- [beginDocument](begindocument.md): The callback called at the beginning of the conversion of the PostScript document, or `NULL`.
- [beginPage](beginpage.md): The callback called at the start of the conversion of each page in the PostScript document, or `NULL`.
- [endDocument](enddocument.md): The callback called at the end of conversion of the PostScript document, or `NULL`.
- [endPage](endpage.md): The callback called at the end of the conversion of each page in the PostScript document, or `NULL`.
- [noteMessage](notemessage.md): The callback called to pass any messages that might result during the conversion, or `NULL`.
- [releaseInfo](releaseinfo.md): The callback called when the converter is deallocated, or `NULL`.
- [version](version.md): The version number of the structure passed in as a parameter to the converter creation functions. The structure defined below is version `0`.

# noteProgress (Objective-C)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The callback called periodically during the conversion to indicate that conversion is proceeding, or `NULL`.

## Declaration

```objectivec
CGPSConverterProgressCallback noteProgress;
```

## See Also

### Instance Properties

- [beginDocument](begindocument.md): The callback called at the beginning of the conversion of the PostScript document, or `NULL`.
- [beginPage](beginpage.md): The callback called at the start of the conversion of each page in the PostScript document, or `NULL`.
- [endDocument](enddocument.md): The callback called at the end of conversion of the PostScript document, or `NULL`.
- [endPage](endpage.md): The callback called at the end of the conversion of each page in the PostScript document, or `NULL`.
- [noteMessage](notemessage.md): The callback called to pass any messages that might result during the conversion, or `NULL`.
- [releaseInfo](releaseinfo.md): The callback called when the converter is deallocated, or `NULL`.
- [version](version.md): The version number of the structure passed in as a parameter to the converter creation functions. The structure defined below is version `0`.
