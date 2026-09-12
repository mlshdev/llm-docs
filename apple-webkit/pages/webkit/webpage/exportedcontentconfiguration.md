> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/exportedcontentconfiguration](https://developer.apple.com/documentation/webkit/webpage/exportedcontentconfiguration)

# WebPage.ExportedContentConfiguration

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A specialized configuration of a specific exportable type that can have specific properties unique to the content type.

## Declaration

```swift
nonisolated struct ExportedContentConfiguration
```

## Topics

### Configurable types

- [WebPage.ExportedContentConfiguration.Region](exportedcontentconfiguration/region.md): Represents a specific semantic region of a webpage.
- [image(region:allowTransparentBackground:snapshotWidth:afterScreenUpdates:)](exportedcontentconfiguration/image%28region_allowtransparentbackground_snapshotwidth_afterscreenupdates_%29.md): A configuration of a webpage for a representation as image data.
- [pdf(region:allowTransparentBackground:)](exportedcontentconfiguration/pdf%28region_allowtransparentbackground_%29.md): A configuration of a webpage for a representation as PDF data.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Exporting webpage content

- [exported(as:)](exported%28as_%29.md): Using the type’s `Transferable` conformance implementation, exports a value as binary data, optionally with a specified configuration for that type of data.
