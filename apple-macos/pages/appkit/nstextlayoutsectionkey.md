> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlayoutsectionkey](https://developer.apple.com/documentation/appkit/nstextlayoutsectionkey)

# NSTextLayoutSectionKey

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS 10.7+

Constants for the text layout sections document attribute key.

## Declaration

```objectivec
typedef NSString * NSTextLayoutSectionKey;
```

<a id="discussion"></a>

## Discussion

Use these constants as values for the [NSTextLayoutSectionsAttribute](nstextlayoutsectionsattribute.md) key in the document attributes dictionary.

## Topics

### Getting keys for text layouts

- [NSTextLayoutSectionOrientation](nstextlayoutsectionorientation.md): The orientation of the text.
- [NSTextLayoutSectionRange](nstextlayoutsectionrange.md): The character range.

## See Also

### Getting document-wide attributes

- [NSAttributedStringDocumentAttributeKey](nsattributedstringdocumentattributekey.md): The attributes you apply to an entire document.
- [Document reading option keys](document-reading-option-keys.md): Keys for constructing an attributed string from data on disk.
- [NSAttributedStringDocumentType](nsattributedstringdocumenttype.md): Constants for the document type document attribute key.
- [NSTextScalingType](nstextscalingtype.md): Constants that specify the text scaling.
