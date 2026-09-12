> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitem/itemstyle](https://developer.apple.com/documentation/uikit/uinavigationitem/itemstyle)

# UINavigationItem.ItemStyle (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Constants that determine how the content of the navigation item lays out in the navigation bar.

## Declaration

```swift
enum ItemStyle
```

<a id="overview"></a>

## Overview

Navigation styles allow you to customize the behavior and content density of your navigation bar according to your app type.

- Navigator apps like Settings support a traditional navigation model for hierarchical data.
- Browser apps like Safari or Files support browsing through and navigating back and forth between multiple documents or folder structures.
- Editor apps support focused viewing or editing of individual documents.

> **Related Sessions from WWDC22**

>  Session 10069: [Meet desktop-class iPad](https://developer.apple.com/wwdc22/10069)
>
> Session 10070: [Build a desktop-class iPad app](https://developer.apple.com/wwdc22/10070)

## Topics

### Constants

- [UINavigationItem.ItemStyle.navigator](itemstyle/navigator.md): A style for a traditional navigation-based interface.
- [UINavigationItem.ItemStyle.browser](itemstyle/browser.md): A style for a browser app interface.
- [UINavigationItem.ItemStyle.editor](itemstyle/editor.md): A style for an editor app interface.

### Initializers

- [init(rawValue:)](itemstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying the navigation style

- [style](style.md): A style that determines how the content of the navigation item lays out in the navigation bar.

# UINavigationItemStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Constants that determine how the content of the navigation item lays out in the navigation bar.

## Declaration

```objectivec
enum UINavigationItemStyle : NSInteger;
```

<a id="overview"></a>

## Overview

Navigation styles allow you to customize the behavior and content density of your navigation bar according to your app type.

- Navigator apps like Settings support a traditional navigation model for hierarchical data.
- Browser apps like Safari or Files support browsing through and navigating back and forth between multiple documents or folder structures.
- Editor apps support focused viewing or editing of individual documents.

> **Related Sessions from WWDC22**

>  Session 10069: [Meet desktop-class iPad](https://developer.apple.com/wwdc22/10069)
>
> Session 10070: [Build a desktop-class iPad app](https://developer.apple.com/wwdc22/10070)

## Topics

### Constants

- [UINavigationItemStyleNavigator](itemstyle/navigator.md): A style for a traditional navigation-based interface.
- [UINavigationItemStyleBrowser](itemstyle/browser.md): A style for a browser app interface.
- [UINavigationItemStyleEditor](itemstyle/editor.md): A style for an editor app interface.

## See Also

### Specifying the navigation style

- [style](style.md): A style that determines how the content of the navigation item lays out in the navigation bar.
