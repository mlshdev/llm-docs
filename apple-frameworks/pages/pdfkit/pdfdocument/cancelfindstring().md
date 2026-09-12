> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/cancelfindstring()](https://developer.apple.com/documentation/pdfkit/pdfdocument/cancelfindstring())

# cancelFindString() (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Cancels a search initiated with [beginFindString(\_:withOptions:)](beginfindstring%28__withoptions_%29.md).

## Declaration

```swift
func cancelFindString()
```

## See Also

### Searching Documents

- [findString(\_:withOptions:)](findstring%28__withoptions_%29.md): Synchronously finds all instances of the specified string in the document.
- [beginFindString(\_:withOptions:)](beginfindstring%28__withoptions_%29.md): Asynchronously finds all instances of the specified string in the document.
- [beginFindStrings(\_:withOptions:)](beginfindstrings%28__withoptions_%29.md): Asynchronously finds all instances of the specified array of strings in the document.
- [findString(\_:fromSelection:withOptions:)](findstring%28__fromselection_withoptions_%29.md): Synchronously finds the next occurance of a string after the specified selection (or before the selection if you specified `NSBackwardsSearch` as a search option.
- [isFinding](isfinding.md): Returns a Boolean value indicating whether an asynchronous find operation is in progress.

# cancelFindString (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Cancels a search initiated with [beginFindString:withOptions:](beginfindstring%28__withoptions_%29.md).

## Declaration

```objectivec
- (void) cancelFindString;
```

## See Also

### Searching Documents

- [findString:withOptions:](findstring%28__withoptions_%29.md): Synchronously finds all instances of the specified string in the document.
- [beginFindString:withOptions:](beginfindstring%28__withoptions_%29.md): Asynchronously finds all instances of the specified string in the document.
- [beginFindStrings:withOptions:](beginfindstrings%28__withoptions_%29.md): Asynchronously finds all instances of the specified array of strings in the document.
- [findString:fromSelection:withOptions:](findstring%28__fromselection_withoptions_%29.md): Synchronously finds the next occurance of a string after the specified selection (or before the selection if you specified `NSBackwardsSearch` as a search option.
- [isFinding](isfinding.md): Returns a Boolean value indicating whether an asynchronous find operation is in progress.
