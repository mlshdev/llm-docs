> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdownloadoption/saveasfilename](https://developer.apple.com/documentation/imagecapturecore/icdownloadoption/saveasfilename)

# saveAsFilename (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The name to be used for the downloaded file.

## Declaration

```swift
static let saveAsFilename: ICDownloadOption
```

<a id="Discussion"></a>

## Discussion

Specify the filename as an [NSString](../../foundation/nsstring.md) object.

## See Also

### Download Options

- [downloadsDirectoryURL](downloadsdirectoryurl.md): A writable directory where the downloaded files should be saved.
- [savedFilename](savedfilename.md): The actual name of the saved file.
- [savedAncillaryFiles](savedancillaryfiles.md): An array of files associated with the file being downloaded.
- [overwrite](overwrite.md): A Boolean value indicating whether the downloaded file should overwrite an existing file with the same name and extension.
- [deleteAfterSuccessfulDownload](deleteaftersuccessfuldownload.md): A Boolean value indicating whether to delete the file from the device after a successful download.
- [sidecarFiles](sidecarfiles.md): A Boolean value indicating whether to download all sidecar files along with the media file.

# ICSaveAsFilename (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The name to be used for the downloaded file.

## Declaration

```objectivec
extern ICDownloadOption const ICSaveAsFilename;
```

<a id="Discussion"></a>

## Discussion

Specify the filename as an [NSString](../../foundation/nsstring.md) object.

## See Also

### Download Options

- [ICDownloadsDirectoryURL](downloadsdirectoryurl.md): A writable directory where the downloaded files should be saved.
- [ICSavedFilename](savedfilename.md): The actual name of the saved file.
- [ICSavedAncillaryFiles](savedancillaryfiles.md): An array of files associated with the file being downloaded.
- [ICOverwrite](overwrite.md): A Boolean value indicating whether the downloaded file should overwrite an existing file with the same name and extension.
- [ICDeleteAfterSuccessfulDownload](deleteaftersuccessfuldownload.md): A Boolean value indicating whether to delete the file from the device after a successful download.
- [ICDownloadSidecarFiles](sidecarfiles.md): A Boolean value indicating whether to download all sidecar files along with the media file.
