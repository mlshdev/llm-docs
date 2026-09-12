> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitraitcollection/accessibilitycontrast](https://developer.apple.com/documentation/uikit/uitraitcollection/accessibilitycontrast)

# accessibilityContrast (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The accessibility contrast associated with the current environment.

## Declaration

```swift
var accessibilityContrast: UIAccessibilityContrast { get }
```

<a id="Discussion"></a>

## Discussion

Use this trait to determine whether the user requested a high contrast between foreground and background content. The user sets the contrast level in the Accessibility area in Settings.

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
- [UIAccessibilityContrast](../uiaccessibilitycontrast.md): Constants that indicate the accessibility contrast setting.
- [legibilityWeight](legibilityweight.md): The font weight to apply to text.
- [UILegibilityWeight](../uilegibilityweight.md): Constants that indicate the weight to apply to text in your interface.
- [activeAppearance](activeappearance.md): A property that indicates whether a scene has an active appearance.
- [UIUserInterfaceActiveAppearance](../uiuserinterfaceactiveappearance.md): Constants that indicate whether the user interface has an active appearance.
- [toolbarItemPresentationSize](toolbaritempresentationsize.md): The presentation size of a toolbar item in an AppKit toolbar.

# accessibilityContrast (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The accessibility contrast associated with the current environment.

## Declaration

```objectivec
@property (nonatomic, readonly) UIAccessibilityContrast accessibilityContrast;
```

<a id="Discussion"></a>

## Discussion

Use this trait to determine whether the user requested a high contrast between foreground and background content. The user sets the contrast level in the Accessibility area in Settings.

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
- [UIAccessibilityContrast](../uiaccessibilitycontrast.md): Constants that indicate the accessibility contrast setting.
- [legibilityWeight](legibilityweight.md): The font weight to apply to text.
- [UILegibilityWeight](../uilegibilityweight.md): Constants that indicate the weight to apply to text in your interface.
- [activeAppearance](activeappearance.md): A property that indicates whether a scene has an active appearance.
- [UIUserInterfaceActiveAppearance](../uiuserinterfaceactiveappearance.md): Constants that indicate whether the user interface has an active appearance.
- [toolbarItemPresentationSize](toolbaritempresentationsize.md): The presentation size of a toolbar item in an AppKit toolbar.
