> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcomposition/preferredmediaselection](https://developer.apple.com/documentation/avfoundation/avcomposition/preferredmediaselection)

# preferredMediaSelection

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The default media selections for this asset’s media selection groups.

## Declaration

```swift
var preferredMediaSelection: AVMediaSelection { get }
```

<a id="Discussion"></a>

## Discussion

Provides an instance of [AVMediaSelection](../avmediaselection.md) with the default selections for each of the assets media selection groups.

## See Also

### Inspecting preferences

- [preferredRate](preferredrate.md): The asset’s rate preference for playing its media.
- [preferredVolume](preferredvolume.md): The asset’s volume preference for playing its audible media.
- [preferredTransform](preferredtransform.md): The asset’s transform preference to apply to its visual content during presentation or processing.
- [preferredDisplayCriteria](preferreddisplaycriteria.md): The asset’s display mode preference for optimal playback of its content.
