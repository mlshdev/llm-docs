> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiswipegesturerecognizer/direction-swift.struct](https://developer.apple.com/documentation/uikit/uiswipegesturerecognizer/direction-swift.struct)

# UISwipeGestureRecognizer.Direction (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The direction of the swipe.

## Declaration

```swift
struct Direction
```

## Topics

### Constants

- [right](direction-swift.struct/right.md): The touch or touches swipe to the right.
- [left](direction-swift.struct/left.md): The touch or touches swipe to the left.
- [up](direction-swift.struct/up.md): The touch or touches swipe upward.
- [down](direction-swift.struct/down.md): The touch or touches swipe downward.

### Initializers

- [init(rawValue:)](direction-swift.struct/init%28rawvalue_%29.md): Creates a swipe direction structure with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Configuring the gesture

- [direction](direction-swift.property.md): The permitted direction of the swipe for this gesture recognizer.
- [numberOfTouchesRequired](numberoftouchesrequired.md): The number of touches necessary for swipe recognition.

# UISwipeGestureRecognizerDirection (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The direction of the swipe.

## Declaration

```objectivec
enum UISwipeGestureRecognizerDirection : NSUInteger;
```

## Topics

### Constants

- [UISwipeGestureRecognizerDirectionRight](direction-swift.struct/right.md): The touch or touches swipe to the right.
- [UISwipeGestureRecognizerDirectionLeft](direction-swift.struct/left.md): The touch or touches swipe to the left.
- [UISwipeGestureRecognizerDirectionUp](direction-swift.struct/up.md): The touch or touches swipe upward.
- [UISwipeGestureRecognizerDirectionDown](direction-swift.struct/down.md): The touch or touches swipe downward.

## See Also

### Configuring the gesture

- [direction](direction-swift.property.md): The permitted direction of the swipe for this gesture recognizer.
- [numberOfTouchesRequired](numberoftouchesrequired.md): The number of touches necessary for swipe recognition.
