> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/relevantentities](https://developer.apple.com/documentation/appintents/relevantentities)

# RelevantEntities

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type you use to donate your app’s songs, albums, artists, and other media items to play during workouts.

## Declaration

```swift
struct RelevantEntities
```

## Mentioned In

- [Donating your app’s data and actions to the system](donating-your-apps-data-and-actions-to-the-system.md)

<a id="overview"></a>

## Overview

Use the shared `RelevantEntities` object to donate songs, albums, artists, playlists, radio stations, podcasts, or other media-related content to the system. Base your donations on whatever criteria makes sense for your app. For example, you might donate songs that someone listens to frequently or donate new items that you think someone might like based on their tastes. The system uses your donations to offer suggestions for content someone can play during a workout or other scenario.

When you donate media items using this type, provide all the items at once using the `RelevantEntities/updateSuggestedEntities(_:)` method. Apps provide only one set of suggestions at a time, and those suggestions remain active until you clear them. Each time you call the `RelevantEntities/updateSuggestedEntities(_:)` method, the system replaces your app’s previous suggestions with the new set. If you don’t have any suggestions, you can specify an empty array when calling the method. If someone doesn’t launch your app, the system automatically expires your app’s suggestions after approximately four weeks.

## Topics

### Getting the shared type

- [shared](relevantentities/shared.md): The shared instance of this class.

### Donating entities

- [updateEntities(\_:for:)](relevantentities/updateentities%28__for_%29.md): Donates suggested entities for a single context.

### Removing the current donations

- [removeAllEntities()](relevantentities/removeallentities%28%29.md): Removes all suggested entities across all contexts.
- [removeAllEntities(for:)](relevantentities/removeallentities%28for_%29.md): Removes all donated entities for the given context.
- [removeEntities(\_:)](relevantentities/removeentities%28__%29.md): Removes the specified entities across all contexts.
- [removeEntities(\_:from:)](relevantentities/removeentities%28__from_%29.md): Removes specific entities from the given context.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Entity relevance

- [AppEntityContext](appentitycontext.md): The context used to scope suggested entity donations to a specific domain.
- [AudioContext](audiocontext.md): Specifies the type of audio activity to associate with a suggested entity, allowing the system to surface relevant suggestions at the right moment.
