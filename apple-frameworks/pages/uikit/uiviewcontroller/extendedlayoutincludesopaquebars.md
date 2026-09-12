> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/extendedlayoutincludesopaquebars](https://developer.apple.com/documentation/uikit/uiviewcontroller/extendedlayoutincludesopaquebars)

# extendedLayoutIncludesOpaqueBars (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value indicating whether or not the extended layout includes opaque bars.

## Declaration

```swift
var extendedLayoutIncludesOpaqueBars: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

> **Note**

>  Bars are translucent by default in iOS 7.0

## See Also

### Configuring the view’s layout behavior

- [edgesForExtendedLayout](edgesforextendedlayout.md): The edges that you extend for your view controller.
- [UIRectEdge](../uirectedge.md): Constants that specify the edges of a rectangle.
- [viewWillLayoutSubviews()](viewwilllayoutsubviews%28%29.md): Notifies the view controller that its view is about to lay out its subviews.
- [viewDidLayoutSubviews()](viewdidlayoutsubviews%28%29.md): Notifies the view controller when its view finishes laying out its subviews.
- [updateViewConstraints()](updateviewconstraints%28%29.md): Notifies the view controller when its view needs to update its constraints.

# extendedLayoutIncludesOpaqueBars (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value indicating whether or not the extended layout includes opaque bars.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL extendedLayoutIncludesOpaqueBars;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

> **Note**

>  Bars are translucent by default in iOS 7.0

## See Also

### Configuring the view’s layout behavior

- [edgesForExtendedLayout](edgesforextendedlayout.md): The edges that you extend for your view controller.
- [UIRectEdge](../uirectedge.md): Constants that specify the edges of a rectangle.
- [viewWillLayoutSubviews](viewwilllayoutsubviews%28%29.md): Notifies the view controller that its view is about to lay out its subviews.
- [viewDidLayoutSubviews](viewdidlayoutsubviews%28%29.md): Notifies the view controller when its view finishes laying out its subviews.
- [updateViewConstraints](updateviewconstraints%28%29.md): Notifies the view controller when its view needs to update its constraints.
