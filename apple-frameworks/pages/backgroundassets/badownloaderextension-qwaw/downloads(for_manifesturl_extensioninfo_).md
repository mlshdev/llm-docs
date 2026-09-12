> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownloaderextension-qwaw/downloads(for:manifesturl:extensioninfo:)](https://developer.apple.com/documentation/backgroundassets/badownloaderextension-qwaw/downloads(for:manifesturl:extensioninfo:))

# downloads(for:manifestURL:extensionInfo:)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

## Declaration

```swift
func downloads(for request: BAContentRequest, manifestURL: URL, extensionInfo: BAAppExtensionInfo) -> Set<BADownload>
```

## Default Implementations

### BADownloaderExtension Implementations

- [downloads(for:manifestURL:extensionInfo:)](downloads%28for_manifesturl_extensioninfo_%29-60zuh.md): Returns asset-pack downloads to schedule.
- [downloads(for:manifestURL:extensionInfo:)](downloads%28for_manifesturl_extensioninfo_%29-7zv3a.md): Invoked by the system when the extension should check for updated content. This method will be invoked by the system upon requested events defined in `BAContentRequest`. This method should return a set of all `BAURLDownload`’s that your extension would like to schedule. During the invocation of this method, `BADownloadManager` will prohibit the ability to schedule additional downloads until this method exits scope. Therefore, all downloads needing to be scheduled should be returned here. If a download fails, it can be rescheduled using `BADownloadManager` in any other method in this protocol.

## See Also

### Checking for asset updates

- [BAContentRequest](../bacontentrequest.md): A type that indicates the purpose of a content download request.
- [BAAppExtensionInfo](../baappextensioninfo.md)
