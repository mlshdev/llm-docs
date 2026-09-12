> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/filemodificationdate](https://developer.apple.com/documentation/uikit/uidocument/filemodificationdate)

# fileModificationDate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The date and time your app last modified the document file.

## Declaration

```swift
var fileModificationDate: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

The modification date is updated by the [open(completionHandler:)](open%28completionhandler_%29.md), [save(to:for:completionHandler:)](save%28to_for_completionhandler_%29.md), and [revert(toContentsOf:completionHandler:)](revert%28tocontentsof_completionhandler_%29.md) methods. Its value is `nil` if none of these methods has completed successfully at least once. If you override any of these methods, you should be sure to set this property in your implementation.

UIKit sets this property before it calls the completion handlers of the [open(completionHandler:)](open%28completionhandler_%29.md), [save(to:for:completionHandler:)](save%28to_for_completionhandler_%29.md), and [revert(toContentsOf:completionHandler:)](revert%28tocontentsof_completionhandler_%29.md). If, outside of these methods or their completion handlers, you want to wait for any pending file operations to complete before you access this property, you can call [performAsynchronousFileAccess(\_:)](performasynchronousfileaccess%28__%29.md) and access the property value in the block parameter.

> **Important**

>  This API has the potential of being misused to access device signals to try to identify the device or user, also known as fingerprinting. Regardless of whether a user gives your app permission to track, fingerprinting is not allowed. When you use this API in your app or third-party SDK (an SDK not provided by Apple), declare your usage and the reason for using the API in your app or third-party SDK’s `PrivacyInfo.xcprivacy` file. For more information, including the list of valid reasons for using the API, see [Describing use of required reason API](../../bundleresources/describing-use-of-required-reason-api.md).

## See Also

### Accessing document attributes

- [fileURL](fileurl.md): The file URL you use to initialize the document.
- [localizedName](localizedname.md): The localized name of the document.
- [fileType](filetype.md): The file type of the document.
- [documentState](documentstate.md): The current state of the document.
- [progress](progress.md): The upload or download progress of a document.

# fileModificationDate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The date and time your app last modified the document file.

## Declaration

```objectivec
@property (copy, nullable) NSDate * fileModificationDate;
```

<a id="Discussion"></a>

## Discussion

The modification date is updated by the [openWithCompletionHandler:](open%28completionhandler_%29.md), [saveToURL:forSaveOperation:completionHandler:](save%28to_for_completionhandler_%29.md), and [revertToContentsOfURL:completionHandler:](revert%28tocontentsof_completionhandler_%29.md) methods. Its value is `nil` if none of these methods has completed successfully at least once. If you override any of these methods, you should be sure to set this property in your implementation.

UIKit sets this property before it calls the completion handlers of the [openWithCompletionHandler:](open%28completionhandler_%29.md), [saveToURL:forSaveOperation:completionHandler:](save%28to_for_completionhandler_%29.md), and [revertToContentsOfURL:completionHandler:](revert%28tocontentsof_completionhandler_%29.md). If, outside of these methods or their completion handlers, you want to wait for any pending file operations to complete before you access this property, you can call [performAsynchronousFileAccessUsingBlock:](performasynchronousfileaccess%28__%29.md) and access the property value in the block parameter.

> **Important**

>  This API has the potential of being misused to access device signals to try to identify the device or user, also known as fingerprinting. Regardless of whether a user gives your app permission to track, fingerprinting is not allowed. When you use this API in your app or third-party SDK (an SDK not provided by Apple), declare your usage and the reason for using the API in your app or third-party SDK’s `PrivacyInfo.xcprivacy` file. For more information, including the list of valid reasons for using the API, see [Describing use of required reason API](../../bundleresources/describing-use-of-required-reason-api.md).

## See Also

### Accessing document attributes

- [fileURL](fileurl.md): The file URL you use to initialize the document.
- [localizedName](localizedname.md): The localized name of the document.
- [fileType](filetype.md): The file type of the document.
- [documentState](documentstate.md): The current state of the document.
- [progress](progress.md): The upload or download progress of a document.
