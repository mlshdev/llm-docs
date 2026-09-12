> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdownloadoption/downloadsdirectoryurl](https://developer.apple.com/documentation/imagecapturecore/icdownloadoption/downloadsdirectoryurl)

# downloadsDirectoryURL (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A writable directory where the downloaded files should be saved.

## Declaration

```swift
static let downloadsDirectoryURL: ICDownloadOption
```

<a id="Discussion"></a>

## Discussion

Specify the directory as an [NSURL](../../foundation/nsurl.md) object.

## See Also

### Download Options

- [saveAsFilename](saveasfilename.md): The name to be used for the downloaded file.
- [savedFilename](savedfilename.md): The actual name of the saved file.
- [savedAncillaryFiles](savedancillaryfiles.md): An array of files associated with the file being downloaded.
- [overwrite](overwrite.md): A Boolean value indicating whether the downloaded file should overwrite an existing file with the same name and extension.
- [deleteAfterSuccessfulDownload](deleteaftersuccessfuldownload.md): A Boolean value indicating whether to delete the file from the device after a successful download.
- [sidecarFiles](sidecarfiles.md): A Boolean value indicating whether to download all sidecar files along with the media file.

# ICDownloadsDirectoryURL (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A writable directory where the downloaded files should be saved.

## Declaration

```objectivec
extern ICDownloadOption const ICDownloadsDirectoryURL;
```

<a id="Discussion"></a>

## Discussion

Specify the directory as an [NSURL](../../foundation/nsurl.md) object.

## See Also

### Download Options

- [ICSaveAsFilename](saveasfilename.md): The name to be used for the downloaded file.
- [ICSavedFilename](savedfilename.md): The actual name of the saved file.
- [ICSavedAncillaryFiles](savedancillaryfiles.md): An array of files associated with the file being downloaded.
- [ICOverwrite](overwrite.md): A Boolean value indicating whether the downloaded file should overwrite an existing file with the same name and extension.
- [ICDeleteAfterSuccessfulDownload](deleteaftersuccessfuldownload.md): A Boolean value indicating whether to delete the file from the device after a successful download.
- [ICDownloadSidecarFiles](sidecarfiles.md): A Boolean value indicating whether to download all sidecar files along with the media file.
