> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/inheritedanimationduration](https://developer.apple.com/documentation/uikit/uiview/inheritedanimationduration)

# inheritedAnimationDuration (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns the inherited duration of the current animation.

## Declaration

```swift
class var inheritedAnimationDuration: TimeInterval { get }
```

<a id="return-value"></a>

## Return Value

The duration of the current animation.

<a id="Discussion"></a>

## Discussion

This method only returns a non-zero value if called within a [UIView](../uiview.md) animation block.

## See Also

### Working with focus

- [canBecomeFocused](canbecomefocused.md): A Boolean value that indicates whether the view is currently capable of being focused.
- [isFocused](isfocused.md): A Boolean value that indicates whether the item is currently focused.
- [focusGroupIdentifier](focusgroupidentifier.md): The identifier of the focus group that this view belongs to.
- [focusEffect](focuseffect.md): The visual effect to apply when the view becomes focused.
- [focusGroupPriority](focusgrouppriority.md): The importance of the item within a focus group, used by the focus system to determine the group’s primary item.

# inheritedAnimationDuration (Objective-C)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the inherited duration of the current animation.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSTimeInterval inheritedAnimationDuration;
```

<a id="return-value"></a>

## Return Value

The duration of the current animation.

<a id="Discussion"></a>

## Discussion

This method only returns a non-zero value if called within a [UIView](../uiview.md) animation block.

## See Also

### Working with focus

- [canBecomeFocused](canbecomefocused.md): A Boolean value that indicates whether the view is currently capable of being focused.
- [focused](isfocused.md): A Boolean value that indicates whether the item is currently focused.
- [focusGroupIdentifier](focusgroupidentifier.md): The identifier of the focus group that this view belongs to.
- [focusEffect](focuseffect.md): The visual effect to apply when the view becomes focused.
- [focusGroupPriority](focusgrouppriority.md): The importance of the item within a focus group, used by the focus system to determine the group’s primary item.
