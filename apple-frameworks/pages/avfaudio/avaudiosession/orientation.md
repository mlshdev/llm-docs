> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/orientation](https://developer.apple.com/documentation/avfaudio/avaudiosession/orientation)

# AVAudioSession.Orientation (Swift)

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Constants that indicate the directions in which a data source can point, relative to the device’s natural orientation.

## Declaration

```swift
struct Orientation
```

## Topics

### Creating an Orientation

- [init(rawValue:)](orientation/init%28rawvalue_%29.md): Creates a new instance with the raw value you specify.

### Getting Standard Orientations

- [top](orientation/top.md): A data source that points upward.
- [bottom](orientation/bottom.md): A data source that points downward.
- [front](orientation/front.md): A data source that points outward from the front of the device, toward the user.
- [back](orientation/back.md): A data source that points outward from the back of the device, away from the user.
- [left](orientation/left.md): A data source that points outward to the left of the device, away from the user.
- [right](orientation/right.md): A data source that points outward to the right of the device, away from the user.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Retrieving the Data Source Orientation

- [orientation](../avaudiosessiondatasourcedescription/orientation.md): The orientation of the data source relative to the device’s natural orientation.

# AVAudioSessionOrientation (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that indicate the directions in which a data source can point, relative to the device’s natural orientation.

## Declaration

```objectivec
typedef NSString * AVAudioSessionOrientation;
```

## Topics

### Getting Standard Orientations

- [AVAudioSessionOrientationTop](orientation/top.md): A data source that points upward.
- [AVAudioSessionOrientationBottom](orientation/bottom.md): A data source that points downward.
- [AVAudioSessionOrientationFront](orientation/front.md): A data source that points outward from the front of the device, toward the user.
- [AVAudioSessionOrientationBack](orientation/back.md): A data source that points outward from the back of the device, away from the user.
- [AVAudioSessionOrientationLeft](orientation/left.md): A data source that points outward to the left of the device, away from the user.
- [AVAudioSessionOrientationRight](orientation/right.md): A data source that points outward to the right of the device, away from the user.

## See Also

### Retrieving the Data Source Orientation

- [orientation](../avaudiosessiondatasourcedescription/orientation.md): The orientation of the data source relative to the device’s natural orientation.
