> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/rtfdfilewrapper(from:documentattributes:)](https://developer.apple.com/documentation/foundation/nsattributedstring/rtfdfilewrapper(from:documentattributes:))

# rtfdFileWrapper(from:documentAttributes:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns a file wrapper object that contains an RTFD document corresponding to the characters and attributes within the specified range.

## Declaration

```swift
func rtfdFileWrapper(from range: NSRange, documentAttributes dict: [NSAttributedString.DocumentAttributeKey : Any] = [:]) -> FileWrapper?
```

## Parameters

- `range`: The range.
- `dict`: A required dictionary specifying the document attributes. The dictionary contains values from `Document Types` and must at least contain `NSDocumentTypeDocumentAttribute`.

<a id="return-value"></a>

## Return Value

A file wrapper containing the RTFD data.

<a id="Discussion"></a>

## Discussion

The file wrapper also includes the document-level attributes in `docAttributes`, as explained in [RTF Files and Attributed Strings](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/TextAttributes/RTFAndAttrStrings.html#//apple_ref/doc/uid/20000164).

Raises an [rangeException](../nsexceptionname/rangeexception.md) if any part of `aRange` lies beyond the end of the receiver’s characters.

You can save the file wrapper using the [write(toFile:atomically:updateFilenames:)](../filewrapper/write%28tofile_atomically_updatefilenames_%29.md) method of [FileWrapper](../filewrapper.md).

## See Also

### Exporting the string as data

- [data(from:documentAttributes:)](data%28from_documentattributes_%29.md): Returns a data object that contains a text stream corresponding to the characters and attributes within the specified range.
- [fileWrapper(from:documentAttributes:)](filewrapper%28from_documentattributes_%29.md): Returns a file wrapper object that contains a text stream corresponding to the characters and attributes within the specified range.
- [docFormat(from:documentAttributes:)](docformat%28from_documentattributes_%29.md): Returns a data object that contains a Microsoft Word–format stream corresponding to the characters and attributes within the specified range.
- [rtf(from:documentAttributes:)](rtf%28from_documentattributes_%29.md): Returns a data object that contains an RTF stream corresponding to the characters and attributes within the specified range, omitting all attachment attributes.
- [rtfd(from:documentAttributes:)](rtfd%28from_documentattributes_%29.md): Returns a data object that contains an RTFD stream corresponding to the characters and attributes within the specified range.

# RTFDFileWrapperFromRange:documentAttributes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns a file wrapper object that contains an RTFD document corresponding to the characters and attributes within the specified range.

## Declaration

```objectivec
- (NSFileWrapper *) RTFDFileWrapperFromRange:(NSRange) range documentAttributes:(NSDictionary<NSString *,id> *) dict;
```

## Parameters

- `range`: The range.
- `dict`: A required dictionary specifying the document attributes. The dictionary contains values from `Document Types` and must at least contain `NSDocumentTypeDocumentAttribute`.

<a id="return-value"></a>

## Return Value

A file wrapper containing the RTFD data.

<a id="Discussion"></a>

## Discussion

The file wrapper also includes the document-level attributes in `docAttributes`, as explained in [RTF Files and Attributed Strings](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/TextAttributes/RTFAndAttrStrings.html#//apple_ref/doc/uid/20000164).

Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if any part of `aRange` lies beyond the end of the receiver’s characters.

You can save the file wrapper using the [writeToFile:atomically:updateFilenames:](../filewrapper/write%28tofile_atomically_updatefilenames_%29.md) method of [NSFileWrapper](../filewrapper.md).

## See Also

### Exporting the string as data

- [dataFromRange:documentAttributes:error:](data%28from_documentattributes_%29.md): Returns a data object that contains a text stream corresponding to the characters and attributes within the specified range.
- [fileWrapperFromRange:documentAttributes:error:](filewrapper%28from_documentattributes_%29.md): Returns a file wrapper object that contains a text stream corresponding to the characters and attributes within the specified range.
- [docFormatFromRange:documentAttributes:](docformat%28from_documentattributes_%29.md): Returns a data object that contains a Microsoft Word–format stream corresponding to the characters and attributes within the specified range.
- [RTFFromRange:documentAttributes:](rtf%28from_documentattributes_%29.md): Returns a data object that contains an RTF stream corresponding to the characters and attributes within the specified range, omitting all attachment attributes.
- [RTFDFromRange:documentAttributes:](rtfd%28from_documentattributes_%29.md): Returns a data object that contains an RTFD stream corresponding to the characters and attributes within the specified range.
