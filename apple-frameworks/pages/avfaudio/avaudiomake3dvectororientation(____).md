> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiomake3dvectororientation(_:_:)](https://developer.apple.com/documentation/avfaudio/avaudiomake3dvectororientation(_:_:))

# AVAudioMake3DVectorOrientation(\_:\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a 3D vector orientation instance using the forward and up vectors you specify.

## Declaration

```swift
func AVAudioMake3DVectorOrientation(_ forward: AVAudio3DVector, _ up: AVAudio3DVector) -> AVAudio3DVectorOrientation
```

## Parameters

- `forward`: The forward vector points in the direction that the listener faces.
- `up`: The up vector is orthogonal to the forward vector and points upward from the listener’s head.

<a id="return-value"></a>

## Return Value

A new [AVAudioMake3DVectorOrientation(\_:\_:)](avaudiomake3dvectororientation%28____%29.md) object.

## See Also

### Creating a Vector Orientation

- [init()](avaudio3dvectororientation/init%28%29.md): Creates a 3D vector orientation instance.
- [init(forward:up:)](avaudio3dvectororientation/init%28forward_up_%29.md): Creates a 3D vector orientation instance using the forward and up vectors you specify.

# AVAudioMake3DVectorOrientation (Objective-C)

**Framework:** AVFAudio  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a 3D vector orientation instance using the forward and up vectors you specify.

## Declaration

```objectivec
static AVAudio3DVectorOrientation AVAudioMake3DVectorOrientation(AVAudio3DVector forward, AVAudio3DVector up);
```

## Parameters

- `forward`: The forward vector points in the direction that the listener faces.
- `up`: The up vector is orthogonal to the forward vector and points upward from the listener’s head.

<a id="return-value"></a>

## Return Value

A new [AVAudioMake3DVectorOrientation](avaudiomake3dvectororientation%28____%29.md) object.
