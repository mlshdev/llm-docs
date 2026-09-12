> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/beginfindstrings(_:withoptions:)](https://developer.apple.com/documentation/pdfkit/pdfdocument/beginfindstrings(_:withoptions:))

# beginFindStrings(\_:withOptions:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Asynchronously finds all instances of the specified array of strings in the document.

## Declaration

```swift
func beginFindStrings(_ strings: [String], withOptions options: NSString.CompareOptions = [])
```

<a id="Discussion"></a>

## Discussion

This method returns immediately. It causes notifications to be issued when searching begins and ends, on each search hit, and when the search proceeds to a new page. For options, refer to [Searching, Comparing, and Sorting Strings](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/Articles/SearchingStrings.html#//apple_ref/doc/uid/20000149).

## See Also

### Related Documentation

- [PDFDocument](../pdfdocument.md): An object that represents PDF data or a PDF file and defines methods for writing, searching, and selecting PDF data.

### Searching Documents

- [findString(\_:withOptions:)](findstring%28__withoptions_%29.md): Synchronously finds all instances of the specified string in the document.
- [beginFindString(\_:withOptions:)](beginfindstring%28__withoptions_%29.md): Asynchronously finds all instances of the specified string in the document.
- [findString(\_:fromSelection:withOptions:)](findstring%28__fromselection_withoptions_%29.md): Synchronously finds the next occurance of a string after the specified selection (or before the selection if you specified `NSBackwardsSearch` as a search option.
- [isFinding](isfinding.md): Returns a Boolean value indicating whether an asynchronous find operation is in progress.
- [cancelFindString()](cancelfindstring%28%29.md): Cancels a search initiated with [beginFindString(\_:withOptions:)](beginfindstring%28__withoptions_%29.md).

# beginFindStrings:withOptions: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Asynchronously finds all instances of the specified array of strings in the document.

## Declaration

```objectivec
- (void) beginFindStrings:(NSArray<NSString *> *) strings withOptions:(NSStringCompareOptions) options;
```

<a id="Discussion"></a>

## Discussion

This method returns immediately. It causes notifications to be issued when searching begins and ends, on each search hit, and when the search proceeds to a new page. For options, refer to [Searching, Comparing, and Sorting Strings](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/Articles/SearchingStrings.html#//apple_ref/doc/uid/20000149).

## See Also

### Related Documentation

- [PDFDocument](../pdfdocument.md): An object that represents PDF data or a PDF file and defines methods for writing, searching, and selecting PDF data.

### Searching Documents

- [findString:withOptions:](findstring%28__withoptions_%29.md): Synchronously finds all instances of the specified string in the document.
- [beginFindString:withOptions:](beginfindstring%28__withoptions_%29.md): Asynchronously finds all instances of the specified string in the document.
- [findString:fromSelection:withOptions:](findstring%28__fromselection_withoptions_%29.md): Synchronously finds the next occurance of a string after the specified selection (or before the selection if you specified `NSBackwardsSearch` as a search option.
- [isFinding](isfinding.md): Returns a Boolean value indicating whether an asynchronous find operation is in progress.
- [cancelFindString](cancelfindstring%28%29.md): Cancels a search initiated with [beginFindString:withOptions:](beginfindstring%28__withoptions_%29.md).
