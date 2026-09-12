> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanifest/alldownloads(for:)](https://developer.apple.com/documentation/backgroundassets/assetpackmanifest/alldownloads(for:))

# allDownloads(for:)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates download objects for every applicable asset pack in this manifest, which can be scheduled with the download manager.

## Declaration

```swift
func allDownloads(for contentRequest: BAContentRequest?) -> Set<BADownload>
```

## Parameters

- `contentRequest`: The content request for the current extension invocation. Pass `nil` if when calling this method in your main app.

<a id="return-value"></a>

## Return Value

A collection of download objects.
