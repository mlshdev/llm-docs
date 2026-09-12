> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicitemgroup](https://developer.apple.com/documentation/uikit/uidynamicitemgroup)

# UIDynamicItemGroup (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A dynamic item that comprises multiple other dynamic items.

## Declaration

```swift
@MainActor class UIDynamicItemGroup
```

<a id="overview"></a>

## Overview

Use groups to manipulate a group of dynamic items together and treat them as a single unit for the purpose of collisions. The group can contain dynamic items but cannot contain other [UIDynamicItemGroup](uidynamicitemgroup.md) objects. You can add a group to any [UIDynamicBehavior](uidynamicbehavior.md) object.

The attributes of the dynamic item group are derived from the items of the group itself. The group’s bounds rectangle is the rectangle that encloses all of the contained dynamic items, and the center point of the group is the center point of the bounds rectangle.

## Topics

### Initializing a group

- [init(items:)](uidynamicitemgroup/init%28items_%29.md): Initializes and returns a group containing the specified items.

### Getting the dynamic items in a group

- [items](uidynamicitemgroup/items.md): The dynamic items in the group.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UIDynamicItem](uidynamicitem.md)

## See Also

### Dynamic items

- [UIDynamicItem](uidynamicitem.md): A set of methods that can make a custom object eligible to participate in UIKit Dynamics.
- [UIDynamicItemBehavior](uidynamicitembehavior.md): A base dynamic animation configuration for one or more dynamic items.

# UIDynamicItemGroup (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A dynamic item that comprises multiple other dynamic items.

## Declaration

```objectivec
@interface UIDynamicItemGroup : NSObject
```

<a id="overview"></a>

## Overview

Use groups to manipulate a group of dynamic items together and treat them as a single unit for the purpose of collisions. The group can contain dynamic items but cannot contain other [UIDynamicItemGroup](uidynamicitemgroup.md) objects. You can add a group to any [UIDynamicBehavior](uidynamicbehavior.md) object.

The attributes of the dynamic item group are derived from the items of the group itself. The group’s bounds rectangle is the rectangle that encloses all of the contained dynamic items, and the center point of the group is the center point of the bounds rectangle.

## Topics

### Initializing a group

- [initWithItems:](uidynamicitemgroup/init%28items_%29.md): Initializes and returns a group containing the specified items.

### Getting the dynamic items in a group

- [items](uidynamicitemgroup/items.md): The dynamic items in the group.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIDynamicItem](uidynamicitem.md)

## See Also

### Dynamic items

- [UIDynamicItem](uidynamicitem.md): A set of methods that can make a custom object eligible to participate in UIKit Dynamics.
- [UIDynamicItemBehavior](uidynamicitembehavior.md): A base dynamic animation configuration for one or more dynamic items.
