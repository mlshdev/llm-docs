> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/downloadableassetsrequest/downloadassets()](https://developer.apple.com/documentation/vision/downloadableassetsrequest/downloadassets())

# downloadAssets()

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Downloads the assets required to perform the request.

## Declaration

```swift
func downloadAssets() async throws
```

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the download fails.

## Default Implementations

### DownloadableAssetsRequest Implementations

- [downloadAssets()](downloadassets%28%29-8lzdp.md): Downloads the assets required to perform the request.

## See Also

### Downloading assets

- [downloadAssets(progress:)](downloadassets%28progress_%29.md): Downloads the assets required to perform the request, reporting progress through the provided subprogress.
