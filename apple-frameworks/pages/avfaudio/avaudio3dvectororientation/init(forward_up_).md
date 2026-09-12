> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudio3dvectororientation/init(forward:up:)](https://developer.apple.com/documentation/avfaudio/avaudio3dvectororientation/init(forward:up:))

# init(forward:up:)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a 3D vector orientation instance using the forward and up vectors you specify.

## Declaration

```swift
init(forward: AVAudio3DVector, up: AVAudio3DVector)
```

## Parameters

- `forward`: The forward vector points in the direction that the listener faces.
- `up`: The up vector is orthogonal to the forward vector and points upward from the listener’s head.

## See Also

### Creating a Vector Orientation

- [init()](init%28%29.md): Creates a 3D vector orientation instance.
- [AVAudioMake3DVectorOrientation(\_:\_:)](../avaudiomake3dvectororientation%28____%29.md): Creates a 3D vector orientation instance using the forward and up vectors you specify.
