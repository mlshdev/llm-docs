> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/core_printing/document_format_strings

# Document Format Strings

**Interface language:** Objective-C

**Framework:** Application Services

Constants that specify the document format for a print job.

## Declaration

```objectivec
#define kPMDocumentFormatDefault
   CFSTR("com.apple.documentformat.default")
#define kPMDocumentFormatPDF
   CFSTR("application/pdf")
#define kPMDocumentFormatPICT
   CFSTR("application/vnd.apple.printing-pict")
#define kPMDocumentFormatPICTPS
   CFSTR("application/vnd.apple.printing-pict-ps")
#define kPMDocumentFormatPostScript
   CFSTR("application/postscript")
```

## Topics

### Constants

- [kPMDocumentFormatDefault](document_format_strings/kpmdocumentformatdefault.md): Specifies the default format for the printing system. In macOS, the default format is PDF.
- [kPMDocumentFormatPDF](document_format_strings/kpmdocumentformatpdf.md): Specifies PDF.
- [kPMDocumentFormatPICT](document_format_strings/kpmdocumentformatpict.md): Specifies PICT format.
- [kPMDocumentFormatPICTPS](document_format_strings/kpmdocumentformatpictps.md): Specifies PICT format with embedded PostScript.
- [kPMDocumentFormatPostScript](document_format_strings/kpmdocumentformatpostscript.md): Specifies PostScript format.
