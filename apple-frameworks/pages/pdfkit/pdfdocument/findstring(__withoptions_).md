> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/findstring(_:withoptions:)](https://developer.apple.com/documentation/pdfkit/pdfdocument/findstring(_:withoptions:))

# findString(\_:withOptions:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Synchronously finds all instances of the specified string in the document.

## Declaration

```swift
func findString(_ string: String, withOptions options: NSString.CompareOptions = []) -> [PDFSelection]
```

<a id="Discussion"></a>

## Discussion

Each hit gets added to an `NSArray` object as a [PDFSelection](../pdfselection.md) object. If there are no hits, this method returns an empty array.

Use this method when the complete search process will be brief and when you don’t need the flexibility or control offered by [beginFindString(\_:withOptions:)](beginfindstring%28__withoptions_%29.md). For options, refer to [Searching, Comparing, and Sorting Strings](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/Articles/SearchingStrings.html#//apple_ref/doc/uid/20000149).

## See Also

### Searching Documents

- [beginFindString(\_:withOptions:)](beginfindstring%28__withoptions_%29.md): Asynchronously finds all instances of the specified string in the document.
- [beginFindStrings(\_:withOptions:)](beginfindstrings%28__withoptions_%29.md): Asynchronously finds all instances of the specified array of strings in the document.
- [findString(\_:fromSelection:withOptions:)](findstring%28__fromselection_withoptions_%29.md): Synchronously finds the next occurance of a string after the specified selection (or before the selection if you specified `NSBackwardsSearch` as a search option.
- [isFinding](isfinding.md): Returns a Boolean value indicating whether an asynchronous find operation is in progress.
- [cancelFindString()](cancelfindstring%28%29.md): Cancels a search initiated with [beginFindString(\_:withOptions:)](beginfindstring%28__withoptions_%29.md).

# findString:withOptions: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Synchronously finds all instances of the specified string in the document.

## Declaration

```objectivec
- (NSArray<PDFSelection *> *) findString:(NSString *) string withOptions:(NSStringCompareOptions) options;
```

<a id="Discussion"></a>

## Discussion

Each hit gets added to an `NSArray` object as a [PDFSelection](../pdfselection.md) object. If there are no hits, this method returns an empty array.

Use this method when the complete search process will be brief and when you don’t need the flexibility or control offered by [beginFindString:withOptions:](beginfindstring%28__withoptions_%29.md). For options, refer to [Searching, Comparing, and Sorting Strings](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/Articles/SearchingStrings.html#//apple_ref/doc/uid/20000149).

## See Also

### Searching Documents

- [beginFindString:withOptions:](beginfindstring%28__withoptions_%29.md): Asynchronously finds all instances of the specified string in the document.
- [beginFindStrings:withOptions:](beginfindstrings%28__withoptions_%29.md): Asynchronously finds all instances of the specified array of strings in the document.
- [findString:fromSelection:withOptions:](findstring%28__fromselection_withoptions_%29.md): Synchronously finds the next occurance of a string after the specified selection (or before the selection if you specified `NSBackwardsSearch` as a search option.
- [isFinding](isfinding.md): Returns a Boolean value indicating whether an asynchronous find operation is in progress.
- [cancelFindString](cancelfindstring%28%29.md): Cancels a search initiated with [beginFindString:withOptions:](beginfindstring%28__withoptions_%29.md).
