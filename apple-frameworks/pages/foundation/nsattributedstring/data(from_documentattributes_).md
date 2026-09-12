> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/data(from:documentattributes:)](https://developer.apple.com/documentation/foundation/nsattributedstring/data(from:documentattributes:))

# data(from:documentAttributes:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a data object that contains a text stream corresponding to the characters and attributes within the specified range.

## Declaration

```swift
func data(from range: NSRange, documentAttributes dict: [NSAttributedString.DocumentAttributeKey : Any] = [:]) throws -> Data
```

## Parameters

- `range`: The range.
- `dict`: A required dictionary specifying the document attributes. The dictionary contains values from `Document Types` and must at least contain [documentType](documentattributekey/documenttype.md).

<a id="return-value"></a>

## Return Value

Returns the data for the attributed string, or `nil` if failure. When `nil`, `error` encapsulates the error information.

<a id="Discussion"></a>

## Discussion

Raises an [rangeException](../nsexceptionname/rangeexception.md) if any part of `range` lies beyond the end of the receiver’s characters.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Exporting the string as data

- [fileWrapper(from:documentAttributes:)](filewrapper%28from_documentattributes_%29.md): Returns a file wrapper object that contains a text stream corresponding to the characters and attributes within the specified range.
- [docFormat(from:documentAttributes:)](docformat%28from_documentattributes_%29.md): Returns a data object that contains a Microsoft Word–format stream corresponding to the characters and attributes within the specified range.
- [rtf(from:documentAttributes:)](rtf%28from_documentattributes_%29.md): Returns a data object that contains an RTF stream corresponding to the characters and attributes within the specified range, omitting all attachment attributes.
- [rtfd(from:documentAttributes:)](rtfd%28from_documentattributes_%29.md): Returns a data object that contains an RTFD stream corresponding to the characters and attributes within the specified range.
- [rtfdFileWrapper(from:documentAttributes:)](rtfdfilewrapper%28from_documentattributes_%29.md): Returns a file wrapper object that contains an RTFD document corresponding to the characters and attributes within the specified range.

# dataFromRange:documentAttributes:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a data object that contains a text stream corresponding to the characters and attributes within the specified range.

## Declaration

```objectivec
- (NSData *) dataFromRange:(NSRange) range documentAttributes:(NSDictionary<NSString *,id> *) dict error:(NSError **) error;
```

## Parameters

- `range`: The range.
- `dict`: A required dictionary specifying the document attributes. The dictionary contains values from `Document Types` and must at least contain [documentType](documentattributekey/documenttype.md).
- `error`: An in-out variable containing an encountered error, if any.

<a id="return-value"></a>

## Return Value

Returns the data for the attributed string, or `nil` if failure. When `nil`, `error` encapsulates the error information.

<a id="Discussion"></a>

## Discussion

Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if any part of `range` lies beyond the end of the receiver’s characters.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Exporting the string as data

- [fileWrapperFromRange:documentAttributes:error:](filewrapper%28from_documentattributes_%29.md): Returns a file wrapper object that contains a text stream corresponding to the characters and attributes within the specified range.
- [docFormatFromRange:documentAttributes:](docformat%28from_documentattributes_%29.md): Returns a data object that contains a Microsoft Word–format stream corresponding to the characters and attributes within the specified range.
- [RTFFromRange:documentAttributes:](rtf%28from_documentattributes_%29.md): Returns a data object that contains an RTF stream corresponding to the characters and attributes within the specified range, omitting all attachment attributes.
- [RTFDFromRange:documentAttributes:](rtfd%28from_documentattributes_%29.md): Returns a data object that contains an RTFD stream corresponding to the characters and attributes within the specified range.
- [RTFDFileWrapperFromRange:documentAttributes:](rtfdfilewrapper%28from_documentattributes_%29.md): Returns a file wrapper object that contains an RTFD document corresponding to the characters and attributes within the specified range.
