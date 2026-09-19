> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediadevice/mediadeviceextension/supportssimultaneoussessions

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
