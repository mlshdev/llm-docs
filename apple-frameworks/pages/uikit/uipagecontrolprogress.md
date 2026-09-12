> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipagecontrolprogress](https://developer.apple.com/documentation/uikit/uipagecontrolprogress)

# UIPageControlProgress (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```swift
class UIPageControlProgress
```

## Topics

### Instance Properties

- [currentProgress](uipagecontrolprogress/currentprogress.md): The current progress value of the active page control indicator, between 0 and 1. Values outside of \[0…1\] will be clamped.
- [delegate](uipagecontrolprogress/delegate.md): An object that defines the delegate of the page control progress.
- [isProgressVisible](uipagecontrolprogress/isprogressvisible.md): Returns `YES` if the progress indicator is visible. The progress indicator is hidden when the user is actively interacting with the `UIPageControl`.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIPageControlTimerProgress](uipagecontroltimerprogress.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring page progress

- [progress](uipagecontrol/progress.md): An object that defines the progress of the page control. Default is nil.
- [UIPageControlTimerProgress](uipagecontroltimerprogress.md)
- [UIPageControlProgressDelegate](uipagecontrolprogressdelegate.md)
- [UIPageControlTimerProgressDelegate](uipagecontroltimerprogressdelegate.md)

# UIPageControlProgress (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface UIPageControlProgress : NSObject
```

## Topics

### Instance Properties

- [currentProgress](uipagecontrolprogress/currentprogress.md): The current progress value of the active page control indicator, between 0 and 1. Values outside of \[0…1\] will be clamped.
- [delegate](uipagecontrolprogress/delegate.md): An object that defines the delegate of the page control progress.
- [progressVisible](uipagecontrolprogress/isprogressvisible.md): Returns `YES` if the progress indicator is visible. The progress indicator is hidden when the user is actively interacting with the `UIPageControl`.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIPageControlTimerProgress](uipagecontroltimerprogress.md)

## See Also

### Configuring page progress

- [progress](uipagecontrol/progress.md): An object that defines the progress of the page control. Default is nil.
- [UIPageControlTimerProgress](uipagecontroltimerprogress.md)
- [UIPageControlProgressDelegate](uipagecontrolprogressdelegate.md)
- [UIPageControlTimerProgressDelegate](uipagecontroltimerprogressdelegate.md)
