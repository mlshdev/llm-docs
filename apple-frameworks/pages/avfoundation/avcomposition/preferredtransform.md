> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcomposition/preferredtransform](https://developer.apple.com/documentation/avfoundation/avcomposition/preferredtransform)

# preferredTransform

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The asset’s transform preference to apply to its visual content during presentation or processing.

## Declaration

```swift
var preferredTransform: CGAffineTransform { get }
```

<a id="Discussion"></a>

## Discussion

The value is typically, but not always, the identity transform.

## See Also

### Inspecting preferences

- [preferredRate](preferredrate.md): The asset’s rate preference for playing its media.
- [preferredVolume](preferredvolume.md): The asset’s volume preference for playing its audible media.
- [preferredMediaSelection](preferredmediaselection.md): The default media selections for this asset’s media selection groups.
- [preferredDisplayCriteria](preferreddisplaycriteria.md): The asset’s display mode preference for optimal playback of its content.
