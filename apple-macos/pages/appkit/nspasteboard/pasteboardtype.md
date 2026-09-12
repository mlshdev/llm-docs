> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/pasteboardtype](https://developer.apple.com/documentation/appkit/nspasteboard/pasteboardtype)

# NSPasteboard.PasteboardType (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

The supported pasteboard types.

## Declaration

```swift
struct PasteboardType
```

## Topics

### Pasteboard Types

- [URL](pasteboardtype/url.md): URL data for one file or resource.
- [collaborationMetadata](pasteboardtype/collaborationmetadata.md): An object you use for conveying data during a collaboration.
- [color](pasteboardtype/color.md): Color data.
- [fileContents](pasteboardtype/filecontents.md): A representation of a file’s contents.
- [fileURL](pasteboardtype/fileurl.md): A file URL.
- [findPanelSearchOptions](pasteboardtype/findpanelsearchoptions.md): Type for the find panel metadata property list.
- [font](pasteboardtype/font.md): Font and character information.
- [html](pasteboardtype/html.md): Type for HTML content.
- [multipleTextSelection](pasteboardtype/multipletextselection.md): Multiple text selection.
- [pdf](pasteboardtype/pdf.md): PDF data.
- [png](pasteboardtype/png.md): PNG image data.
- [rtf](pasteboardtype/rtf.md): Rich Text Format (RTF) data.
- [rtfd](pasteboardtype/rtfd.md): RTFD formatted file contents.
- [ruler](pasteboardtype/ruler.md): Paragraph formatting information.
- [sound](pasteboardtype/sound.md): Sound data.
- [string](pasteboardtype/string.md): String data.
- [tabularText](pasteboardtype/tabulartext.md): Tab-separated fields of text.
- [textFinderOptions](pasteboardtype/textfinderoptions.md): Type for the Find panel metadata property list.
- [tiff](pasteboardtype/tiff.md): Tag Image File Format (TIFF) data.

### Option Keys

- [NSPasteboard.PasteboardType.FindPanelSearchOptionKey](pasteboardtype/findpanelsearchoptionkey.md): Search options for the find panel.
- [NSPasteboard.PasteboardType.TextFinderOptionKey](pasteboardtype/textfinderoptionkey.md): Search options for text in Finder.

### Initializers

- [init(\_:)](pasteboardtype/init%28__%29.md)
- [init(rawValue:)](pasteboardtype/init%28rawvalue_%29.md)

### Deprecated

- [filePromise](pasteboardtype/filepromise.md): Deprecated. Promised files.
- [inkText](pasteboardtype/inktext.md): Deprecated. Ink text data.
- [postScript](pasteboardtype/postscript.md): Deprecated. Encapsulated PostScript (EPS) code.
- [vCard](pasteboardtype/vcard.md): Deprecated. VCard data.
- [representedPathExtension](pasteboardtype/representedpathextension.md): Deprecated. A file type based on the passed pasteboard type.
- [fileContentsType(forPathExtension:)](pasteboardtype/filecontentstype%28forpathextension_%29.md): Deprecated. Returns a pasteboard type based on the passed file type.
- [fileNameType(forPathExtension:)](pasteboardtype/filenametype%28forpathextension_%29.md): Deprecated. Returns a pasteboard type based on the passed file type.
- [representedPathExtensions(from:)](pasteboardtype/representedpathextensions%28from_%29.md): Deprecated. Returns an array of file types based on the passed pasteboard types.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Writing data

- [clearContents()](clearcontents%28%29.md): Clears the existing contents of the pasteboard.
- [writeObjects(\_:)](writeobjects%28__%29.md): Writes an array of objects to the receiver.
- [setData(\_:forType:)](setdata%28__fortype_%29.md): Sets the data as the representation for the specified type for the first item on the receiver.
- [setPropertyList(\_:forType:)](setpropertylist%28__fortype_%29.md): Sets the given property list as the representation for the specified type for the first item on the receiver.
- [setString(\_:forType:)](setstring%28__fortype_%29.md): Sets the given string as the representation for the specified type for the first item on the receiver.

# NSPasteboardType (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

The supported pasteboard types.

## Declaration

```objectivec
typedef NSString * NSPasteboardType;
```

## Topics

### Pasteboard Types

- [NSPasteboardTypeURL](pasteboardtype/url.md): URL data for one file or resource.
- [NSPasteboardTypeColor](pasteboardtype/color.md): Color data.
- [NSFileContentsPboardType](pasteboardtype/filecontents.md): A representation of a file’s contents.
- [NSPasteboardTypeFileURL](pasteboardtype/fileurl.md): A file URL.
- [NSFindPanelSearchOptionsPboardType](pasteboardtype/findpanelsearchoptions.md): Type for the find panel metadata property list.
- [NSPasteboardTypeFont](pasteboardtype/font.md): Font and character information.
- [NSPasteboardTypeHTML](pasteboardtype/html.md): Type for HTML content.
- [NSPasteboardTypeMultipleTextSelection](pasteboardtype/multipletextselection.md): Multiple text selection.
- [NSPasteboardTypePDF](pasteboardtype/pdf.md): PDF data.
- [NSPasteboardTypePNG](pasteboardtype/png.md): PNG image data.
- [NSPasteboardTypeRTF](pasteboardtype/rtf.md): Rich Text Format (RTF) data.
- [NSPasteboardTypeRTFD](pasteboardtype/rtfd.md): RTFD formatted file contents.
- [NSPasteboardTypeRuler](pasteboardtype/ruler.md): Paragraph formatting information.
- [NSPasteboardTypeSound](pasteboardtype/sound.md): Sound data.
- [NSPasteboardTypeString](pasteboardtype/string.md): String data.
- [NSPasteboardTypeTabularText](pasteboardtype/tabulartext.md): Tab-separated fields of text.
- [NSPasteboardTypeTextFinderOptions](pasteboardtype/textfinderoptions.md): Type for the Find panel metadata property list.
- [NSPasteboardTypeTIFF](pasteboardtype/tiff.md): Tag Image File Format (TIFF) data.

### Option Keys

- [NSPasteboardTypeFindPanelSearchOptionKey](pasteboardtype/findpanelsearchoptionkey.md): Search options for the find panel.
- [NSPasteboardTypeTextFinderOptionKey](pasteboardtype/textfinderoptionkey.md): Search options for text in Finder.

### Deprecated

- [NSFilesPromisePboardType](pasteboardtype/filepromise.md): Deprecated. Promised files.
- [NSInkTextPboardType](pasteboardtype/inktext.md): Deprecated. Ink text data.
- [NSPostScriptPboardType](pasteboardtype/postscript.md): Deprecated. Encapsulated PostScript (EPS) code.
- [NSVCardPboardType](pasteboardtype/vcard.md): Deprecated. VCard data.
- [NSGetFileType](pasteboardtype/representedpathextension.md): Deprecated. A file type based on the passed pasteboard type.
- [NSCreateFileContentsPboardType](pasteboardtype/filecontentstype%28forpathextension_%29.md): Deprecated. Returns a pasteboard type based on the passed file type.
- [NSCreateFilenamePboardType](pasteboardtype/filenametype%28forpathextension_%29.md): Deprecated. Returns a pasteboard type based on the passed file type.
- [NSGetFileTypes](pasteboardtype/representedpathextensions%28from_%29.md): Deprecated. Returns an array of file types based on the passed pasteboard types.
- [NSColorPboardType](../nscolorpboardtype.md): Deprecated. `NSColor` data.
- [NSFilenamesPboardType](../nsfilenamespboardtype.md): Deprecated. An array of `NSString` objects designating one or more filenames.
- [NSFontPboardType](../nsfontpboardtype.md): Deprecated. Font and character information.
- [NSHTMLPboardType](../nshtmlpboardtype.md): Deprecated. HTML (which an `NSTextView` object can read from, but not write to).
- [NSMultipleTextSelectionPboardType](../nsmultipletextselectionpboardtype.md): Deprecated. Multiple text selection.
- [NSPDFPboardType](../nspdfpboardtype.md): Deprecated. PDF data.
- [NSPICTPboardType](../nspictpboardtype.md): Deprecated. QuickDraw picture data.
- [NSRTFDPboardType](../nsrtfdpboardtype.md): Deprecated. RTFD formatted file contents.
- [NSRTFPboardType](../nsrtfpboardtype.md): Deprecated. Rich Text Format (RTF) data.
- [NSRulerPboardType](../nsrulerpboardtype.md): Deprecated. Paragraph formatting information.
- [NSStringPboardType](../nsstringpboardtype.md): Deprecated. `NSString` data.
- [NSTIFFPboardType](../nstiffpboardtype.md): Deprecated. `NSString` data.
- [NSTabularTextPboardType](../nstabulartextpboardtype.md): Deprecated. An `NSString` object containing tab-separated fields of text.
- [NSURLPboardType](../nsurlpboardtype.md): Deprecated. `NSURL` data for one file or resource.
- [NSPasteboardTypeFindPanelSearchOptions](../nspasteboardtypefindpanelsearchoptions.md): Deprecated. Type for the Find panel metadata property list.

## See Also

### Writing data

- [clearContents](clearcontents%28%29.md): Clears the existing contents of the pasteboard.
- [writeObjects:](writeobjects%28__%29.md): Writes an array of objects to the receiver.
- [setData:forType:](setdata%28__fortype_%29.md): Sets the data as the representation for the specified type for the first item on the receiver.
- [setPropertyList:forType:](setpropertylist%28__fortype_%29.md): Sets the given property list as the representation for the specified type for the first item on the receiver.
- [setString:forType:](setstring%28__fortype_%29.md): Sets the given string as the representation for the specified type for the first item on the receiver.
