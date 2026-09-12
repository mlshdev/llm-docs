> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitraitenvironment/traitcollection](https://developer.apple.com/documentation/uikit/uitraitenvironment/traitcollection)

# traitCollection (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The traits, such as the size class and scale factor, that describe the current environment of the object.

## Declaration

```swift
var traitCollection: UITraitCollection { get }
```

## Mentioned In

- [Displaying and managing views with a view controller](../displaying-and-managing-views-with-a-view-controller.md)

<a id="Discussion"></a>

## Discussion

[UIViewController](../uiviewcontroller.md) and [UIView](../uiview.md) adopt the [UITraitEnvironment](../uitraitenvironment.md) protocol and expose this property.

> **Important**

>  Don’t implement this property in your own objects. Instead, use the [traitCollection](traitcollection.md) property associated with a view, view controller, or other object to determine the currently available trait information.

# traitCollection (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The traits, such as the size class and scale factor, that describe the current environment of the object.

## Declaration

```objectivec
@property (nonatomic, readonly) UITraitCollection * traitCollection;
```

## Mentioned In

- [Displaying and managing views with a view controller](../displaying-and-managing-views-with-a-view-controller.md)

<a id="Discussion"></a>

## Discussion

[UIViewController](../uiviewcontroller.md) and [UIView](../uiview.md) adopt the [UITraitEnvironment](../uitraitenvironment.md) protocol and expose this property.

> **Important**

>  Don’t implement this property in your own objects. Instead, use the [traitCollection](traitcollection.md) property associated with a view, view controller, or other object to determine the currently available trait information.
