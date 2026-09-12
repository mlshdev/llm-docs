> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabgroup/sidebarappearance-swift.enum](https://developer.apple.com/documentation/uikit/uitabgroup/sidebarappearance-swift.enum)

# UITabGroup.SidebarAppearance (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

The appearance of a section in a sidebar.

## Declaration

```swift
enum SidebarAppearance
```

## Topics

### Enumeration Cases

- [UITabGroup.SidebarAppearance.automatic](sidebarappearance-swift.enum/automatic.md): The default appearance showing the group and its children appropriately depending on the group level it is in.
- [UITabGroup.SidebarAppearance.inline](sidebarappearance-swift.enum/inline.md): Displays only the children alongside the group’s siblings.
- [UITabGroup.SidebarAppearance.rootSection](sidebarappearance-swift.enum/rootsection.md): Displays the group and its children as a top-level group of the sidebar.

### Initializers

- [init(rawValue:)](sidebarappearance-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring a tab group

- [sidebarAppearance](sidebarappearance-swift.property.md): The appearance of a tab group’s section in a sidebar.
- [managingNavigationController](managingnavigationcontroller.md): The controller that manages navigation for items in a sidebar.

# UITabGroupSidebarAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

The appearance of a section in a sidebar.

## Declaration

```objectivec
enum UITabGroupSidebarAppearance : NSUInteger;
```

## Topics

### Enumeration Cases

- [UITabGroupSidebarAppearanceAutomatic](sidebarappearance-swift.enum/automatic.md): The default appearance showing the group and its children appropriately depending on the group level it is in.
- [UITabGroupSidebarAppearanceInline](sidebarappearance-swift.enum/inline.md): Displays only the children alongside the group’s siblings.
- [UITabGroupSidebarAppearanceRootSection](sidebarappearance-swift.enum/rootsection.md): Displays the group and its children as a top-level group of the sidebar.

## See Also

### Configuring a tab group

- [sidebarAppearance](sidebarappearance-swift.property.md): The appearance of a tab group’s section in a sidebar.
- [managingNavigationController](managingnavigationcontroller.md): The controller that manages navigation for items in a sidebar.
