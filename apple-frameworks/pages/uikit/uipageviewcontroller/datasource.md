> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipageviewcontroller/datasource](https://developer.apple.com/documentation/uikit/uipageviewcontroller/datasource)

# dataSource (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The object that provides view controllers.

## Declaration

```swift
weak var dataSource: (any UIPageViewControllerDataSource)? { get set }
```

<a id="Discussion"></a>

## Discussion

Methods of the data source are called in response to gesture-based navigation. If the value of this property is `nil`, then gesture-based navigation is disabled.

## See Also

### Providing the Page Content

- [UIPageViewControllerDataSource](../uipageviewcontrollerdatasource.md): The [UIPageViewControllerDataSource](../uipageviewcontrollerdatasource.md) protocol is adopted by an object that provides view controllers to the page view controller on an as-needed basis, in response to navigation gestures.

# dataSource (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The object that provides view controllers.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UIPageViewControllerDataSource> dataSource;
```

<a id="Discussion"></a>

## Discussion

Methods of the data source are called in response to gesture-based navigation. If the value of this property is `nil`, then gesture-based navigation is disabled.

## See Also

### Providing the Page Content

- [UIPageViewControllerDataSource](../uipageviewcontrollerdatasource.md): The [UIPageViewControllerDataSource](../uipageviewcontrollerdatasource.md) protocol is adopted by an object that provides view controllers to the page view controller on an as-needed basis, in response to navigation gestures.
