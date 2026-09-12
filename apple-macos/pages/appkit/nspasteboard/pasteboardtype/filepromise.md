> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/pasteboardtype/filepromise](https://developer.apple.com/documentation/appkit/nspasteboard/pasteboardtype/filepromise)

# filePromise (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Promised files.

## Declaration

```swift
static let filePromise: NSPasteboard.PasteboardType
```

<a id="Discussion"></a>

## Discussion

In macOS 10.6 and later, use `(NSString *)kPasteboardTypeFileURLPromise` instead.

For more information, see [Supporting Drag and Drop Through File Promises](../../supporting-drag-and-drop-through-file-promises.md).

## See Also

### Deprecated

- [inkText](inktext.md): Deprecated. Ink text data.
- [postScript](postscript.md): Deprecated. Encapsulated PostScript (EPS) code.
- [vCard](vcard.md): Deprecated. VCard data.
- [representedPathExtension](representedpathextension.md): Deprecated. A file type based on the passed pasteboard type.
- [fileContentsType(forPathExtension:)](filecontentstype%28forpathextension_%29.md): Deprecated. Returns a pasteboard type based on the passed file type.
- [fileNameType(forPathExtension:)](filenametype%28forpathextension_%29.md): Deprecated. Returns a pasteboard type based on the passed file type.
- [representedPathExtensions(from:)](representedpathextensions%28from_%29.md): Deprecated. Returns an array of file types based on the passed pasteboard types.

# NSFilesPromisePboardType (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Promised files.

## Declaration

```objectivec
extern NSPasteboardType NSFilesPromisePboardType;
```

<a id="Discussion"></a>

## Discussion

In macOS 10.6 and later, use `(NSString *)kPasteboardTypeFileURLPromise` instead.

For more information, see [Supporting Drag and Drop Through File Promises](../../supporting-drag-and-drop-through-file-promises.md).

## See Also

### Deprecated

- [NSInkTextPboardType](inktext.md): Deprecated. Ink text data.
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
