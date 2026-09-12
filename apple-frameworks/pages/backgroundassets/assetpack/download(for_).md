> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpack/download(for:)](https://developer.apple.com/documentation/backgroundassets/assetpack/download(for:))

# download(for:)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a download object for the asset pack that you schedule using a download manager.

## Declaration

```swift
func download(for contentRequest: BAContentRequest?) -> BADownload
```

## Parameters

- `contentRequest`: The content request for the current extension invocation. Pass `nil` if you’re calling this method in your main app.

<a id="return-value"></a>

## Return Value

A download object.

## See Also

### Downloading assets

- [downloadSize](downloadsize.md): The size of the download file containing the asset pack in bytes.
