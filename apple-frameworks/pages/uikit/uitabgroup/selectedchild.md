> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabgroup/selectedchild](https://developer.apple.com/documentation/uikit/uitabgroup/selectedchild)

# selectedChild (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

The currently selected tab.

## Declaration

```swift
var selectedChild: UITab? { get set }
```

## See Also

### Accessing tabs

- [children](children.md): The tabs within a tab group.
- [tab(forIdentifier:)](tab%28foridentifier_%29.md): Returns a tab with a matching identifier, if any.
- [defaultChildIdentifier](defaultchildidentifier.md): The identifier for the default subitem.

# selectedChild (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

The currently selected tab.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UITab * selectedChild;
```

## See Also

### Accessing tabs

- [children](children.md): The tabs within a tab group.
- [tabForIdentifier:](tab%28foridentifier_%29.md): Returns a tab with a matching identifier, if any.
- [defaultChildIdentifier](defaultchildidentifier.md): The identifier for the default subitem.
