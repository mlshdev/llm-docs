> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitraitcollection/verticalbaredge

# verticalBarEdge (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

The edge where the system places the vertical bar.

## Declaration

```swift
var verticalBarEdge: UIVerticalBarEdge { get }
```

<a id="discussion"></a>

## Discussion

This property reflects the system’s preferred edge regardless of whether a vertical bar is currently visible. Returns `UIVerticalBarEdgeUnspecified` on devices and in contexts where the system never places a vertical bar — for example hardware without a vertical bar, or a size class or orientation in which no vertical bar is used.

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

# verticalBarEdge (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

The edge where the system places the vertical bar.

## Declaration

```objectivec
@property (nonatomic, readonly) UIVerticalBarEdge verticalBarEdge;
```

<a id="discussion"></a>

## Discussion

This property reflects the system’s preferred edge regardless of whether a vertical bar is currently visible. Returns `UIVerticalBarEdgeUnspecified` on devices and in contexts where the system never places a vertical bar — for example hardware without a vertical bar, or a size class or orientation in which no vertical bar is used.

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
