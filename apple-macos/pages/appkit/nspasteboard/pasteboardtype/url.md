> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/pasteboardtype/url](https://developer.apple.com/documentation/appkit/nspasteboard/pasteboardtype/url)

# URL (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.13+

URL data for one file or resource.

## Declaration

```swift
static let URL: NSPasteboard.PasteboardType
```

<a id="Discussion"></a>

## Discussion

In macOS 10.6 and later, use [writeObjects(\_:)](../writeobjects%28__%29.md) to write URLs directly to the pasteboard instead.

In macOS 10.5 and earlier, write an URL to a pasteboard using the [write(to:)](https://developer.apple.com/documentation/foundation/nsurl/write%28to:%29) method of [NSURL](https://developer.apple.com/documentation/foundation/nsurl). To get an URL from a pasteboard, use the [init(fromPasteboard:)](https://developer.apple.com/documentation/foundation/nsurl/init%28frompasteboard:%29) method of [NSURL](https://developer.apple.com/documentation/foundation/nsurl).

## See Also

### Pasteboard Types

- [collaborationMetadata](collaborationmetadata.md): An object you use for conveying data during a collaboration.
- [color](color.md): Color data.
- [fileContents](filecontents.md): A representation of a file’s contents.
- [fileURL](fileurl.md): A file URL.
- [findPanelSearchOptions](findpanelsearchoptions.md): Type for the find panel metadata property list.
- [font](font.md): Font and character information.
- [html](html.md): Type for HTML content.
- [multipleTextSelection](multipletextselection.md): Multiple text selection.
- [pdf](pdf.md): PDF data.
- [png](png.md): PNG image data.
- [rtf](rtf.md): Rich Text Format (RTF) data.
- [rtfd](rtfd.md): RTFD formatted file contents.
- [ruler](ruler.md): Paragraph formatting information.
- [sound](sound.md): Sound data.
- [string](string.md): String data.

# NSPasteboardTypeURL (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.13+

URL data for one file or resource.

## Declaration

```objectivec
extern NSPasteboardType const NSPasteboardTypeURL;
```

<a id="Discussion"></a>

## Discussion

In macOS 10.6 and later, use [writeObjects:](../writeobjects%28__%29.md) to write URLs directly to the pasteboard instead.

In macOS 10.5 and earlier, write an URL to a pasteboard using the [writeToPasteboard:](https://developer.apple.com/documentation/foundation/nsurl/write%28to:%29) method of [NSURL](https://developer.apple.com/documentation/foundation/nsurl). To get an URL from a pasteboard, use the [URLFromPasteboard:](https://developer.apple.com/documentation/foundation/nsurl/init%28frompasteboard:%29) method of [NSURL](https://developer.apple.com/documentation/foundation/nsurl).

## See Also

### Pasteboard Types

- [NSPasteboardTypeColor](color.md): Color data.
- [NSFileContentsPboardType](filecontents.md): A representation of a file’s contents.
- [NSPasteboardTypeFileURL](fileurl.md): A file URL.
- [NSFindPanelSearchOptionsPboardType](findpanelsearchoptions.md): Type for the find panel metadata property list.
- [NSPasteboardTypeFont](font.md): Font and character information.
- [NSPasteboardTypeHTML](html.md): Type for HTML content.
- [NSPasteboardTypeMultipleTextSelection](multipletextselection.md): Multiple text selection.
- [NSPasteboardTypePDF](pdf.md): PDF data.
- [NSPasteboardTypePNG](png.md): PNG image data.
- [NSPasteboardTypeRTF](rtf.md): Rich Text Format (RTF) data.
- [NSPasteboardTypeRTFD](rtfd.md): RTFD formatted file contents.
- [NSPasteboardTypeRuler](ruler.md): Paragraph formatting information.
- [NSPasteboardTypeSound](sound.md): Sound data.
- [NSPasteboardTypeString](string.md): String data.
- [NSPasteboardTypeTabularText](tabulartext.md): Tab-separated fields of text.
