> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/filetype](https://developer.apple.com/documentation/uikit/uidocument/filetype)

# fileType (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The file type of the document.

## Declaration

```swift
var fileType: String? { get }
```

<a id="Discussion"></a>

## Discussion

The file type is a uniform type identifier (UTI). UIKit derives the UTI from the filename-extension component of [fileURL](fileurl.md).

UIKit sets this property before it calls the completion handlers of the [open(completionHandler:)](open%28completionhandler_%29.md), [save(to:for:completionHandler:)](save%28to_for_completionhandler_%29.md), and [revert(toContentsOf:completionHandler:)](revert%28tocontentsof_completionhandler_%29.md). If, outside of these methods or their completion handlers, you want to wait for any pending file operations to complete before you access this property, you can call [performAsynchronousFileAccess(\_:)](performasynchronousfileaccess%28__%29.md) and access the property value in the block parameter.

## See Also

### Accessing document attributes

- [fileURL](fileurl.md): The file URL you use to initialize the document.
- [localizedName](localizedname.md): The localized name of the document.
- [fileModificationDate](filemodificationdate.md): The date and time your app last modified the document file.
- [documentState](documentstate.md): The current state of the document.
- [progress](progress.md): The upload or download progress of a document.

# fileType (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The file type of the document.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * fileType;
```

<a id="Discussion"></a>

## Discussion

The file type is a uniform type identifier (UTI). UIKit derives the UTI from the filename-extension component of [fileURL](fileurl.md).

UIKit sets this property before it calls the completion handlers of the [openWithCompletionHandler:](open%28completionhandler_%29.md), [saveToURL:forSaveOperation:completionHandler:](save%28to_for_completionhandler_%29.md), and [revertToContentsOfURL:completionHandler:](revert%28tocontentsof_completionhandler_%29.md). If, outside of these methods or their completion handlers, you want to wait for any pending file operations to complete before you access this property, you can call [performAsynchronousFileAccessUsingBlock:](performasynchronousfileaccess%28__%29.md) and access the property value in the block parameter.

## See Also

### Accessing document attributes

- [fileURL](fileurl.md): The file URL you use to initialize the document.
- [localizedName](localizedname.md): The localized name of the document.
- [fileModificationDate](filemodificationdate.md): The date and time your app last modified the document file.
- [documentState](documentstate.md): The current state of the document.
- [progress](progress.md): The upload or download progress of a document.
