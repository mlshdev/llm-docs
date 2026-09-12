> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigravitybehavior/items](https://developer.apple.com/documentation/uikit/uigravitybehavior/items)

# items (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The set of dynamic items associated with the gravity behavior.

## Declaration

```swift
var items: [any UIDynamicItem] { get }
```

## See Also

### Managing a gravity behavior’s items

- [addItem(\_:)](additem%28__%29.md): Associates the specified dynamic item with the gravity behavior.
- [removeItem(\_:)](removeitem%28__%29.md): Removes the specified dynamic item from the gravity behavior.

# items (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The set of dynamic items associated with the gravity behavior.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<id<UIDynamicItem>> * items;
```

## See Also

### Managing a gravity behavior’s items

- [addItem:](additem%28__%29.md): Associates the specified dynamic item with the gravity behavior.
- [removeItem:](removeitem%28__%29.md): Removes the specified dynamic item from the gravity behavior.
