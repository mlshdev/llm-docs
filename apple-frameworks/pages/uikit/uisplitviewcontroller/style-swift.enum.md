> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontroller/style-swift.enum](https://developer.apple.com/documentation/uikit/uisplitviewcontroller/style-swift.enum)

# UISplitViewController.Style (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Constants that describe the number of columns the split view interface displays.

## Declaration

```swift
enum Style
```

<a id="overview"></a>

## Overview

In iOS 14 and later, [UISplitViewController](../uisplitviewcontroller.md) supports column-style layouts. A column-style split view controller lets you create an interface with two or three columns by using [init(style:)](init%28style_%29.md) with the appropriate [style](style-swift.property.md):

- Use the [UISplitViewController.Style.doubleColumn](style-swift.enum/doublecolumn.md) style to create a split view interface with a two-column layout. This style of split view controller manages two child view controllers, placed in the primary and secondary columns.
- Use the [UISplitViewController.Style.tripleColumn](style-swift.enum/triplecolumn.md) style to create a split view interface with a three-column layout. This style of split view controller manages three child view controllers, placed in the primary, supplementary, and secondary columns.

![Diagram showing a double-column and a triple-column split view interface, each with an inspector.](https://developer.apple.com/images/com.apple.uikit/UISplitViewController-2@2x.png)

Before iOS 14, [UISplitViewController](../uisplitviewcontroller.md) supported just one split view interface style with a primary view controller and a secondary view controller. This classic interface style applies to split view controllers created using any other approach than [init(style:)](init%28style_%29.md). Split view controllers with the classic interface have a [style](style-swift.property.md) of [UISplitViewController.Style.unspecified](style-swift.enum/unspecified.md) and they don’t respond to any of the column-style APIs introduced in iOS 14 and later.

## Topics

### Constants

- [UISplitViewController.Style.unspecified](style-swift.enum/unspecified.md): Deprecated. The split view interface uses the classic split view style.
- [UISplitViewController.Style.doubleColumn](style-swift.enum/doublecolumn.md): The split view interface displays two columns.
- [UISplitViewController.Style.tripleColumn](style-swift.enum/triplecolumn.md): The split view interface displays three columns.

### Initializers

- [init(rawValue:)](style-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the split view style

- [style](style-swift.property.md): The style that determines the number of columns that the split view interface displays.

# UISplitViewControllerStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Constants that describe the number of columns the split view interface displays.

## Declaration

```objectivec
enum UISplitViewControllerStyle : NSInteger;
```

<a id="overview"></a>

## Overview

In iOS 14 and later, [UISplitViewController](../uisplitviewcontroller.md) supports column-style layouts. A column-style split view controller lets you create an interface with two or three columns by using [initWithStyle:](init%28style_%29.md) with the appropriate [style](style-swift.property.md):

- Use the [UISplitViewControllerStyleDoubleColumn](style-swift.enum/doublecolumn.md) style to create a split view interface with a two-column layout. This style of split view controller manages two child view controllers, placed in the primary and secondary columns.
- Use the [UISplitViewControllerStyleTripleColumn](style-swift.enum/triplecolumn.md) style to create a split view interface with a three-column layout. This style of split view controller manages three child view controllers, placed in the primary, supplementary, and secondary columns.

![Diagram showing a double-column and a triple-column split view interface, each with an inspector.](https://developer.apple.com/images/com.apple.uikit/UISplitViewController-2@2x.png)

Before iOS 14, [UISplitViewController](../uisplitviewcontroller.md) supported just one split view interface style with a primary view controller and a secondary view controller. This classic interface style applies to split view controllers created using any other approach than [initWithStyle:](init%28style_%29.md). Split view controllers with the classic interface have a [style](style-swift.property.md) of [UISplitViewControllerStyleUnspecified](style-swift.enum/unspecified.md) and they don’t respond to any of the column-style APIs introduced in iOS 14 and later.

## Topics

### Constants

- [UISplitViewControllerStyleUnspecified](style-swift.enum/unspecified.md): Deprecated. The split view interface uses the classic split view style.
- [UISplitViewControllerStyleDoubleColumn](style-swift.enum/doublecolumn.md): The split view interface displays two columns.
- [UISplitViewControllerStyleTripleColumn](style-swift.enum/triplecolumn.md): The split view interface displays three columns.

## See Also

### Getting the split view style

- [style](style-swift.property.md): The style that determines the number of columns that the split view interface displays.
