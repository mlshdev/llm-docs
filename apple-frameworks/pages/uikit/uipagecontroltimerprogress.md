> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipagecontroltimerprogress](https://developer.apple.com/documentation/uikit/uipagecontroltimerprogress)

# UIPageControlTimerProgress (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```swift
class UIPageControlTimerProgress
```

## Topics

### Initializers

- [init(preferredDuration:)](uipagecontroltimerprogress/init%28preferredduration_%29.md): Creates a time interval progress with a specified preferred duration.

### Instance Properties

- [delegate](uipagecontroltimerprogress/delegate.md): An object that defines the delegate of the page control progress.
- [isRunning](uipagecontroltimerprogress/isrunning.md): Returns YES if the timer is currently active.
- [preferredDuration](uipagecontroltimerprogress/preferredduration.md): The preferred duration for the time interval progress, used when there is no custom page duration set for the current page. The preferred duration must be greater than 0.0
- [resetsToInitialPageAfterEnd](uipagecontroltimerprogress/resetstoinitialpageafterend.md): Determines if the page control should loop back to page 0 after the last page. Default is NO.

### Instance Methods

- [duration(forPage:)](uipagecontroltimerprogress/duration%28forpage_%29.md): Returns the duration for the specified page, and `preferredDuration` when there is no custom duration set for the specified page.
- [pauseTimer()](uipagecontroltimerprogress/pausetimer%28%29.md): Pause the timer if it is active.
- [resumeTimer()](uipagecontroltimerprogress/resumetimer%28%29.md): Resume the timer if it is not currently active.
- [setDuration(\_:forPage:)](uipagecontroltimerprogress/setduration%28__forpage_%29.md): Sets a custom duration for the specified page. Set 0.0 to remove the custom duration for the specified page.

## Relationships

### Inherits From

- [UIPageControlProgress](uipagecontrolprogress.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring page progress

- [progress](uipagecontrol/progress.md): An object that defines the progress of the page control. Default is nil.
- [UIPageControlProgress](uipagecontrolprogress.md)
- [UIPageControlProgressDelegate](uipagecontrolprogressdelegate.md)
- [UIPageControlTimerProgressDelegate](uipagecontroltimerprogressdelegate.md)

# UIPageControlTimerProgress (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface UIPageControlTimerProgress : UIPageControlProgress
```

## Topics

### Instance Properties

- [delegate](uipagecontroltimerprogress/delegate.md): An object that defines the delegate of the page control progress.
- [running](uipagecontroltimerprogress/isrunning.md): Returns YES if the timer is currently active.
- [preferredDuration](uipagecontroltimerprogress/preferredduration.md): The preferred duration for the time interval progress, used when there is no custom page duration set for the current page. The preferred duration must be greater than 0.0
- [resetsToInitialPageAfterEnd](uipagecontroltimerprogress/resetstoinitialpageafterend.md): Determines if the page control should loop back to page 0 after the last page. Default is NO.

### Instance Methods

- [durationForPage:](uipagecontroltimerprogress/duration%28forpage_%29.md): Returns the duration for the specified page, and `preferredDuration` when there is no custom duration set for the specified page.
- [initWithPreferredDuration:](uipagecontroltimerprogress/init%28preferredduration_%29.md): Creates a time interval progress with a specified preferred duration.
- [pauseTimer](uipagecontroltimerprogress/pausetimer%28%29.md): Pause the timer if it is active.
- [resumeTimer](uipagecontroltimerprogress/resumetimer%28%29.md): Resume the timer if it is not currently active.
- [setDuration:forPage:](uipagecontroltimerprogress/setduration%28__forpage_%29.md): Sets a custom duration for the specified page. Set 0.0 to remove the custom duration for the specified page.

## Relationships

### Inherits From

- [UIPageControlProgress](uipagecontrolprogress.md)

## See Also

### Configuring page progress

- [progress](uipagecontrol/progress.md): An object that defines the progress of the page control. Default is nil.
- [UIPageControlProgress](uipagecontrolprogress.md)
- [UIPageControlProgressDelegate](uipagecontrolprogressdelegate.md)
- [UIPageControlTimerProgressDelegate](uipagecontroltimerprogressdelegate.md)
