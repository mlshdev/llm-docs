> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/presentationcommand/shotflip(_:)](https://developer.apple.com/documentation/immersivemediasupport/presentationcommand/shotflip(_:))

# PresentationCommand.shotFlip(\_:)

**Framework:** Immersive Media Support  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A value that represents a command that mirrors a whole frame vertically for the duration of the command.

## Declaration

```swift
case shotFlip(ShotFlipCommand)
```

<a id="discussion"></a>

## Discussion

> **Note**

> The renderer only honors this command on visionOS 27, macOS 27, or later. Earlier runtimes ignore it during playback.
