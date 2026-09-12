> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioenvironmentnode/listenerangularorientation](https://developer.apple.com/documentation/avfaudio/avaudioenvironmentnode/listenerangularorientation)

# listenerAngularOrientation (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The listener’s angular orientation in the environment.

## Declaration

```swift
var listenerAngularOrientation: AVAudio3DAngularOrientation { get set }
```

<a id="Discussion"></a>

## Discussion

The system specifies all angles in degrees.

The default orientation is with the listener looking directly along the negative z-axis (forward). This orientation has a yaw of `0.0` degrees, a pitch of `0.0` degrees, and a roll of `0.0` degrees.

Changing this property results in a corresponding change in the [listenerVectorOrientation](listenervectororientation.md) property.

## See Also

### Getting and Setting Positional Properties

- [listenerPosition](listenerposition.md): The listener’s position in the 3D environment.
- [listenerVectorOrientation](listenervectororientation.md): The listener’s vector orientation in the environment.

# listenerAngularOrientation (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The listener’s angular orientation in the environment.

## Declaration

```objectivec
@property (nonatomic) AVAudio3DAngularOrientation listenerAngularOrientation;
```

<a id="Discussion"></a>

## Discussion

The system specifies all angles in degrees.

The default orientation is with the listener looking directly along the negative z-axis (forward). This orientation has a yaw of `0.0` degrees, a pitch of `0.0` degrees, and a roll of `0.0` degrees.

Changing this property results in a corresponding change in the [listenerVectorOrientation](listenervectororientation.md) property.

## See Also

### Getting and Setting Positional Properties

- [listenerPosition](listenerposition.md): The listener’s position in the 3D environment.
- [listenerVectorOrientation](listenervectororientation.md): The listener’s vector orientation in the environment.
