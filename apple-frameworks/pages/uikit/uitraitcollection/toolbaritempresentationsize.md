> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitraitcollection/toolbaritempresentationsize](https://developer.apple.com/documentation/uikit/uitraitcollection/toolbaritempresentationsize)

# toolbarItemPresentationSize (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 16.0+ · tvOS · visionOS 1.0+

The presentation size of a toolbar item in an AppKit toolbar.

## Declaration

```swift
var toolbarItemPresentationSize: UINSToolbarItemPresentationSize { get }
```

## Mentioned In

- [Building a desktop-class iPad app](../building-a-desktop-class-ipad-app.md)

<a id="Discussion"></a>

## Discussion

[NSToolbar](https://developer.apple.com/documentation/appkit/nstoolbar) supports various display modes that affect the amount of space available for displaying toolbar items. If you use [NSUIViewToolbarItem](../nsuiviewtoolbaritem.md) to host a [UIView](../uiview.md) in an [NSToolbar](https://developer.apple.com/documentation/appkit/nstoolbar) when you build your app with Mac Catalyst, that view receives information about its expected size through this trait. Use this trait to make any necessary adjustments to your custom view when the trait collection changes, such as when the toolbar switches to a new display mode.

The default value of this trait is [UINSToolbarItemPresentationSize.unspecified](../uinstoolbaritempresentationsize/unspecified.md) when an [NSToolbar](https://developer.apple.com/documentation/appkit/nstoolbar) doesn’t host the view.

## See Also

### Retrieving interface-related traits

- [userInterfaceStyle](userinterfacestyle.md): The style associated with the user interface.
- [UIUserInterfaceStyle](../uiuserinterfacestyle.md): Constants that indicate the interface style for the app.
- [userInterfaceIdiom](userinterfaceidiom.md): The user interface idiom of the trait collection.
- [UIUserInterfaceIdiom](../uiuserinterfaceidiom.md): Constants that indicate the interface type for the device or an object that has a trait environment, such as a view and view controller.
- [userInterfaceLevel](userinterfacelevel.md): The elevation level of the interface.
- [UIUserInterfaceLevel](../uiuserinterfacelevel.md): Constants that indicate the visual level for content in the window.
- [layoutDirection](layoutdirection.md): The layout direction associated with the current environment.
- [UITraitEnvironmentLayoutDirection](../uitraitenvironmentlayoutdirection.md): Constants that indicate the layout direction associated with the current environment.
- [resolvesNaturalAlignmentWithBaseWritingDirection](resolvesnaturalalignmentwithbasewritingdirection-58wlh.md)
- [accessibilityContrast](accessibilitycontrast.md): The accessibility contrast associated with the current environment.
- [UIAccessibilityContrast](../uiaccessibilitycontrast.md): Constants that indicate the accessibility contrast setting.
- [legibilityWeight](legibilityweight.md): The font weight to apply to text.
- [UILegibilityWeight](../uilegibilityweight.md): Constants that indicate the weight to apply to text in your interface.
- [activeAppearance](activeappearance.md): A property that indicates whether a scene has an active appearance.
- [UIUserInterfaceActiveAppearance](../uiuserinterfaceactiveappearance.md): Constants that indicate whether the user interface has an active appearance.

# toolbarItemPresentationSize (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 16.0+ · tvOS · visionOS 1.0+

The presentation size of a toolbar item in an AppKit toolbar.

## Declaration

```objectivec
@property (nonatomic, readonly) UINSToolbarItemPresentationSize toolbarItemPresentationSize;
```

## Mentioned In

- [Building a desktop-class iPad app](../building-a-desktop-class-ipad-app.md)

<a id="Discussion"></a>

## Discussion

[NSToolbar](https://developer.apple.com/documentation/appkit/nstoolbar) supports various display modes that affect the amount of space available for displaying toolbar items. If you use [NSUIViewToolbarItem](../nsuiviewtoolbaritem.md) to host a [UIView](../uiview.md) in an [NSToolbar](https://developer.apple.com/documentation/appkit/nstoolbar) when you build your app with Mac Catalyst, that view receives information about its expected size through this trait. Use this trait to make any necessary adjustments to your custom view when the trait collection changes, such as when the toolbar switches to a new display mode.

The default value of this trait is [UINSToolbarItemPresentationSizeUnspecified](../uinstoolbaritempresentationsize/unspecified.md) when an [NSToolbar](https://developer.apple.com/documentation/appkit/nstoolbar) doesn’t host the view.

## See Also

### Retrieving interface-related traits

- [userInterfaceStyle](userinterfacestyle.md): The style associated with the user interface.
- [UIUserInterfaceStyle](../uiuserinterfacestyle.md): Constants that indicate the interface style for the app.
- [userInterfaceIdiom](userinterfaceidiom.md): The user interface idiom of the trait collection.
- [UIUserInterfaceIdiom](../uiuserinterfaceidiom.md): Constants that indicate the interface type for the device or an object that has a trait environment, such as a view and view controller.
- [userInterfaceLevel](userinterfacelevel.md): The elevation level of the interface.
- [UIUserInterfaceLevel](../uiuserinterfacelevel.md): Constants that indicate the visual level for content in the window.
- [layoutDirection](layoutdirection.md): The layout direction associated with the current environment.
- [UITraitEnvironmentLayoutDirection](../uitraitenvironmentlayoutdirection.md): Constants that indicate the layout direction associated with the current environment.
- [resolvesNaturalAlignmentWithBaseWritingDirection](resolvesnaturalalignmentwithbasewritingdirection-97osy.md): Specifies the behavior for resolving `NSTextAlignment.natural` to the visual alignment.
- [accessibilityContrast](accessibilitycontrast.md): The accessibility contrast associated with the current environment.
- [UIAccessibilityContrast](../uiaccessibilitycontrast.md): Constants that indicate the accessibility contrast setting.
- [legibilityWeight](legibilityweight.md): The font weight to apply to text.
- [UILegibilityWeight](../uilegibilityweight.md): Constants that indicate the weight to apply to text in your interface.
- [activeAppearance](activeappearance.md): A property that indicates whether a scene has an active appearance.
- [UIUserInterfaceActiveAppearance](../uiuserinterfaceactiveappearance.md): Constants that indicate whether the user interface has an active appearance.
