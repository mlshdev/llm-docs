> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/rtf(from:documentattributes:)](https://developer.apple.com/documentation/foundation/nsattributedstring/rtf(from:documentattributes:))

# rtf(from:documentAttributes:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns a data object that contains an RTF stream corresponding to the characters and attributes within the specified range, omitting all attachment attributes.

## Declaration

```swift
func rtf(from range: NSRange, documentAttributes dict: [NSAttributedString.DocumentAttributeKey : Any] = [:]) -> Data?
```

## Parameters

- `range`: The range.
- `dict`: A required dictionary specifying the document attributes. The dictionary contains values from `Document Types` and must at least contain [documentType](documentattributekey/documenttype.md).

<a id="return-value"></a>

## Return Value

A data object containing an RTF stream for the attributed string.

<a id="Discussion"></a>

## Discussion

Writes the document-level attributes in `docAttributes`, as explained in [RTF Files and Attributed Strings](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/TextAttributes/RTFAndAttrStrings.html#//apple_ref/doc/uid/20000164).

Raises an [rangeException](../nsexceptionname/rangeexception.md) if any part of `aRange` lies beyond the end of the receiver’s characters.

When writing data to the pasteboard, you can use the `NSData` object as the first argument to the [NSPasteboard](https://developer.apple.com/documentation/appkit/nspasteboard) method [setData(\_:forType:)](https://developer.apple.com/documentation/appkit/nspasteboard/setdata%28_:fortype:%29), with a second argument of `NSRTFPboardType`. Although this method strips attachments, it leaves the attachment characters in the text itself. The `NSText` method  [rtf(from:)](https://developer.apple.com/documentation/appkit/nstext/rtf%28from:%29), on the other hand, does strip attachment characters when extracting RTF.

## See Also

### Exporting the string as data

- [data(from:documentAttributes:)](data%28from_documentattributes_%29.md): Returns a data object that contains a text stream corresponding to the characters and attributes within the specified range.
- [fileWrapper(from:documentAttributes:)](filewrapper%28from_documentattributes_%29.md): Returns a file wrapper object that contains a text stream corresponding to the characters and attributes within the specified range.
- [docFormat(from:documentAttributes:)](docformat%28from_documentattributes_%29.md): Returns a data object that contains a Microsoft Word–format stream corresponding to the characters and attributes within the specified range.
- [rtfd(from:documentAttributes:)](rtfd%28from_documentattributes_%29.md): Returns a data object that contains an RTFD stream corresponding to the characters and attributes within the specified range.
- [rtfdFileWrapper(from:documentAttributes:)](rtfdfilewrapper%28from_documentattributes_%29.md): Returns a file wrapper object that contains an RTFD document corresponding to the characters and attributes within the specified range.

# RTFFromRange:documentAttributes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns a data object that contains an RTF stream corresponding to the characters and attributes within the specified range, omitting all attachment attributes.

## Declaration

```objectivec
- (NSData *) RTFFromRange:(NSRange) range documentAttributes:(NSDictionary<NSString *,id> *) dict;
```

## Parameters

- `range`: The range.
- `dict`: A required dictionary specifying the document attributes. The dictionary contains values from `Document Types` and must at least contain [documentType](documentattributekey/documenttype.md).

<a id="return-value"></a>

## Return Value

A data object containing an RTF stream for the attributed string.

<a id="Discussion"></a>

## Discussion

Writes the document-level attributes in `docAttributes`, as explained in [RTF Files and Attributed Strings](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/TextAttributes/RTFAndAttrStrings.html#//apple_ref/doc/uid/20000164).

Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if any part of `aRange` lies beyond the end of the receiver’s characters.

When writing data to the pasteboard, you can use the `NSData` object as the first argument to the [NSPasteboard](https://developer.apple.com/documentation/appkit/nspasteboard) method [setData:forType:](https://developer.apple.com/documentation/appkit/nspasteboard/setdata%28_:fortype:%29), with a second argument of `NSRTFPboardType`. Although this method strips attachments, it leaves the attachment characters in the text itself. The `NSText` method  [RTFFromRange:](https://developer.apple.com/documentation/appkit/nstext/rtf%28from:%29), on the other hand, does strip attachment characters when extracting RTF.

## See Also

### Exporting the string as data

- [dataFromRange:documentAttributes:error:](data%28from_documentattributes_%29.md): Returns a data object that contains a text stream corresponding to the characters and attributes within the specified range.
- [fileWrapperFromRange:documentAttributes:error:](filewrapper%28from_documentattributes_%29.md): Returns a file wrapper object that contains a text stream corresponding to the characters and attributes within the specified range.
- [docFormatFromRange:documentAttributes:](docformat%28from_documentattributes_%29.md): Returns a data object that contains a Microsoft Word–format stream corresponding to the characters and attributes within the specified range.
- [RTFDFromRange:documentAttributes:](rtfd%28from_documentattributes_%29.md): Returns a data object that contains an RTFD stream corresponding to the characters and attributes within the specified range.
- [RTFDFileWrapperFromRange:documentAttributes:](rtfdfilewrapper%28from_documentattributes_%29.md): Returns a file wrapper object that contains an RTFD document corresponding to the characters and attributes within the specified range.
