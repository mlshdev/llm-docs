> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/fileurl](https://developer.apple.com/documentation/uikit/uidocument/fileurl)

# fileURL (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The file URL you use to initialize the document.

## Declaration

```swift
var fileURL: URL { get }
```

<a id="Discussion"></a>

## Discussion

The URL identifies the location of the document in the application sandbox. It includes the file extension, from which the file type is determined.

UIKit sets this property before it calls the completion handlers of the [open(completionHandler:)](open%28completionhandler_%29.md), [save(to:for:completionHandler:)](save%28to_for_completionhandler_%29.md), and [revert(toContentsOf:completionHandler:)](revert%28tocontentsof_completionhandler_%29.md). If, outside of these methods or their completion handlers, you want to wait for any pending file operations to complete before you access this property, you can call [performAsynchronousFileAccess(\_:)](performasynchronousfileaccess%28__%29.md) and access the property value in the block parameter.

## See Also

### Related Documentation

- [init(fileURL:)](init%28fileurl_%29.md): Returns a document object initialized with its file-system location.

### Accessing document attributes

- [localizedName](localizedname.md): The localized name of the document.
- [fileType](filetype.md): The file type of the document.
- [fileModificationDate](filemodificationdate.md): The date and time your app last modified the document file.
- [documentState](documentstate.md): The current state of the document.
- [progress](progress.md): The upload or download progress of a document.

# fileURL (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The file URL you use to initialize the document.

## Declaration

```objectivec
@property (readonly) NSURL * fileURL;
```

<a id="Discussion"></a>

## Discussion

The URL identifies the location of the document in the application sandbox. It includes the file extension, from which the file type is determined.

UIKit sets this property before it calls the completion handlers of the [openWithCompletionHandler:](open%28completionhandler_%29.md), [saveToURL:forSaveOperation:completionHandler:](save%28to_for_completionhandler_%29.md), and [revertToContentsOfURL:completionHandler:](revert%28tocontentsof_completionhandler_%29.md). If, outside of these methods or their completion handlers, you want to wait for any pending file operations to complete before you access this property, you can call [performAsynchronousFileAccessUsingBlock:](performasynchronousfileaccess%28__%29.md) and access the property value in the block parameter.

## See Also

### Related Documentation

- [initWithFileURL:](init%28fileurl_%29.md): Returns a document object initialized with its file-system location.

### Accessing document attributes

- [localizedName](localizedname.md): The localized name of the document.
- [fileType](filetype.md): The file type of the document.
- [fileModificationDate](filemodificationdate.md): The date and time your app last modified the document file.
- [documentState](documentstate.md): The current state of the document.
- [progress](progress.md): The upload or download progress of a document.
