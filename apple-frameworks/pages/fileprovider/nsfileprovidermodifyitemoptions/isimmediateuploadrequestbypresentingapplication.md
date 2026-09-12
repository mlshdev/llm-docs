> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermodifyitemoptions/isimmediateuploadrequestbypresentingapplication](https://developer.apple.com/documentation/fileprovider/nsfileprovidermodifyitemoptions/isimmediateuploadrequestbypresentingapplication)

# isImmediateUploadRequestByPresentingApplication (Swift)

**Framework:** File Provider  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

An option to require the upload to complete before calling the completion handler.

## Declaration

```swift
static var isImmediateUploadRequestByPresentingApplication: NSFileProviderModifyItemOptions { get }
```

<a id="discussion"></a>

## Discussion

This option allows the calling application to know when the uploaded version of the file is on the server.

# NSFileProviderModifyItemIsImmediateUploadRequestByPresentingApplication (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · macOS 26.0+ · visionOS 26.0+

An option to require the upload to complete before calling the completion handler.

## Declaration

```objectivec
NSFileProviderModifyItemIsImmediateUploadRequestByPresentingApplication
```

<a id="discussion"></a>

## Discussion

This option allows the calling application to know when the uploaded version of the file is on the server.
