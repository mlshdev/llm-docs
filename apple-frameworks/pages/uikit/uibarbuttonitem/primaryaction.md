> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/primaryaction](https://developer.apple.com/documentation/uikit/uibarbuttonitem/primaryaction)

# primaryAction (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The action associated with the item.

## Declaration

```swift
@NSCopying var primaryAction: UIAction? { get set }
```

<a id="Discussion"></a>

## Discussion

When you assign a new value to this property, the title and image of the item update to match the primary action’s [title](../uiaction/title.md) and [image](../uiaction/image.md).

If this property has a non-`nil` value, the system ignores the item’s [target](target.md) and [action](action.md) properties.

## See Also

### Managing the action

- [changesSelectionAsPrimaryAction](changesselectionasprimaryaction.md): A Boolean value that indicates whether the button represents an action or selection.
- [action](action.md): The selector defining the action message to send to the target object when the user taps this bar button item.
- [target](target.md): The object that receives an action when the user selects the item.

# primaryAction (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The action associated with the item.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) UIAction * primaryAction;
```

<a id="Discussion"></a>

## Discussion

When you assign a new value to this property, the title and image of the item update to match the primary action’s [title](../uiaction/title.md) and [image](../uiaction/image.md).

If this property has a non-`nil` value, the system ignores the item’s [target](target.md) and [action](action.md) properties.

## See Also

### Managing the action

- [changesSelectionAsPrimaryAction](changesselectionasprimaryaction.md): A Boolean value that indicates whether the button represents an action or selection.
- [action](action.md): The selector defining the action message to send to the target object when the user taps this bar button item.
- [target](target.md): The object that receives an action when the user selects the item.
