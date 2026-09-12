> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindow/safeareaaspectfitlayoutguide](https://developer.apple.com/documentation/uikit/uiwindow/safeareaaspectfitlayoutguide)

# safeAreaAspectFitLayoutGuide (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

A layout guide for placing content of a particular aspect ratio.

## Declaration

```swift
var safeAreaAspectFitLayoutGuide: any UILayoutGuide & UILayoutGuideAspectFitting { get }
```

<a id="Discussion"></a>

## Discussion

This layout guide provides a centered region in the window where you can place media content of a particular aspect ratio (width over height) to avoid obscuring the content.

> **Important**

>  Use this layout guide for full-screen content. Avoid adding constraints to the guide through deeply nested view hierarchies.

## See Also

### Working with layout guides

- [UILayoutGuideAspectFitting](../uilayoutguideaspectfitting.md): The interface for a layout guide that supports a particular aspect ratio.

# safeAreaAspectFitLayoutGuide (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

A layout guide for placing content of a particular aspect ratio.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) UILayoutGuide<UILayoutGuideAspectFitting> * safeAreaAspectFitLayoutGuide;
```

<a id="Discussion"></a>

## Discussion

This layout guide provides a centered region in the window where you can place media content of a particular aspect ratio (width over height) to avoid obscuring the content.

> **Important**

>  Use this layout guide for full-screen content. Avoid adding constraints to the guide through deeply nested view hierarchies.

## See Also

### Working with layout guides

- [UILayoutGuideAspectFitting](../uilayoutguideaspectfitting.md): The interface for a layout guide that supports a particular aspect ratio.
