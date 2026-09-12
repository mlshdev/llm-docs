> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/previewapplication/open(urls:selectedurl:)](https://developer.apple.com/documentation/quicklook/previewapplication/open(urls:selectedurl:))

# open(urls:selectedURL:)

**Framework:** Quick Look  
**Kind:** Type Method  
**Availability:** visionOS 2.0+

Previews the provided URLs.

## Declaration

```swift
final class func open(urls: [URL], selectedURL: URL? = nil) -> PreviewSession
```

## Parameters

- `urls`: An array of URLs to present in the new `PreviewApplication` scene.
- `selectedURL`: If provided and in the array of passed URLs, the URL to select in the presented collection..

<a id="return-value"></a>

## Return Value

A `PreviewSession` instance.

<a id="discussion"></a>

## Discussion

This method launches the preview application with the provided URLs and, optionally, a selected URL.
