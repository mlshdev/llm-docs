> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediacommand/enabled(_:)](https://developer.apple.com/documentation/nowplaying/mediacommand/enabled(_:))

# enabled(\_:)

**Framework:** Now Playing  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Sets the enabled state for this command.

## Declaration

```swift
func enabled(_ isEnabled: Bool) -> MediaCommand
```

## Parameters

- `isEnabled`: If `true`, the command is enabled; if `false`, the command is disabled.

## Mentioned In

- [Publishing media sessions](../publishing-media-sessions.md)

## See Also

### Creating commands

- [MediaCommand](../mediacommand.md): A command that describes a media control action for a Now Playing session.
