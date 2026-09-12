> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpsconvertercallbacks/releaseinfo](https://developer.apple.com/documentation/coregraphics/cgpsconvertercallbacks/releaseinfo)

# releaseInfo (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The callback called when the converter is deallocated, or `NULL`.

## Declaration

```swift
var releaseInfo: CGPSConverterReleaseInfoCallback?
```

## See Also

### Instance Properties

- [beginDocument](begindocument.md): The callback called at the beginning of the conversion of the PostScript document, or `NULL`.
- [beginPage](beginpage.md): The callback called at the start of the conversion of each page in the PostScript document, or `NULL`.
- [endDocument](enddocument.md): The callback called at the end of conversion of the PostScript document, or `NULL`.
- [endPage](endpage.md): The callback called at the end of the conversion of each page in the PostScript document, or `NULL`.
- [noteMessage](notemessage.md): The callback called to pass any messages that might result during the conversion, or `NULL`.
- [noteProgress](noteprogress.md): The callback called periodically during the conversion to indicate that conversion is proceeding, or `NULL`.
- [version](version.md): The version number of the structure passed in as a parameter to the converter creation functions. The structure defined below is version `0`.

# releaseInfo (Objective-C)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The callback called when the converter is deallocated, or `NULL`.

## Declaration

```objectivec
CGPSConverterReleaseInfoCallback releaseInfo;
```

## See Also

### Instance Properties

- [beginDocument](begindocument.md): The callback called at the beginning of the conversion of the PostScript document, or `NULL`.
- [beginPage](beginpage.md): The callback called at the start of the conversion of each page in the PostScript document, or `NULL`.
- [endDocument](enddocument.md): The callback called at the end of conversion of the PostScript document, or `NULL`.
- [endPage](endpage.md): The callback called at the end of the conversion of each page in the PostScript document, or `NULL`.
- [noteMessage](notemessage.md): The callback called to pass any messages that might result during the conversion, or `NULL`.
- [noteProgress](noteprogress.md): The callback called periodically during the conversion to indicate that conversion is proceeding, or `NULL`.
- [version](version.md): The version number of the structure passed in as a parameter to the converter creation functions. The structure defined below is version `0`.
