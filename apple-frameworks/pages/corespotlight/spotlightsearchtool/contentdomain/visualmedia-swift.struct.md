> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/contentdomain/visualmedia-swift.struct](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/contentdomain/visualmedia-swift.struct)

# SpotlightSearchTool.ContentDomain.VisualMedia

**Framework:** CoreSpotlight  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Attribute mapping for the visual media domain.

## Declaration

```swift
struct VisualMedia
```

## Topics

### Configuring the domain

- [init(people:description:location:date:)](visualmedia-swift.struct/init%28people_description_location_date_%29.md)

### Getting the domain attributes

- [date](visualmedia-swift.struct/date.md): Attributes queried for the capture date. Default: [contentCreationDate](../../searchableitemattribute/contentcreationdate.md)
- [description](visualmedia-swift.struct/description.md): Attributes queried for visual content description.
- [location](visualmedia-swift.struct/location.md): Attributes queried for the location. Default: [city](../../searchableitemattribute/city.md)
- [people](visualmedia-swift.struct/people.md): Attributes queried for people appearing in images/video. Default: [identifier](../../searchableitemattribute/identifier.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the visual media domain

- [visualMedia](visualmedia-swift.type.property.md): Photos, videos, and other visual content.
- [visualMedia(\_:)](visualmedia%28__%29.md): Photos, videos, and other visual content with custom attribute mapping.
