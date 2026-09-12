> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipagecontrolprogressdelegate/pagecontrolprogress(_:initialprogressforpage:)](https://developer.apple.com/documentation/uikit/uipagecontrolprogressdelegate/pagecontrolprogress(_:initialprogressforpage:))

# pageControlProgress(\_:initialProgressForPage:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Returns the initial progress (between 0…1) for the specified page. By default, `currentProgress` is set to 0 when the page changes.

## Declaration

```swift
optional func pageControlProgress(_ progress: UIPageControlProgress, initialProgressForPage page: Int) -> Float
```

# pageControlProgress:initialProgressForPage: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Returns the initial progress (between 0…1) for the specified page. By default, `currentProgress` is set to 0 when the page changes.

## Declaration

```objectivec
- (float) pageControlProgress:(UIPageControlProgress *) progress initialProgressForPage:(NSInteger) page;
```
