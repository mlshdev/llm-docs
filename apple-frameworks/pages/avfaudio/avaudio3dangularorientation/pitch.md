> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudio3dangularorientation/pitch](https://developer.apple.com/documentation/avfaudio/avaudio3dangularorientation/pitch)

# pitch (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The up-and-down movement of the listener’s head.

## Declaration

```swift
var pitch: Float
```

<a id="Discussion"></a>

## Discussion

The pitch axis describes the up-and-down movement of the listener’s head, and is perpendicular to the yaw axis. It’s parallel to the plane of the listener’s ears. Its origin is at the center of the listener’s head and points toward the right ear. A positive pitch is the upward direction going from `0` to `180` degrees. A negative pitch is in the downward direction going from `0` to `-180` degrees.

## See Also

### Getting Angular Orientation Properties

- [yaw](yaw.md): The side-to-side movement of the listener’s head.
- [roll](roll.md): The tilt of the listener’s head.

# pitch (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The up-and-down movement of the listener’s head.

## Declaration

```objectivec
float pitch;
```

<a id="Discussion"></a>

## Discussion

The pitch axis describes the up-and-down movement of the listener’s head, and is perpendicular to the yaw axis. It’s parallel to the plane of the listener’s ears. Its origin is at the center of the listener’s head and points toward the right ear. A positive pitch is the upward direction going from `0` to `180` degrees. A negative pitch is in the downward direction going from `0` to `-180` degrees.

## See Also

### Getting Angular Orientation Properties

- [yaw](yaw.md): The side-to-side movement of the listener’s head.
- [roll](roll.md): The tilt of the listener’s head.
