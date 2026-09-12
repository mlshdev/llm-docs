> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/exportedcontentconfiguration/pdf(region:allowtransparentbackground:)](https://developer.apple.com/documentation/webkit/webpage/exportedcontentconfiguration/pdf(region:allowtransparentbackground:))

# pdf(region:allowTransparentBackground:)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A configuration of a webpage for a representation as PDF data.

## Declaration

```swift
static func pdf(region: WebPage.ExportedContentConfiguration.Region = .contents, allowTransparentBackground: Bool = false) -> WebPage.ExportedContentConfiguration
```

## Parameters

- `region`: The region of the page used to generate the PDF.
- `allowTransparentBackground`: Indicates whether the PDF may have a transparent background.

<a id="return-value"></a>

## Return Value

The PDF configuration of this page that will be used when producing its representation.

## See Also

### Configurable types

- [WebPage.ExportedContentConfiguration.Region](region.md): Represents a specific semantic region of a webpage.
- [image(region:allowTransparentBackground:snapshotWidth:afterScreenUpdates:)](image%28region_allowtransparentbackground_snapshotwidth_afterscreenupdates_%29.md): A configuration of a webpage for a representation as image data.
