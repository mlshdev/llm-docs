> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediadeviceextension/supportssimultaneoussessions](https://developer.apple.com/documentation/mediadevice/mediadeviceextension/supportssimultaneoussessions)

# supportsSimultaneousSessions

**Framework:** Media Device  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Indicates whether the extension supports handling simultaneous media sessions via `MediaOutputSession`.

## Declaration

```swift
@MainActor var supportsSimultaneousSessions: Bool { get }
```

<a id="discussion"></a>

## Discussion

When `true`, the extension can receive multiple active [MediaOutputSession](../mediaoutputsession.md) instances at once. When `false`, only one session is active at a time.
