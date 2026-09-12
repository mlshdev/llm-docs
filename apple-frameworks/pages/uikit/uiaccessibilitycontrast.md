> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitycontrast](https://developer.apple.com/documentation/uikit/uiaccessibilitycontrast)

# UIAccessibilityContrast (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Constants that indicate the accessibility contrast setting.

## Declaration

```swift
enum UIAccessibilityContrast
```

## Topics

### Contrast settings

- [UIAccessibilityContrast.unspecified](uiaccessibilitycontrast/unspecified.md): An unspecified contrast.
- [UIAccessibilityContrast.normal](uiaccessibilitycontrast/normal.md): A normal contrast level.
- [UIAccessibilityContrast.high](uiaccessibilitycontrast/high.md): A high contrast level.

### Initializers

- [init(\_:)](uiaccessibilitycontrast/init%28__%29.md): Creates an accessibility contrast from the specified SwiftUI color scheme contrast.
- [init(rawValue:)](uiaccessibilitycontrast/init%28rawvalue_%29.md)

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
- [legibilityWeight](uitraitcollection/legibilityweight.md): The font weight to apply to text.
- [UILegibilityWeight](uilegibilityweight.md): Constants that indicate the weight to apply to text in your interface.
- [activeAppearance](uitraitcollection/activeappearance.md): A property that indicates whether a scene has an active appearance.
- [UIUserInterfaceActiveAppearance](uiuserinterfaceactiveappearance.md): Constants that indicate whether the user interface has an active appearance.
- [toolbarItemPresentationSize](uitraitcollection/toolbaritempresentationsize.md): The presentation size of a toolbar item in an AppKit toolbar.

# UIAccessibilityContrast (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Constants that indicate the accessibility contrast setting.

## Declaration

```objectivec
enum UIAccessibilityContrast : NSInteger;
```

## Topics

### Contrast settings

- [UIAccessibilityContrastUnspecified](uiaccessibilitycontrast/unspecified.md): An unspecified contrast.
- [UIAccessibilityContrastNormal](uiaccessibilitycontrast/normal.md): A normal contrast level.
- [UIAccessibilityContrastHigh](uiaccessibilitycontrast/high.md): A high contrast level.

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
- [legibilityWeight](uitraitcollection/legibilityweight.md): The font weight to apply to text.
- [UILegibilityWeight](uilegibilityweight.md): Constants that indicate the weight to apply to text in your interface.
- [activeAppearance](uitraitcollection/activeappearance.md): A property that indicates whether a scene has an active appearance.
- [UIUserInterfaceActiveAppearance](uiuserinterfaceactiveappearance.md): Constants that indicate whether the user interface has an active appearance.
- [toolbarItemPresentationSize](uitraitcollection/toolbaritempresentationsize.md): The presentation size of a toolbar item in an AppKit toolbar.
