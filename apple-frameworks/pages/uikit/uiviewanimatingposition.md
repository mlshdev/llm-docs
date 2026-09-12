> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewanimatingposition](https://developer.apple.com/documentation/uikit/uiviewanimatingposition)

# UIViewAnimatingPosition (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Constants indicating positions within the animation.

## Declaration

```swift
enum UIViewAnimatingPosition
```

## Topics

### Constants

- [UIViewAnimatingPosition.end](uiviewanimatingposition/end.md): The end point of the animation. Use this constant when you want the final values for any animatable properties—that is, you want to refer to the values you specified in your animation blocks.
- [UIViewAnimatingPosition.start](uiviewanimatingposition/start.md): The beginning of the animation. Use this constant when you want the starting values for any animatable properties—that is, the values of the properties before you applied any animations.
- [UIViewAnimatingPosition.current](uiviewanimatingposition/current.md): The current position. Use this constant when you want the most recent value set by an animator object.

### Initializers

- [init(rawValue:)](uiviewanimatingposition/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [UIViewAnimatingState](uiviewanimatingstate.md): Constants indicating the current state of the animation.

# UIViewAnimatingPosition (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Constants indicating positions within the animation.

## Declaration

```objectivec
enum UIViewAnimatingPosition : NSInteger;
```

## Topics

### Constants

- [UIViewAnimatingPositionEnd](uiviewanimatingposition/end.md): The end point of the animation. Use this constant when you want the final values for any animatable properties—that is, you want to refer to the values you specified in your animation blocks.
- [UIViewAnimatingPositionStart](uiviewanimatingposition/start.md): The beginning of the animation. Use this constant when you want the starting values for any animatable properties—that is, the values of the properties before you applied any animations.
- [UIViewAnimatingPositionCurrent](uiviewanimatingposition/current.md): The current position. Use this constant when you want the most recent value set by an animator object.

## See Also

### Constants

- [UIViewAnimatingState](uiviewanimatingstate.md): Constants indicating the current state of the animation.
