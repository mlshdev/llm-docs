> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipagecontroltimerprogressdelegate/pagecontroltimerprogress(_:shouldadvancetopage:)](https://developer.apple.com/documentation/uikit/uipagecontroltimerprogressdelegate/pagecontroltimerprogress(_:shouldadvancetopage:))

# pageControlTimerProgress(\_:shouldAdvanceToPage:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Determines if the time interval progress should advance to the next page upon progress completion of the current page’s duration. Default is YES.

## Declaration

```swift
optional func pageControlTimerProgress(_ progress: UIPageControlTimerProgress, shouldAdvanceToPage page: Int) -> Bool
```

# pageControlTimerProgress:shouldAdvanceToPage: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Determines if the time interval progress should advance to the next page upon progress completion of the current page’s duration. Default is YES.

## Declaration

```objectivec
- (BOOL) pageControlTimerProgress:(UIPageControlTimerProgress *) progress shouldAdvanceToPage:(NSInteger) page;
```
