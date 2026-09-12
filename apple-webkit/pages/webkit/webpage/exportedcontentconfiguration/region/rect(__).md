> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/exportedcontentconfiguration/region/rect(_:)](https://developer.apple.com/documentation/webkit/webpage/exportedcontentconfiguration/region/rect(_:))

# rect(\_:)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A region that corresponds to a rectangle in the page’s coordinate system.

## Declaration

```swift
static func rect(_ rect: CGRect) -> WebPage.ExportedContentConfiguration.Region
```

## Parameters

- `rect`: The rectangle to use for the region.

<a id="return-value"></a>

## Return Value

A [WebPage.ExportedContentConfiguration.Region](../region.md) that uses the specified rectangle.
