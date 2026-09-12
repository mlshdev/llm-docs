> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistatusbarmanager/isstatusbarhidden](https://developer.apple.com/documentation/uikit/uistatusbarmanager/isstatusbarhidden)

# isStatusBarHidden (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the status bar is currently hidden.

## Declaration

```swift
var isStatusBarHidden: Bool { get }
```

<a id="Discussion"></a>

## Discussion

To customize the status bar’s visibility for each of your view controllers, override your view controller’s [prefersStatusBarHidden](../uiviewcontroller/prefersstatusbarhidden.md) property.

## See Also

### Getting the status bar configuration

- [statusBarStyle](statusbarstyle.md): The current appearance of the status bar.

# statusBarHidden (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value that indicates whether the status bar is currently hidden.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isStatusBarHidden) BOOL statusBarHidden;
```

<a id="Discussion"></a>

## Discussion

To customize the status bar’s visibility for each of your view controllers, override your view controller’s [prefersStatusBarHidden](../uiviewcontroller/prefersstatusbarhidden.md) property.

## See Also

### Getting the status bar configuration

- [statusBarStyle](statusbarstyle.md): The current appearance of the status bar.
