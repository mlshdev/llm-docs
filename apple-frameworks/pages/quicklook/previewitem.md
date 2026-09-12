> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/previewitem](https://developer.apple.com/documentation/quicklook/previewitem)

# PreviewItem

**Framework:** Quick Look  
**Kind:** Structure  
**Availability:** visionOS 2.0+

An item to preview in the preview application.

## Declaration

```swift
struct PreviewItem
```

## Topics

### Operators

- [==(\_:\_:)](previewitem/==%28____%29.md): Returns a Boolean value that indicates whether two preview items are equal.

### Initializers

- [init(url:displayName:editingMode:)](previewitem/init%28url_displayname_editingmode_%29.md): Create a preview item from a URL and, optionally, a displayName and editingMode.

### Instance Properties

- [displayName](previewitem/displayname.md): An optional display name to present for the preview item.
- [editingMode](previewitem/editingmode.md): The editingMode for the preview item.
- [id](previewitem/id.md): The stable identity of the preview item.

### Instance Methods

- [hash(into:)](previewitem/hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
