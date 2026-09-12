> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontextmenuconfiguration/elementorder](https://developer.apple.com/documentation/uikit/uicontextmenuconfiguration/elementorder)

# UIContextMenuConfiguration.ElementOrder (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 17.0+ · visionOS 1.0+

Constants that define the ordering strategy for menu elements in a context menu.

## Declaration

```swift
enum ElementOrder
```

## Topics

### Constants

- [UIContextMenuConfiguration.ElementOrder.automatic](elementorder/automatic.md): A constant that allows the system to choose an ordering strategy according to the current context.
- [UIContextMenuConfiguration.ElementOrder.priority](elementorder/priority.md): A constant that displays menu elements according to their priority.
- [UIContextMenuConfiguration.ElementOrder.fixed](elementorder/fixed.md): A constant that displays menu elements in a fixed order.

### Initializers

- [init(rawValue:)](elementorder/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying the order of menu elements

- [preferredMenuElementOrder](preferredmenuelementorder.md): The preferred menu-element ordering strategy for the menu.

# UIContextMenuConfigurationElementOrder (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 17.0+ · visionOS 1.0+

Constants that define the ordering strategy for menu elements in a context menu.

## Declaration

```objectivec
enum UIContextMenuConfigurationElementOrder : NSInteger;
```

## Topics

### Constants

- [UIContextMenuConfigurationElementOrderAutomatic](elementorder/automatic.md): A constant that allows the system to choose an ordering strategy according to the current context.
- [UIContextMenuConfigurationElementOrderPriority](elementorder/priority.md): A constant that displays menu elements according to their priority.
- [UIContextMenuConfigurationElementOrderFixed](elementorder/fixed.md): A constant that displays menu elements in a fixed order.

## See Also

### Specifying the order of menu elements

- [preferredMenuElementOrder](preferredmenuelementorder.md): The preferred menu-element ordering strategy for the menu.
