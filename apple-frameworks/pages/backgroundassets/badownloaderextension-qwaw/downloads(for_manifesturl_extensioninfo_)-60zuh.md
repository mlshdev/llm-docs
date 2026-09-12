> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownloaderextension-qwaw/downloads(for:manifesturl:extensioninfo:)-60zuh](https://developer.apple.com/documentation/backgroundassets/badownloaderextension-qwaw/downloads(for:manifesturl:extensioninfo:)-60zuh)

# downloads(for:manifestURL:extensionInfo:)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Returns asset-pack downloads to schedule.

## Declaration

```swift
func downloads(for request: BAContentRequest, manifestURL: URL, extensionInfo: BAAppExtensionInfo) -> Set<BADownload>
```

## Parameters

- `request`: The content request.
- `manifestURL`: A file URL to the manifest of asset packs that are available to download.
- `extensionInfo`: Information about the downloader extension.

<a id="return-value"></a>

## Return Value

The downloads to schedule.

<a id="discussion"></a>

## Discussion

> **Warning**

> Don’t override this default implementation.
