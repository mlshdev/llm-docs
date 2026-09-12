> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistatusbarmanager/statusbarstyle](https://developer.apple.com/documentation/uikit/uistatusbarmanager/statusbarstyle)

# statusBarStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The current appearance of the status bar.

## Declaration

```swift
var statusBarStyle: UIStatusBarStyle { get }
```

<a id="Discussion"></a>

## Discussion

To customize the status bar’s style for each of your view controllers, override their [preferredStatusBarStyle](../uiviewcontroller/preferredstatusbarstyle.md) property.

## See Also

### Getting the status bar configuration

- [isStatusBarHidden](isstatusbarhidden.md): A Boolean value that indicates whether the status bar is currently hidden.

# statusBarStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The current appearance of the status bar.

## Declaration

```objectivec
@property (nonatomic, readonly) UIStatusBarStyle statusBarStyle;
```

<a id="Discussion"></a>

## Discussion

To customize the status bar’s style for each of your view controllers, override their [preferredStatusBarStyle](../uiviewcontroller/preferredstatusbarstyle.md) property.

## See Also

### Getting the status bar configuration

- [statusBarHidden](isstatusbarhidden.md): A Boolean value that indicates whether the status bar is currently hidden.
