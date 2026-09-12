> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediasession/init(_:)](https://developer.apple.com/documentation/nowplaying/mediasession/init(_:))

# init(\_:)

**Framework:** Now Playing  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a new local Now Playing session.

## Declaration

```swift
@MainActor init(_ representable: Representable)
```

## Parameters

- `representable`: The session representable that supplies content metadata, playback state, and commands.

<a id="discussion"></a>

## Discussion

The session automatically observes the representable and syncs metadata, commands, and playback state to the system.
