> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspictpboardtype](https://developer.apple.com/documentation/appkit/nspictpboardtype)

# NSPICTPboardType

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.6)

QuickDraw picture data.

## Declaration

```objectivec
extern NSPasteboardType NSPICTPboardType;
```

<a id="Discussion"></a>

## Discussion

The PICT format was formally deprecated in OS X v10.4 along with QuickDraw. You should not be explicitly providing or looking for PICT data on the pasteboard.

To aid in this deprecation, if PICT is the only image type on the pasteboard, as is sometimes the case when copying images from 32-bit Carbon applications, a translated image type will be automatically reported and provided by `NSPasteboard`. The translated type is added to the types array ahead of PICT so that the deprecated PICT format is not the preferred format. In addition, when an application provides image data to `NSPasteboard`, the Carbon Pasteboard Manager will automatically make a PICT translation available to 32-bit Carbon applications.

Although `NSPICTPboardType`, and its UTI equivalent `kUTTypePICT`, will appear in a pasteboard’s type array retrieved from the existing `NSPasteboard` API, it may cease to be reported in future releases.

## See Also

### Deprecated

- [NSFilesPromisePboardType](nspasteboard/pasteboardtype/filepromise.md): Deprecated. Promised files.
- [NSInkTextPboardType](nspasteboard/pasteboardtype/inktext.md): Deprecated. Ink text data.
- [NSPostScriptPboardType](nspasteboard/pasteboardtype/postscript.md): Deprecated. Encapsulated PostScript (EPS) code.
- [NSVCardPboardType](nspasteboard/pasteboardtype/vcard.md): Deprecated. VCard data.
- [NSGetFileType](nspasteboard/pasteboardtype/representedpathextension.md): Deprecated. A file type based on the passed pasteboard type.
- [NSCreateFileContentsPboardType](nspasteboard/pasteboardtype/filecontentstype%28forpathextension_%29.md): Deprecated. Returns a pasteboard type based on the passed file type.
- [NSCreateFilenamePboardType](nspasteboard/pasteboardtype/filenametype%28forpathextension_%29.md): Deprecated. Returns a pasteboard type based on the passed file type.
- [NSGetFileTypes](nspasteboard/pasteboardtype/representedpathextensions%28from_%29.md): Deprecated. Returns an array of file types based on the passed pasteboard types.
- [NSColorPboardType](nscolorpboardtype.md): Deprecated. `NSColor` data.
- [NSFilenamesPboardType](nsfilenamespboardtype.md): Deprecated. An array of `NSString` objects designating one or more filenames.
- [NSFontPboardType](nsfontpboardtype.md): Deprecated. Font and character information.
- [NSHTMLPboardType](nshtmlpboardtype.md): Deprecated. HTML (which an `NSTextView` object can read from, but not write to).
- [NSMultipleTextSelectionPboardType](nsmultipletextselectionpboardtype.md): Deprecated. Multiple text selection.
- [NSPDFPboardType](nspdfpboardtype.md): Deprecated. PDF data.
- [NSRTFDPboardType](nsrtfdpboardtype.md): Deprecated. RTFD formatted file contents.
