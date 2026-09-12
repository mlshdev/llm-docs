> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinstoolbaritempresentationsize](https://developer.apple.com/documentation/uikit/uinstoolbaritempresentationsize)

# UINSToolbarItemPresentationSize (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst 16.0+ · tvOS · visionOS

Constants that specify the presentation size of a toolbar item in an AppKit toolbar.

## Declaration

```swift
enum UINSToolbarItemPresentationSize
```

<a id="overview"></a>

## Overview

Use these constants with [toolbarItemPresentationSize](uitraitcollection/toolbaritempresentationsize.md) to determine what size an [NSToolbar](https://developer.apple.com/documentation/appkit/nstoolbar) expects its toolbar items to be.

## Topics

### Constants

- [UINSToolbarItemPresentationSize.regular](uinstoolbaritempresentationsize/regular.md): The default, regular presentation size.
- [UINSToolbarItemPresentationSize.small](uinstoolbaritempresentationsize/small.md): The smallest presentation size.
- [UINSToolbarItemPresentationSize.large](uinstoolbaritempresentationsize/large.md): The largest presentation size.
- [UINSToolbarItemPresentationSize.unspecified](uinstoolbaritempresentationsize/unspecified.md): An unspecified presentation size.

### Initializers

- [init(rawValue:)](uinstoolbaritempresentationsize/init%28rawvalue_%29.md)

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
- [UIUserInterfaceActiveAppearance](uiuserinterfaceactiveappearance.md): Constants that indicate whether the user interface has an active appearance.

# UINSToolbarItemPresentationSize (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst 16.0+ · tvOS · visionOS

Constants that specify the presentation size of a toolbar item in an AppKit toolbar.

## Declaration

```objectivec
enum UINSToolbarItemPresentationSize : NSInteger;
```

<a id="overview"></a>

## Overview

Use these constants with [toolbarItemPresentationSize](uitraitcollection/toolbaritempresentationsize.md) to determine what size an [NSToolbar](https://developer.apple.com/documentation/appkit/nstoolbar) expects its toolbar items to be.

## Topics

### Constants

- [UINSToolbarItemPresentationSizeRegular](uinstoolbaritempresentationsize/regular.md): The default, regular presentation size.
- [UINSToolbarItemPresentationSizeSmall](uinstoolbaritempresentationsize/small.md): The smallest presentation size.
- [UINSToolbarItemPresentationSizeLarge](uinstoolbaritempresentationsize/large.md): The largest presentation size.
- [UINSToolbarItemPresentationSizeUnspecified](uinstoolbaritempresentationsize/unspecified.md): An unspecified presentation size.

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
- [UIUserInterfaceActiveAppearance](uiuserinterfaceactiveappearance.md): Constants that indicate whether the user interface has an active appearance.
