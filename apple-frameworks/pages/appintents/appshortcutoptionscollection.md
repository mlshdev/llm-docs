> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/appshortcutoptionscollection

# AppShortcutOptionsCollection

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Represents a collection of options for parameters of an App Shortcut.

## Declaration

```swift
struct AppShortcutOptionsCollection<Provider> where Provider : DynamicOptionsProvider
```

## Topics

### Initializers

- [init(\_:title:systemImageName:)](appshortcutoptionscollection/init%28__title_systemimagename_%29.md): Initializes a collection of options for App Shortcuts with the specified parameters.

## Relationships

### Conforms To

- [AppShortcutOptionsCollectionProtocol](appshortcutoptionscollectionprotocol.md)

## See Also

### App Shortcut options

- [AppShortcutOptionsCollectionProtocol](appshortcutoptionscollectionprotocol.md)
- [AppShortcutOptionsCollectionSpecification](appshortcutoptionscollectionspecification.md)
- [AppShortcutOptionsCollectionSpecificationBuilder](appshortcutoptionscollectionspecificationbuilder.md)
