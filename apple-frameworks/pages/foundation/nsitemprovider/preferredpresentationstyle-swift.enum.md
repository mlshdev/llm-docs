> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/preferredpresentationstyle-swift.enum](https://developer.apple.com/documentation/foundation/nsitemprovider/preferredpresentationstyle-swift.enum)

# NSItemProvider.PreferredPresentationStyle

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

The presentation styles that determine how a view shows an item provider’s data.

## Declaration

```swift
enum PreferredPresentationStyle
```

## Topics

### Presentation Styles

- [NSItemProvider.PreferredPresentationStyle.unspecified](preferredpresentationstyle-swift.enum/unspecified.md): A presentation style indicating that no preferred style is specified.
- [NSItemProvider.PreferredPresentationStyle.inline](preferredpresentationstyle-swift.enum/inline.md): A presentation style indicating that the item provider data should be presented inline.
- [NSItemProvider.PreferredPresentationStyle.attachment](preferredpresentationstyle-swift.enum/attachment.md): A presentation style indicating that the item provider data should be presented as an attachment.

### Initializers

- [init(rawValue:)](preferredpresentationstyle-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the provider

- [preferredPresentationSize](preferredpresentationsize.md): The ideal presentation size of the item.
- [preferredPresentationStyle](preferredpresentationstyle-swift.property.md): The preferred style for presenting the item provider’s data.
- [suggestedName](suggestedname.md): The filename to use when writing the provided data to a file on disk.
- [teamData](teamdata.md): The collection of data an app uses to hold private team information during drag and drop.
