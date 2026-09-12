> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/exportedcontentconfiguration/image(region:allowtransparentbackground:snapshotwidth:afterscreenupdates:)](https://developer.apple.com/documentation/webkit/webpage/exportedcontentconfiguration/image(region:allowtransparentbackground:snapshotwidth:afterscreenupdates:))

# image(region:allowTransparentBackground:snapshotWidth:afterScreenUpdates:)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A configuration of a webpage for a representation as image data.

## Declaration

```swift
static func image(region: WebPage.ExportedContentConfiguration.Region = .contents, allowTransparentBackground: Bool = false, snapshotWidth: CGFloat? = nil, afterScreenUpdates: Bool = true) -> WebPage.ExportedContentConfiguration
```

## Parameters

- `region`: The region of the page used to generate the image.
- `allowTransparentBackground`: Indicates whether the image may have a transparent background.
- `snapshotWidth`: The width of the captured image, in points.

  Use this property to scale the generated image to the specified width. The webpage maintains the aspect ratio of the captured content, but scales it to match the width you specify.

  The default value of this parameter is `nil`, which returns an image whose size matches the original size of the captured region.
- `afterScreenUpdates`: Indicates whether to take the snapshot after incorporating any pending screen updates.

<a id="return-value"></a>

## Return Value

The image configuration of this page that will be used when producing its representation.

## See Also

### Configurable types

- [WebPage.ExportedContentConfiguration.Region](region.md): Represents a specific semantic region of a webpage.
- [pdf(region:allowTransparentBackground:)](pdf%28region_allowtransparentbackground_%29.md): A configuration of a webpage for a representation as PDF data.
