> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabgroup/children](https://developer.apple.com/documentation/uikit/uitabgroup/children)

# children (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

The tabs within a tab group.

## Declaration

```swift
var children: [UITab] { get set }
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)

## See Also

### Accessing tabs

- [tab(forIdentifier:)](tab%28foridentifier_%29.md): Returns a tab with a matching identifier, if any.
- [defaultChildIdentifier](defaultchildidentifier.md): The identifier for the default subitem.
- [selectedChild](selectedchild.md): The currently selected tab.

# children (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

The tabs within a tab group.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<UITab *> * children;
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)

## See Also

### Accessing tabs

- [tabForIdentifier:](tab%28foridentifier_%29.md): Returns a tab with a matching identifier, if any.
- [defaultChildIdentifier](defaultchildidentifier.md): The identifier for the default subitem.
- [selectedChild](selectedchild.md): The currently selected tab.
