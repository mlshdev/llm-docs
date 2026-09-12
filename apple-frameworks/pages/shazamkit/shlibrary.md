> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shlibrary](https://developer.apple.com/documentation/shazamkit/shlibrary)

# SHLibrary

**Framework:** ShazamKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An object that represents a user’s synced Shazam library.

## Declaration

```swift
final class SHLibrary
```

## Topics

### Managing the items in the library

- [default](shlibrary/default.md): An instance of the default Shazam library.
- [addItems(\_:)](shlibrary/additems%28__%29.md): Adds an array of media items to the user’s Shazam library.
- [removeItems(\_:)](shlibrary/removeitems%28__%29.md): Removes an array of media items from the user’s Shazam library.
- [items](shlibrary/items.md): The list of synced items in the Media Library.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Update the user’s Shazam library

- [SHMediaLibrary](shmedialibrary.md): Deprecated. An object that represents the user’s Shazam library.
