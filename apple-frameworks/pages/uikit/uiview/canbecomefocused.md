> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/canbecomefocused](https://developer.apple.com/documentation/uikit/uiview/canbecomefocused)

# canBecomeFocused (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the view is currently capable of being focused.

## Declaration

```swift
var canBecomeFocused: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the view can become focused; [false](https://developer.apple.com/documentation/swift/false) otherwise.

By default, the value of this property is [false](https://developer.apple.com/documentation/swift/false). This property informs the focus engine if a view is capable of being focused. Sometimes even if a view returns [true](https://developer.apple.com/documentation/swift/true), a view may not be focusable for the following reasons:

- The view is hidden.
- The view has alpha set to 0.
- The view has `userInteractionEnabled` set to [false](https://developer.apple.com/documentation/swift/false).
- The view is not currently in the view hierarchy.

## See Also

### Working with focus

- [inheritedAnimationDuration](inheritedanimationduration.md): Returns the inherited duration of the current animation.
- [isFocused](isfocused.md): A Boolean value that indicates whether the item is currently focused.
- [focusGroupIdentifier](focusgroupidentifier.md): The identifier of the focus group that this view belongs to.
- [focusEffect](focuseffect.md): The visual effect to apply when the view becomes focused.
- [focusGroupPriority](focusgrouppriority.md): The importance of the item within a focus group, used by the focus system to determine the group’s primary item.

# canBecomeFocused (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the view is currently capable of being focused.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL canBecomeFocused;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the view can become focused; [false](https://developer.apple.com/documentation/swift/false) otherwise.

By default, the value of this property is [false](https://developer.apple.com/documentation/swift/false). This property informs the focus engine if a view is capable of being focused. Sometimes even if a view returns [true](https://developer.apple.com/documentation/swift/true), a view may not be focusable for the following reasons:

- The view is hidden.
- The view has alpha set to 0.
- The view has `userInteractionEnabled` set to [false](https://developer.apple.com/documentation/swift/false).
- The view is not currently in the view hierarchy.

## See Also

### Working with focus

- [inheritedAnimationDuration](inheritedanimationduration.md): Returns the inherited duration of the current animation.
- [focused](isfocused.md): A Boolean value that indicates whether the item is currently focused.
- [focusGroupIdentifier](focusgroupidentifier.md): The identifier of the focus group that this view belongs to.
- [focusEffect](focuseffect.md): The visual effect to apply when the view becomes focused.
- [focusGroupPriority](focusgrouppriority.md): The importance of the item within a focus group, used by the focus system to determine the group’s primary item.
