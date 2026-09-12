> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/docformat(from:documentattributes:)](https://developer.apple.com/documentation/foundation/nsattributedstring/docformat(from:documentattributes:))

# docFormat(from:documentAttributes:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns a data object that contains a Microsoft Word–format stream corresponding to the characters and attributes within the specified range.

## Declaration

```swift
func docFormat(from range: NSRange, documentAttributes dict: [NSAttributedString.DocumentAttributeKey : Any] = [:]) -> Data?
```

## Parameters

- `range`: The range.
- `dict`: A required dictionary specifying the document attributes. The dictionary contains values from `Document Types` and must at least contain [documentType](documentattributekey/documenttype.md).

<a id="return-value"></a>

## Return Value

Returns a data object containing the attributed string as a Microsoft Word doc file.

<a id="Discussion"></a>

## Discussion

Raises an [rangeException](../nsexceptionname/rangeexception.md) if any part of `range` lies beyond the end of the receiver’s characters.

## See Also

### Exporting the string as data

- [data(from:documentAttributes:)](data%28from_documentattributes_%29.md): Returns a data object that contains a text stream corresponding to the characters and attributes within the specified range.
- [fileWrapper(from:documentAttributes:)](filewrapper%28from_documentattributes_%29.md): Returns a file wrapper object that contains a text stream corresponding to the characters and attributes within the specified range.
- [rtf(from:documentAttributes:)](rtf%28from_documentattributes_%29.md): Returns a data object that contains an RTF stream corresponding to the characters and attributes within the specified range, omitting all attachment attributes.
- [rtfd(from:documentAttributes:)](rtfd%28from_documentattributes_%29.md): Returns a data object that contains an RTFD stream corresponding to the characters and attributes within the specified range.
- [rtfdFileWrapper(from:documentAttributes:)](rtfdfilewrapper%28from_documentattributes_%29.md): Returns a file wrapper object that contains an RTFD document corresponding to the characters and attributes within the specified range.

# docFormatFromRange:documentAttributes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns a data object that contains a Microsoft Word–format stream corresponding to the characters and attributes within the specified range.

## Declaration

```objectivec
- (NSData *) docFormatFromRange:(NSRange) range documentAttributes:(NSDictionary<NSString *,id> *) dict;
```

## Parameters

- `range`: The range.
- `dict`: A required dictionary specifying the document attributes. The dictionary contains values from `Document Types` and must at least contain [documentType](documentattributekey/documenttype.md).

<a id="return-value"></a>

## Return Value

Returns a data object containing the attributed string as a Microsoft Word doc file.

<a id="Discussion"></a>

## Discussion

Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if any part of `range` lies beyond the end of the receiver’s characters.

## See Also

### Exporting the string as data

- [dataFromRange:documentAttributes:error:](data%28from_documentattributes_%29.md): Returns a data object that contains a text stream corresponding to the characters and attributes within the specified range.
- [fileWrapperFromRange:documentAttributes:error:](filewrapper%28from_documentattributes_%29.md): Returns a file wrapper object that contains a text stream corresponding to the characters and attributes within the specified range.
- [RTFFromRange:documentAttributes:](rtf%28from_documentattributes_%29.md): Returns a data object that contains an RTF stream corresponding to the characters and attributes within the specified range, omitting all attachment attributes.
- [RTFDFromRange:documentAttributes:](rtfd%28from_documentattributes_%29.md): Returns a data object that contains an RTFD stream corresponding to the characters and attributes within the specified range.
- [RTFDFileWrapperFromRange:documentAttributes:](rtfdfilewrapper%28from_documentattributes_%29.md): Returns a file wrapper object that contains an RTFD document corresponding to the characters and attributes within the specified range.
