> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/focusgroupidentifier](https://developer.apple.com/documentation/uikit/uiview/focusgroupidentifier)

# focusGroupIdentifier (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The identifier of the focus group that this view belongs to.

## Declaration

```swift
var focusGroupIdentifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

If this property is `nil`, subviews inherit their superview’s focus group.

## See Also

### Working with focus

- [canBecomeFocused](canbecomefocused.md): A Boolean value that indicates whether the view is currently capable of being focused.
- [inheritedAnimationDuration](inheritedanimationduration.md): Returns the inherited duration of the current animation.
- [isFocused](isfocused.md): A Boolean value that indicates whether the item is currently focused.
- [focusEffect](focuseffect.md): The visual effect to apply when the view becomes focused.
- [focusGroupPriority](focusgrouppriority.md): The importance of the item within a focus group, used by the focus system to determine the group’s primary item.

# focusGroupIdentifier (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

The identifier of the focus group that this view belongs to.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSString * focusGroupIdentifier;
```

<a id="Discussion"></a>

## Discussion

If this property is `nil`, subviews inherit their superview’s focus group.

## See Also

### Working with focus

- [canBecomeFocused](canbecomefocused.md): A Boolean value that indicates whether the view is currently capable of being focused.
- [inheritedAnimationDuration](inheritedanimationduration.md): Returns the inherited duration of the current animation.
- [focused](isfocused.md): A Boolean value that indicates whether the item is currently focused.
- [focusEffect](focuseffect.md): The visual effect to apply when the view becomes focused.
- [focusGroupPriority](focusgrouppriority.md): The importance of the item within a focus group, used by the focus system to determine the group’s primary item.
