> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/isfocused](https://developer.apple.com/documentation/uikit/uiview/isfocused)

# isFocused (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the item is currently focused.

## Declaration

```swift
var isFocused: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This is a convenience property that checks whether the item is equal to the value in the [UIScreen](../uiscreen.md) class’s [focusedView](../uiscreen/focusedview.md) property.

## See Also

### Working with focus

- [canBecomeFocused](canbecomefocused.md): A Boolean value that indicates whether the view is currently capable of being focused.
- [inheritedAnimationDuration](inheritedanimationduration.md): Returns the inherited duration of the current animation.
- [focusGroupIdentifier](focusgroupidentifier.md): The identifier of the focus group that this view belongs to.
- [focusEffect](focuseffect.md): The visual effect to apply when the view becomes focused.
- [focusGroupPriority](focusgrouppriority.md): The importance of the item within a focus group, used by the focus system to determine the group’s primary item.

# focused (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the item is currently focused.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isFocused) BOOL focused;
```

<a id="Discussion"></a>

## Discussion

This is a convenience property that checks whether the item is equal to the value in the [UIScreen](../uiscreen.md) class’s [focusedView](../uiscreen/focusedview.md) property.

## See Also

### Working with focus

- [canBecomeFocused](canbecomefocused.md): A Boolean value that indicates whether the view is currently capable of being focused.
- [inheritedAnimationDuration](inheritedanimationduration.md): Returns the inherited duration of the current animation.
- [focusGroupIdentifier](focusgroupidentifier.md): The identifier of the focus group that this view belongs to.
- [focusEffect](focuseffect.md): The visual effect to apply when the view becomes focused.
- [focusGroupPriority](focusgrouppriority.md): The importance of the item within a focus group, used by the focus system to determine the group’s primary item.
