> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontroller/style-swift.enum/unspecified](https://developer.apple.com/documentation/uikit/uisplitviewcontroller/style-swift.enum/unspecified)

# UISplitViewController.Style.unspecified (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+ (deprecated in 1.0)

The split view interface uses the classic split view style.

## Declaration

```swift
case unspecified
```

<a id="Discussion"></a>

## Discussion

A split view controller with this style represents a classic split view controller created using any other approach than [init(style:)](../init%28style_%29.md). You cannot create a split view controller with a style of [UISplitViewController.Style.unspecified](unspecified.md) using this initializer.

Split view controllers with this style don’t support any column-style APIs, such as [setViewController(\_:for:)](../setviewcontroller%28__for_%29.md).

## See Also

### Constants

- [UISplitViewController.Style.doubleColumn](doublecolumn.md): The split view interface displays two columns.
- [UISplitViewController.Style.tripleColumn](triplecolumn.md): The split view interface displays three columns.

# UISplitViewControllerStyleUnspecified (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+ (deprecated in 1.0)

The split view interface uses the classic split view style.

## Declaration

```objectivec
UISplitViewControllerStyleUnspecified
```

<a id="Discussion"></a>

## Discussion

A split view controller with this style represents a classic split view controller created using any other approach than [initWithStyle:](../init%28style_%29.md). You cannot create a split view controller with a style of [UISplitViewControllerStyleUnspecified](unspecified.md) using this initializer.

Split view controllers with this style don’t support any column-style APIs, such as [setViewController:forColumn:](../setviewcontroller%28__for_%29.md).

## See Also

### Constants

- [UISplitViewControllerStyleDoubleColumn](doublecolumn.md): The split view interface displays two columns.
- [UISplitViewControllerStyleTripleColumn](triplecolumn.md): The split view interface displays three columns.
