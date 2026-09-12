> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiuserinterfaceactiveappearance](https://developer.apple.com/documentation/uikit/uiuserinterfaceactiveappearance)

# UIUserInterfaceActiveAppearance (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Constants that indicate whether the user interface has an active appearance.

## Declaration

```swift
enum UIUserInterfaceActiveAppearance
```

## Topics

### Constants

- [UIUserInterfaceActiveAppearance.unspecified](uiuserinterfaceactiveappearance/unspecified.md): The interface has an unspecified appearance.
- [UIUserInterfaceActiveAppearance.inactive](uiuserinterfaceactiveappearance/inactive.md): The interface has an inactive appearance.
- [UIUserInterfaceActiveAppearance.active](uiuserinterfaceactiveappearance/active.md): The interface has an active appearance.

### Initializers

- [init(rawValue:)](uiuserinterfaceactiveappearance/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Retrieving interface-related traits

- [userInterfaceStyle](uitraitcollection/userinterfacestyle.md): The style associated with the user interface.
- [UIUserInterfaceStyle](uiuserinterfacestyle.md): Constants that indicate the interface style for the app.
- [userInterfaceIdiom](uitraitcollection/userinterfaceidiom.md): The user interface idiom of the trait collection.
- [UIUserInterfaceIdiom](uiuserinterfaceidiom.md): Constants that indicate the interface type for the device or an object that has a trait environment, such as a view and view controller.
- [userInterfaceLevel](uitraitcollection/userinterfacelevel.md): The elevation level of the interface.
- [UIUserInterfaceLevel](uiuserinterfacelevel.md): Constants that indicate the visual level for content in the window.
- [layoutDirection](uitraitcollection/layoutdirection.md): The layout direction associated with the current environment.
- [UITraitEnvironmentLayoutDirection](uitraitenvironmentlayoutdirection.md): Constants that indicate the layout direction associated with the current environment.
- [resolvesNaturalAlignmentWithBaseWritingDirection](uitraitcollection/resolvesnaturalalignmentwithbasewritingdirection-58wlh.md)
- [accessibilityContrast](uitraitcollection/accessibilitycontrast.md): The accessibility contrast associated with the current environment.
- [UIAccessibilityContrast](uiaccessibilitycontrast.md): Constants that indicate the accessibility contrast setting.
- [legibilityWeight](uitraitcollection/legibilityweight.md): The font weight to apply to text.
- [UILegibilityWeight](uilegibilityweight.md): Constants that indicate the weight to apply to text in your interface.
- [activeAppearance](uitraitcollection/activeappearance.md): A property that indicates whether a scene has an active appearance.
- [toolbarItemPresentationSize](uitraitcollection/toolbaritempresentationsize.md): The presentation size of a toolbar item in an AppKit toolbar.

# UIUserInterfaceActiveAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Constants that indicate whether the user interface has an active appearance.

## Declaration

```objectivec
enum UIUserInterfaceActiveAppearance : NSInteger;
```

## Topics

### Constants

- [UIUserInterfaceActiveAppearanceUnspecified](uiuserinterfaceactiveappearance/unspecified.md): The interface has an unspecified appearance.
- [UIUserInterfaceActiveAppearanceInactive](uiuserinterfaceactiveappearance/inactive.md): The interface has an inactive appearance.
- [UIUserInterfaceActiveAppearanceActive](uiuserinterfaceactiveappearance/active.md): The interface has an active appearance.

## See Also

### Retrieving interface-related traits

- [userInterfaceStyle](uitraitcollection/userinterfacestyle.md): The style associated with the user interface.
- [UIUserInterfaceStyle](uiuserinterfacestyle.md): Constants that indicate the interface style for the app.
- [userInterfaceIdiom](uitraitcollection/userinterfaceidiom.md): The user interface idiom of the trait collection.
- [UIUserInterfaceIdiom](uiuserinterfaceidiom.md): Constants that indicate the interface type for the device or an object that has a trait environment, such as a view and view controller.
- [userInterfaceLevel](uitraitcollection/userinterfacelevel.md): The elevation level of the interface.
- [UIUserInterfaceLevel](uiuserinterfacelevel.md): Constants that indicate the visual level for content in the window.
- [layoutDirection](uitraitcollection/layoutdirection.md): The layout direction associated with the current environment.
- [UITraitEnvironmentLayoutDirection](uitraitenvironmentlayoutdirection.md): Constants that indicate the layout direction associated with the current environment.
- [resolvesNaturalAlignmentWithBaseWritingDirection](uitraitcollection/resolvesnaturalalignmentwithbasewritingdirection-97osy.md): Specifies the behavior for resolving `NSTextAlignment.natural` to the visual alignment.
- [accessibilityContrast](uitraitcollection/accessibilitycontrast.md): The accessibility contrast associated with the current environment.
- [UIAccessibilityContrast](uiaccessibilitycontrast.md): Constants that indicate the accessibility contrast setting.
- [legibilityWeight](uitraitcollection/legibilityweight.md): The font weight to apply to text.
- [UILegibilityWeight](uilegibilityweight.md): Constants that indicate the weight to apply to text in your interface.
- [activeAppearance](uitraitcollection/activeappearance.md): A property that indicates whether a scene has an active appearance.
- [toolbarItemPresentationSize](uitraitcollection/toolbaritempresentationsize.md): The presentation size of a toolbar item in an AppKit toolbar.
