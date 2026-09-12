> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiomake3dpoint(_:_:_:)](https://developer.apple.com/documentation/avfaudio/avaudiomake3dpoint(_:_:_:))

# AVAudioMake3DPoint(\_:\_:\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a 3D point using the x, y, and z coordinates you specify.

## Declaration

```swift
func AVAudioMake3DPoint(_ x: Float, _ y: Float, _ z: Float) -> AVAudio3DPoint
```

## Parameters

- `x`: The location on the x-axis, in meters.
- `y`: The location on the y-axis, in meters.
- `z`: The location on the z-axis, in meters.

<a id="return-value"></a>

## Return Value

A new [AVAudio3DPoint](avaudio3dpoint.md) instance.

## See Also

### Creating a Point

- [init()](avaudio3dpoint/init%28%29.md): Creates a 3D point.
- [init(x:y:z:)](avaudio3dpoint/init%28x_y_z_%29.md): Creates a 3D point using the x, y, and z coordinates you specify.

# AVAudioMake3DPoint (Objective-C)

**Framework:** AVFAudio  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a 3D point using the x, y, and z coordinates you specify.

## Declaration

```objectivec
static AVAudio3DPoint AVAudioMake3DPoint(float x, float y, float z);
```

## Parameters

- `x`: The location on the x-axis, in meters.
- `y`: The location on the y-axis, in meters.
- `z`: The location on the z-axis, in meters.

<a id="return-value"></a>

## Return Value

A new [AVAudio3DPoint](avaudio3dpoint.md) instance.
