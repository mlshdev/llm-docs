> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipagecontrolprogressdelegate](https://developer.apple.com/documentation/uikit/uipagecontrolprogressdelegate)

# UIPageControlProgressDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```swift
protocol UIPageControlProgressDelegate : NSObjectProtocol
```

## Topics

### Instance Methods

- [pageControlProgress(\_:initialProgressForPage:)](uipagecontrolprogressdelegate/pagecontrolprogress%28__initialprogressforpage_%29.md): Returns the initial progress (between 0…1) for the specified page. By default, `currentProgress` is set to 0 when the page changes.
- [pageControlProgressVisibilityDidChange(\_:)](uipagecontrolprogressdelegate/pagecontrolprogressvisibilitydidchange%28__%29.md): Called when the page control progress visibility has changed, which could occur when the page control is being interacted with. The page control progress becomes hidden when the user begins to interact with the page control (when it begins continuous interaction), and is visible again when the user stops interacting with the control. Observe the page control progress visibility to pause or resume the paging content.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [UIPageControlTimerProgressDelegate](uipagecontroltimerprogressdelegate.md)

## See Also

### Configuring page progress

- [progress](uipagecontrol/progress.md): An object that defines the progress of the page control. Default is nil.
- [UIPageControlProgress](uipagecontrolprogress.md)
- [UIPageControlTimerProgress](uipagecontroltimerprogress.md)
- [UIPageControlTimerProgressDelegate](uipagecontroltimerprogressdelegate.md)

# UIPageControlProgressDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

## Declaration

```objectivec
@protocol UIPageControlProgressDelegate <NSObject>
```

## Topics

### Instance Methods

- [pageControlProgress:initialProgressForPage:](uipagecontrolprogressdelegate/pagecontrolprogress%28__initialprogressforpage_%29.md): Returns the initial progress (between 0…1) for the specified page. By default, `currentProgress` is set to 0 when the page changes.
- [pageControlProgressVisibilityDidChange:](uipagecontrolprogressdelegate/pagecontrolprogressvisibilitydidchange%28__%29.md): Called when the page control progress visibility has changed, which could occur when the page control is being interacted with. The page control progress becomes hidden when the user begins to interact with the page control (when it begins continuous interaction), and is visible again when the user stops interacting with the control. Observe the page control progress visibility to pause or resume the paging content.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [UIPageControlTimerProgressDelegate](uipagecontroltimerprogressdelegate.md)

## See Also

### Configuring page progress

- [progress](uipagecontrol/progress.md): An object that defines the progress of the page control. Default is nil.
- [UIPageControlProgress](uipagecontrolprogress.md)
- [UIPageControlTimerProgress](uipagecontroltimerprogress.md)
- [UIPageControlTimerProgressDelegate](uipagecontroltimerprogressdelegate.md)
