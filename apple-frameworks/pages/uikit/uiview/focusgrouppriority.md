> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/focusgrouppriority](https://developer.apple.com/documentation/uikit/uiview/focusgrouppriority)

# focusGroupPriority (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The importance of the item within a focus group, used by the focus system to determine the group’s primary item.

## Declaration

```swift
var focusGroupPriority: UIFocusGroupPriority { get set }
```

<a id="Discussion"></a>

## Discussion

The system automatically assigns each focusable item in a focus group one of the predefined system priorities. The visible item with the highest priority is the group’s primary item.

You can override the default priority of an item to customize the primary item of a group. When setting a custom priority, you can only increase the item’s priority above its system-provided value, not decrease it. The system-provided priority is always the minimum priority applied for the item. The system ignores any priority lower than `0`.

## See Also

### Working with focus

- [canBecomeFocused](canbecomefocused.md): A Boolean value that indicates whether the view is currently capable of being focused.
- [inheritedAnimationDuration](inheritedanimationduration.md): Returns the inherited duration of the current animation.
- [isFocused](isfocused.md): A Boolean value that indicates whether the item is currently focused.
- [focusGroupIdentifier](focusgroupidentifier.md): The identifier of the focus group that this view belongs to.
- [focusEffect](focuseffect.md): The visual effect to apply when the view becomes focused.

# focusGroupPriority (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The importance of the item within a focus group, used by the focus system to determine the group’s primary item.

## Declaration

```objectivec
@property (nonatomic, readwrite) UIFocusGroupPriority focusGroupPriority;
```

<a id="Discussion"></a>

## Discussion

The system automatically assigns each focusable item in a focus group one of the predefined system priorities. The visible item with the highest priority is the group’s primary item.

You can override the default priority of an item to customize the primary item of a group. When setting a custom priority, you can only increase the item’s priority above its system-provided value, not decrease it. The system-provided priority is always the minimum priority applied for the item. The system ignores any priority lower than `0`.

## See Also

### Working with focus

- [canBecomeFocused](canbecomefocused.md): A Boolean value that indicates whether the view is currently capable of being focused.
- [inheritedAnimationDuration](inheritedanimationduration.md): Returns the inherited duration of the current animation.
- [focused](isfocused.md): A Boolean value that indicates whether the item is currently focused.
- [focusGroupIdentifier](focusgroupidentifier.md): The identifier of the focus group that this view belongs to.
- [focusEffect](focuseffect.md): The visual effect to apply when the view becomes focused.
