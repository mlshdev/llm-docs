> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appentitycontext](https://developer.apple.com/documentation/appintents/appentitycontext)

# AppEntityContext

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The context used to scope suggested entity donations to a specific domain.

## Declaration

```swift
struct AppEntityContext
```

<a id="overview"></a>

## Overview

Pass a `AppEntityContext` when donating or removing entities via [RelevantEntities](relevantentities.md) to associate suggestions with the appropriate part of the app experience.

Use extensions defined by framework overlays (such as the HealthKit overlay) to create context values for specific domains.

## Topics

### Type Methods

- [audio(\_:)](appentitycontext/audio%28__%29.md): An audio-related context.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Entity relevance

- [RelevantEntities](relevantentities.md): A type you use to donate your app’s songs, albums, artists, and other media items to play during workouts.
- [AudioContext](audiocontext.md): Specifies the type of audio activity to associate with a suggested entity, allowing the system to surface relevant suggestions at the right moment.
