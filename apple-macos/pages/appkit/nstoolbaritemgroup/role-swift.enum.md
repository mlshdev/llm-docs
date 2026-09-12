> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritemgroup/role-swift.enum](https://developer.apple.com/documentation/appkit/nstoolbaritemgroup/role-swift.enum)

# NSToolbarItemGroup.Role (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

## Declaration

```swift
enum Role
```

## Topics

### Getting role values

- [NSToolbarItemGroup.Role.automatic](role-swift.enum/automatic.md)
- [NSToolbarItemGroup.Role.tabs](role-swift.enum/tabs.md)
- [NSToolbarItemGroup.Role.valueSelection](role-swift.enum/valueselection.md)

### Initializers

- [init(rawValue:)](role-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring grouped toolbar items

- [controlRepresentation](controlrepresentation-swift.property.md): A value that represents how a toolbar displays a grouped toolbar item.
- [NSToolbarItemGroup.ControlRepresentation](controlrepresentation-swift.enum.md)
- [selectionMode](selectionmode-swift.property.md): The selection mode of the grouped toolbar item.
- [NSToolbarItemGroup.SelectionMode](selectionmode-swift.enum.md): A value that indicates how a grouped toolbar item selects its subitems.
- [role](role-swift.property.md): The semantic role of the item. Defaults to `NSToolbarItemGroupRoleAutomatic`.

# NSToolbarItemGroupRole (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

## Declaration

```objectivec
enum NSToolbarItemGroupRole : NSInteger;
```

## Topics

### Getting role values

- [NSToolbarItemGroupRoleAutomatic](role-swift.enum/automatic.md)
- [NSToolbarItemGroupRoleTabs](role-swift.enum/tabs.md)
- [NSToolbarItemGroupRoleValueSelection](role-swift.enum/valueselection.md)

## See Also

### Configuring grouped toolbar items

- [controlRepresentation](controlrepresentation-swift.property.md): A value that represents how a toolbar displays a grouped toolbar item.
- [NSToolbarItemGroupControlRepresentation](controlrepresentation-swift.enum.md)
- [selectionMode](selectionmode-swift.property.md): The selection mode of the grouped toolbar item.
- [NSToolbarItemGroupSelectionMode](selectionmode-swift.enum.md): A value that indicates how a grouped toolbar item selects its subitems.
- [role](role-swift.property.md): The semantic role of the item. Defaults to `NSToolbarItemGroupRoleAutomatic`.
