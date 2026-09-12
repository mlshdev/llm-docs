> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipagecontroltimerprogressdelegate](https://developer.apple.com/documentation/uikit/uipagecontroltimerprogressdelegate)

# UIPageControlTimerProgressDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```swift
protocol UIPageControlTimerProgressDelegate : UIPageControlProgressDelegate
```

## Topics

### Instance Methods

- [pageControlTimerProgress(\_:shouldAdvanceToPage:)](uipagecontroltimerprogressdelegate/pagecontroltimerprogress%28__shouldadvancetopage_%29.md): Determines if the time interval progress should advance to the next page upon progress completion of the current page’s duration. Default is YES.
- [pageControlTimerProgressDidChange(\_:)](uipagecontroltimerprogressdelegate/pagecontroltimerprogressdidchange%28__%29.md): Called when the progress has changed from the time interval progress.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UIPageControlProgressDelegate](uipagecontrolprogressdelegate.md)

## See Also

### Configuring page progress

- [progress](uipagecontrol/progress.md): An object that defines the progress of the page control. Default is nil.
- [UIPageControlProgress](uipagecontrolprogress.md)
- [UIPageControlTimerProgress](uipagecontroltimerprogress.md)
- [UIPageControlProgressDelegate](uipagecontrolprogressdelegate.md)

# UIPageControlTimerProgressDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```objectivec
@protocol UIPageControlTimerProgressDelegate <UIPageControlProgressDelegate>
```

## Topics

### Instance Methods

- [pageControlTimerProgress:shouldAdvanceToPage:](uipagecontroltimerprogressdelegate/pagecontroltimerprogress%28__shouldadvancetopage_%29.md): Determines if the time interval progress should advance to the next page upon progress completion of the current page’s duration. Default is YES.
- [pageControlTimerProgressDidChange:](uipagecontroltimerprogressdelegate/pagecontroltimerprogressdidchange%28__%29.md): Called when the progress has changed from the time interval progress.

## Relationships

### Inherits From

- [UIPageControlProgressDelegate](uipagecontrolprogressdelegate.md)

## See Also

### Configuring page progress

- [progress](uipagecontrol/progress.md): An object that defines the progress of the page control. Default is nil.
- [UIPageControlProgress](uipagecontrolprogress.md)
- [UIPageControlTimerProgress](uipagecontroltimerprogress.md)
- [UIPageControlProgressDelegate](uipagecontrolprogressdelegate.md)
