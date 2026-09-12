> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaudiosource/ispositional](https://developer.apple.com/documentation/scenekit/scnaudiosource/ispositional)

# isPositional (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether audio from this source uses 3D positional mixing.

## Declaration

```swift
var isPositional: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this value is [true](https://developer.apple.com/documentation/swift/true) (the default), SceneKit mixes audio from the source based on its position relative to the scene’s [audioListener](../scnscenerenderer/audiolistener.md) node—that is, the audio source’s volume, reverb, and other parameters automatically change depending on the distance to the listener and other objects in the scene. (To position an audio source in a scene, create an [SCNAudioPlayer](../scnaudioplayer.md) player from the source and attach that player to an [SCNNode](../scnnode.md) object.)

If you set this property to [false](https://developer.apple.com/documentation/swift/false), the source’s audio plays with the same volume (and other mixing parameters) regardless of the listener’s position.

# positional (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether audio from this source uses 3D positional mixing.

## Declaration

```objectivec
@property (nonatomic, getter=isPositional) BOOL positional;
```

<a id="Discussion"></a>

## Discussion

If this value is [true](https://developer.apple.com/documentation/swift/true) (the default), SceneKit mixes audio from the source based on its position relative to the scene’s [audioListener](../scnscenerenderer/audiolistener.md) node—that is, the audio source’s volume, reverb, and other parameters automatically change depending on the distance to the listener and other objects in the scene. (To position an audio source in a scene, create an [SCNAudioPlayer](../scnaudioplayer.md) player from the source and attach that player to an [SCNNode](../scnnode.md) object.)

If you set this property to [false](https://developer.apple.com/documentation/swift/false), the source’s audio plays with the same volume (and other mixing parameters) regardless of the listener’s position.
