> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiomake3dangularorientation(_:_:_:)](https://developer.apple.com/documentation/avfaudio/avaudiomake3dangularorientation(_:_:_:))

# AVAudioMake3DAngularOrientation(\_:\_:\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a 3D angular orientation using the yaw, pitch, and roll values you specify.

## Declaration

```swift
func AVAudioMake3DAngularOrientation(_ yaw: Float, _ pitch: Float, _ roll: Float) -> AVAudio3DAngularOrientation
```

## Parameters

- `yaw`: The side-to-side movement of the listener’s head.
- `pitch`: The up-and-down movement of the listener’s head.
- `roll`: The tilt of the listener’s head.

<a id="return-value"></a>

## Return Value

A new [AVAudio3DAngularOrientation](avaudio3dangularorientation.md) instance.

## See Also

### Creating an Angular Orientation

- [init()](avaudio3dangularorientation/init%28%29.md): Creates an angular orientation.
- [init(yaw:pitch:roll:)](avaudio3dangularorientation/init%28yaw_pitch_roll_%29.md): Creates a 3D angular orientation using the yaw, pitch, and roll values you specify.

# AVAudioMake3DAngularOrientation (Objective-C)

**Framework:** AVFAudio  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a 3D angular orientation using the yaw, pitch, and roll values you specify.

## Declaration

```objectivec
static AVAudio3DAngularOrientation AVAudioMake3DAngularOrientation(float yaw, float pitch, float roll);
```

## Parameters

- `yaw`: The side-to-side movement of the listener’s head.
- `pitch`: The up-and-down movement of the listener’s head.
- `roll`: The tilt of the listener’s head.

<a id="return-value"></a>

## Return Value

A new [AVAudio3DAngularOrientation](avaudio3dangularorientation.md) instance.
