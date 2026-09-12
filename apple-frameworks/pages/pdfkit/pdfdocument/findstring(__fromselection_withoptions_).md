> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/findstring(_:fromselection:withoptions:)](https://developer.apple.com/documentation/pdfkit/pdfdocument/findstring(_:fromselection:withoptions:))

# findString(\_:fromSelection:withOptions:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Synchronously finds the next occurance of a string after the specified selection (or before the selection if you specified `NSBackwardsSearch` as a search option.

## Declaration

```swift
func findString(_ string: String, fromSelection selection: PDFSelection?, withOptions options: NSString.CompareOptions = []) -> PDFSelection?
```

<a id="Discussion"></a>

## Discussion

Matches are returned as a [PDFSelection](../pdfselection.md) object. If the search reaches the end (or beginning) of the document without any hits, this method returns `NULL`.

If you pass `NULL` for the selection, this method begins searching from the beginning of the document (or the end, if you specified `NSBackwardsSearch`).

You can use this method to implement “Find Again” behavior. For options, refer to [Searching, Comparing, and Sorting Strings](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/Articles/SearchingStrings.html#//apple_ref/doc/uid/20000149).

## See Also

### Searching Documents

- [findString(\_:withOptions:)](findstring%28__withoptions_%29.md): Synchronously finds all instances of the specified string in the document.
- [beginFindString(\_:withOptions:)](beginfindstring%28__withoptions_%29.md): Asynchronously finds all instances of the specified string in the document.
- [beginFindStrings(\_:withOptions:)](beginfindstrings%28__withoptions_%29.md): Asynchronously finds all instances of the specified array of strings in the document.
- [isFinding](isfinding.md): Returns a Boolean value indicating whether an asynchronous find operation is in progress.
- [cancelFindString()](cancelfindstring%28%29.md): Cancels a search initiated with [beginFindString(\_:withOptions:)](beginfindstring%28__withoptions_%29.md).

# findString:fromSelection:withOptions: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Synchronously finds the next occurance of a string after the specified selection (or before the selection if you specified `NSBackwardsSearch` as a search option.

## Declaration

```objectivec
- (PDFSelection *) findString:(NSString *) string fromSelection:(PDFSelection *) selection withOptions:(NSStringCompareOptions) options;
```

<a id="Discussion"></a>

## Discussion

Matches are returned as a [PDFSelection](../pdfselection.md) object. If the search reaches the end (or beginning) of the document without any hits, this method returns `NULL`.

If you pass `NULL` for the selection, this method begins searching from the beginning of the document (or the end, if you specified `NSBackwardsSearch`).

You can use this method to implement “Find Again” behavior. For options, refer to [Searching, Comparing, and Sorting Strings](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/Articles/SearchingStrings.html#//apple_ref/doc/uid/20000149).

## See Also

### Searching Documents

- [findString:withOptions:](findstring%28__withoptions_%29.md): Synchronously finds all instances of the specified string in the document.
- [beginFindString:withOptions:](beginfindstring%28__withoptions_%29.md): Asynchronously finds all instances of the specified string in the document.
- [beginFindStrings:withOptions:](beginfindstrings%28__withoptions_%29.md): Asynchronously finds all instances of the specified array of strings in the document.
- [isFinding](isfinding.md): Returns a Boolean value indicating whether an asynchronous find operation is in progress.
- [cancelFindString](cancelfindstring%28%29.md): Cancels a search initiated with [beginFindString:withOptions:](beginfindstring%28__withoptions_%29.md).
