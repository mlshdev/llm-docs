> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/pasteboardtype/inktext](https://developer.apple.com/documentation/appkit/nspasteboard/pasteboardtype/inktext)

# inkText (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Ink text data.

## Declaration

```swift
static let inkText: NSPasteboard.PasteboardType
```

<a id="Discussion"></a>

## Discussion

In macOS 10.6 and later, use `(NSString *)kUTTypeInkText` instead.

For information on ink text objects, see Using Ink Services in Your Application.

## See Also

### Deprecated

- [filePromise](filepromise.md): Deprecated. Promised files.
- [postScript](postscript.md): Deprecated. Encapsulated PostScript (EPS) code.
- [vCard](vcard.md): Deprecated. VCard data.
- [representedPathExtension](representedpathextension.md): Deprecated. A file type based on the passed pasteboard type.
- [fileContentsType(forPathExtension:)](filecontentstype%28forpathextension_%29.md): Deprecated. Returns a pasteboard type based on the passed file type.
- [fileNameType(forPathExtension:)](filenametype%28forpathextension_%29.md): Deprecated. Returns a pasteboard type based on the passed file type.
- [representedPathExtensions(from:)](representedpathextensions%28from_%29.md): Deprecated. Returns an array of file types based on the passed pasteboard types.

# NSInkTextPboardType (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Ink text data.

## Declaration

```objectivec
extern NSPasteboardType NSInkTextPboardType;
```

<a id="Discussion"></a>

## Discussion

In macOS 10.6 and later, use `(NSString *)kUTTypeInkText` instead.

For information on ink text objects, see Using Ink Services in Your Application.

## See Also

### Deprecated

- [NSFilesPromisePboardType](filepromise.md): Deprecated. Promised files.
- [NSPostScriptPboardType](postscript.md): Deprecated. Encapsulated PostScript (EPS) code.
- [NSVCardPboardType](vcard.md): Deprecated. VCard data.
- [NSGetFileType](representedpathextension.md): Deprecated. A file type based on the passed pasteboard type.
- [NSCreateFileContentsPboardType](filecontentstype%28forpathextension_%29.md): Deprecated. Returns a pasteboard type based on the passed file type.
- [NSCreateFilenamePboardType](filenametype%28forpathextension_%29.md): Deprecated. Returns a pasteboard type based on the passed file type.
- [NSGetFileTypes](representedpathextensions%28from_%29.md): Deprecated. Returns an array of file types based on the passed pasteboard types.
- [NSColorPboardType](../../nscolorpboardtype.md): Deprecated. `NSColor` data.
- [NSFilenamesPboardType](../../nsfilenamespboardtype.md): Deprecated. An array of `NSString` objects designating one or more filenames.
- [NSFontPboardType](../../nsfontpboardtype.md): Deprecated. Font and character information.
- [NSHTMLPboardType](../../nshtmlpboardtype.md): Deprecated. HTML (which an `NSTextView` object can read from, but not write to).
- [NSMultipleTextSelectionPboardType](../../nsmultipletextselectionpboardtype.md): Deprecated. Multiple text selection.
- [NSPDFPboardType](../../nspdfpboardtype.md): Deprecated. PDF data.
- [NSPICTPboardType](../../nspictpboardtype.md): Deprecated. QuickDraw picture data.
- [NSRTFDPboardType](../../nsrtfdpboardtype.md): Deprecated. RTFD formatted file contents.
