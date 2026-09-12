> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/buttongroup](https://developer.apple.com/documentation/uikit/uibarbuttonitem/buttongroup)

# buttonGroup (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The group that the button belongs to.

## Declaration

```swift
weak var buttonGroup: UIBarButtonItemGroup? { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the group to which the item belongs. This property is configured automatically when you add the bar button item to a [UIBarButtonItemGroup](../uibarbuttonitemgroup.md) object. If the item isn’t associated with a bar button item group, this property is `nil`.

# buttonGroup (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The group that the button belongs to.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) UIBarButtonItemGroup * buttonGroup;
```

<a id="Discussion"></a>

## Discussion

This property contains the group to which the item belongs. This property is configured automatically when you add the bar button item to a [UIBarButtonItemGroup](../uibarbuttonitemgroup.md) object. If the item isn’t associated with a bar button item group, this property is `nil`.
