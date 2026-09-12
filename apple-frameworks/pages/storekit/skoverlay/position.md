> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skoverlay/position](https://developer.apple.com/documentation/storekit/skoverlay/position)

# SKOverlay.Position (Swift)

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Constants that identify the position of an overlay on the screen.

## Declaration

```swift
enum Position
```

## Topics

### Describing the Overlay’s Position

- [SKOverlay.Position.bottom](position/bottom.md): Specifies that the overlay is at the bottom of the screen.
- [SKOverlay.Position.bottomRaised](position/bottomraised.md): Specifies that the overlay is at a raised position at the bottom of the screen.

### Initializers

- [init(rawValue:)](position/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating an App Clip Configuration

- [init(position:)](appclipconfiguration/init%28position_%29.md): Creates an object that represents the attributes of an overlay you use to recommend an App Clip’s corresponding app.
- [position](appclipconfiguration/position.md): The position of the overlay on the screen.

# SKOverlayPosition (Objective-C)

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Constants that identify the position of an overlay on the screen.

## Declaration

```objectivec
enum SKOverlayPosition : NSInteger;
```

## Topics

### Describing the Overlay’s Position

- [SKOverlayPositionBottom](position/bottom.md): Specifies that the overlay is at the bottom of the screen.
- [SKOverlayPositionBottomRaised](position/bottomraised.md): Specifies that the overlay is at a raised position at the bottom of the screen.

## See Also

### Creating an App Clip Configuration

- [initWithPosition:](appclipconfiguration/init%28position_%29.md): Creates an object that represents the attributes of an overlay you use to recommend an App Clip’s corresponding app.
- [position](appclipconfiguration/position.md): The position of the overlay on the screen.
