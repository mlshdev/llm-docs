> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/focuseffect](https://developer.apple.com/documentation/uikit/uiview/focuseffect)

# focusEffect (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The visual effect to apply when the view becomes focused.

## Declaration

```swift
@NSCopying var focusEffect: UIFocusEffect? { get set }
```

<a id="Discussion"></a>

## Discussion

If this property is `nil`, the system doesn’t apply an effect when the view becomes focused.

## See Also

### Working with focus

- [canBecomeFocused](canbecomefocused.md): A Boolean value that indicates whether the view is currently capable of being focused.
- [inheritedAnimationDuration](inheritedanimationduration.md): Returns the inherited duration of the current animation.
- [isFocused](isfocused.md): A Boolean value that indicates whether the item is currently focused.
- [focusGroupIdentifier](focusgroupidentifier.md): The identifier of the focus group that this view belongs to.
- [focusGroupPriority](focusgrouppriority.md): The importance of the item within a focus group, used by the focus system to determine the group’s primary item.

# focusEffect (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The visual effect to apply when the view becomes focused.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) UIFocusEffect * focusEffect;
```

<a id="Discussion"></a>

## Discussion

If this property is `nil`, the system doesn’t apply an effect when the view becomes focused.

## See Also

### Working with focus

- [canBecomeFocused](canbecomefocused.md): A Boolean value that indicates whether the view is currently capable of being focused.
- [inheritedAnimationDuration](inheritedanimationduration.md): Returns the inherited duration of the current animation.
- [focused](isfocused.md): A Boolean value that indicates whether the item is currently focused.
- [focusGroupIdentifier](focusgroupidentifier.md): The identifier of the focus group that this view belongs to.
- [focusGroupPriority](focusgrouppriority.md): The importance of the item within a focus group, used by the focus system to determine the group’s primary item.
