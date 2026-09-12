> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/downloadableassetsrequest/downloadassets(progress:)-3mcyi](https://developer.apple.com/documentation/vision/downloadableassetsrequest/downloadassets(progress:)-3mcyi)

# downloadAssets(progress:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Downloads the assets required to perform the request, reporting progress through the provided subprogress.

## Declaration

```swift
func downloadAssets(progress: consuming Subprogress) async throws
```

## Parameters

- `progress`: A subprogress to which the download progress is attached.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the download fails.
