> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturereactiontype](https://developer.apple.com/documentation/avfoundation/avcapturereactiontype)

# AVCaptureReactionType (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Constants that indicate the type of reaction that an effect can perform.

## Declaration

```swift
struct AVCaptureReactionType
```

## Topics

### Reaction types

- [balloons](avcapturereactiontype/balloons.md): A reaction that displays balloons rising through the scene.
- [confetti](avcapturereactiontype/confetti.md): A reaction that displays festive spots of color falling through the scene.
- [fireworks](avcapturereactiontype/fireworks.md): A reaction that displays fireworks bursting in the background.
- [heart](avcapturereactiontype/heart.md): A reaction that displays one or more heart symbols.
- [lasers](avcapturereactiontype/lasers.md): A reaction that displays a bright laser show projecting into the scene.
- [rain](avcapturereactiontype/rain.md): A reaction that displays a dark and stormy night.
- [thumbsUp](avcapturereactiontype/thumbsup.md): A reaction that displays a thumbs-up symbol.
- [thumbsDown](avcapturereactiontype/thumbsdown.md): A reaction that displays a thumbs-down symbol.

### Accessing the system image name

- [systemImageName](avcapturereactiontype/systemimagename.md): Returns the name of a system image that displays the recommended iconography for a specified reaction type.

### Initializers

- [init(rawValue:)](avcapturereactiontype/init%28rawvalue_%29.md): Creates a reaction type with a string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the effect state

- [reactionType](avcapturereactioneffectstate/reactiontype.md): The type of reaction.
- [startTime](avcapturereactioneffectstate/starttime.md): The presentation time of the first frame where the system renders the effect.
- [endTime](avcapturereactioneffectstate/endtime.md): The presentation time of the first frame following the end of a reaction effect.

# AVCaptureReactionType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Constants that indicate the type of reaction that an effect can perform.

## Declaration

```objectivec
typedef NSString * AVCaptureReactionType;
```

## Topics

### Reaction types

- [AVCaptureReactionTypeBalloons](avcapturereactiontype/balloons.md): A reaction that displays balloons rising through the scene.
- [AVCaptureReactionTypeConfetti](avcapturereactiontype/confetti.md): A reaction that displays festive spots of color falling through the scene.
- [AVCaptureReactionTypeFireworks](avcapturereactiontype/fireworks.md): A reaction that displays fireworks bursting in the background.
- [AVCaptureReactionTypeHeart](avcapturereactiontype/heart.md): A reaction that displays one or more heart symbols.
- [AVCaptureReactionTypeLasers](avcapturereactiontype/lasers.md): A reaction that displays a bright laser show projecting into the scene.
- [AVCaptureReactionTypeRain](avcapturereactiontype/rain.md): A reaction that displays a dark and stormy night.
- [AVCaptureReactionTypeThumbsUp](avcapturereactiontype/thumbsup.md): A reaction that displays a thumbs-up symbol.
- [AVCaptureReactionTypeThumbsDown](avcapturereactiontype/thumbsdown.md): A reaction that displays a thumbs-down symbol.

### Accessing the system image name

- [AVCaptureReactionSystemImageNameForType](avcapturereactiontype/systemimagename.md): Returns the name of a system image that displays the recommended iconography for a specified reaction type.

## See Also

### Configuring the effect state

- [reactionType](avcapturereactioneffectstate/reactiontype.md): The type of reaction.
- [startTime](avcapturereactioneffectstate/starttime.md): The presentation time of the first frame where the system renders the effect.
- [endTime](avcapturereactioneffectstate/endtime.md): The presentation time of the first frame following the end of a reaction effect.
