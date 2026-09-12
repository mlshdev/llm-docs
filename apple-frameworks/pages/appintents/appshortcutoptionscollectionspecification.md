> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appshortcutoptionscollectionspecification](https://developer.apple.com/documentation/appintents/appshortcutoptionscollectionspecification)

# AppShortcutOptionsCollectionSpecification

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

## Declaration

```swift
protocol AppShortcutOptionsCollectionSpecification<Value> : Sendable, Sequence where Self.Element == any AppShortcutOptionsCollectionProtocol
```

## Topics

### Associated Types

- [Value](appshortcutoptionscollectionspecification/value.md)

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### App Shortcut options

- [AppShortcutOptionsCollection](appshortcutoptionscollection.md): Represents a collection of options for parameters of an App Shortcut.
- [AppShortcutOptionsCollectionProtocol](appshortcutoptionscollectionprotocol.md)
- [AppShortcutOptionsCollectionSpecificationBuilder](appshortcutoptionscollectionspecificationbuilder.md)
