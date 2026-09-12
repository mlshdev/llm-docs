> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstringpboardtype](https://developer.apple.com/documentation/appkit/nsstringpboardtype)

# NSStringPboardType

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.14)

`NSString` data.

## Declaration

```objectivec
extern NSPasteboardType NSStringPboardType;
```

<a id="discussion"></a>

## Discussion

> **Deprecated**

> In apps that adopt App Sandbox, use an [NSURL](https://developer.apple.com/documentation/foundation/nsurl) object, a bookmark, or a filename pasteboard type instead. In a nonsandboxed app, you can also use the [NSPasteboardTypeString](nspasteboard/pasteboardtype/string.md) pasteboard type.

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
- [NSPICTPboardType](nspictpboardtype.md): Deprecated. QuickDraw picture data.
