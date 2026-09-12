> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioenvironmentnode/listenervectororientation](https://developer.apple.com/documentation/avfaudio/avaudioenvironmentnode/listenervectororientation)

# listenerVectorOrientation (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The listener’s vector orientation in the environment.

## Declaration

```swift
var listenerVectorOrientation: AVAudio3DVectorOrientation { get set }
```

<a id="Discussion"></a>

## Discussion

The default orientation is with the listener looking directly along the negative z-axis (forward).

The node expresses a forward vector orientation as `(0, 0, -1)`, and an up vector as `(0, 1, 0)`.

Changing this property results in a corresponding change in the [listenerAngularOrientation](listenerangularorientation.md) property.

## See Also

### Getting and Setting Positional Properties

- [listenerPosition](listenerposition.md): The listener’s position in the 3D environment.
- [listenerAngularOrientation](listenerangularorientation.md): The listener’s angular orientation in the environment.

# listenerVectorOrientation (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The listener’s vector orientation in the environment.

## Declaration

```objectivec
@property (nonatomic) AVAudio3DVectorOrientation listenerVectorOrientation;
```

<a id="Discussion"></a>

## Discussion

The default orientation is with the listener looking directly along the negative z-axis (forward).

The node expresses a forward vector orientation as `(0, 0, -1)`, and an up vector as `(0, 1, 0)`.

Changing this property results in a corresponding change in the [listenerAngularOrientation](listenerangularorientation.md) property.

## See Also

### Getting and Setting Positional Properties

- [listenerPosition](listenerposition.md): The listener’s position in the 3D environment.
- [listenerAngularOrientation](listenerangularorientation.md): The listener’s angular orientation in the environment.
