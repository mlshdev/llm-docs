> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musickit/musicsubscription](https://developer.apple.com/documentation/musickit/musicsubscription)

# MusicSubscription

**Framework:** MusicKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A representation of the current state of the user’s subscription to Apple Music.

## Declaration

```swift
struct MusicSubscription
```

## Topics

### Structures

- [MusicSubscription.Updates](musicsubscription/updates.md): An asynchronous sequence to use for observing updates to the current state of the user’s subscription to Apple Music.

### Instance Properties

- [canBecomeSubscriber](musicsubscription/canbecomesubscriber.md): A capability that allows your app to present subscription offers for Apple Music.
- [canPlayCatalogContent](musicsubscription/canplaycatalogcontent.md): A capability that allows your app to play subscription content using a music player.
- [hasCloudLibraryEnabled](musicsubscription/hascloudlibraryenabled.md): A capability that allows your app to perform modifications to the user’s iCloud Music Library.

### Type Properties

- [current](musicsubscription/current.md): The current state of the user’s subscription to Apple Music.
- [subscriptionUpdates](musicsubscription/subscriptionupdates.md): An asynchronous sequence to use for observing updates to the current state of the user’s subscription to Apple Music.

### Enumerations

- [MusicSubscription.Error](musicsubscription/error.md): An error that MusicKit can throw upon requesting the current music subscription of the user.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Apple Music Subscription

- [MusicSubscriptionOffer](musicsubscriptionoffer.md): A type for grouping other types for showing subscription offers for Apple Music.
