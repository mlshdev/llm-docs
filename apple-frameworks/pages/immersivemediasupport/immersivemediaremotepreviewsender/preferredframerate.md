> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivemediaremotepreviewsender/preferredframerate](https://developer.apple.com/documentation/immersivemediasupport/immersivemediaremotepreviewsender/preferredframerate)

# preferredFrameRate

**Framework:** Immersive Media Support  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The preferred frame rate to use when sending and previewing frames. This is optional; a value of `-1` enables the system to decide the best framerate based on network quality.

## Declaration

```swift
var preferredFrameRate: Int { get set }
```
