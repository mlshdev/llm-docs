> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/changesselectionasprimaryaction](https://developer.apple.com/documentation/uikit/uibarbuttonitem/changesselectionasprimaryaction)

# changesSelectionAsPrimaryAction (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the button represents an action or selection.

## Declaration

```swift
var changesSelectionAsPrimaryAction: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When a button has this property set to [true](https://developer.apple.com/documentation/swift/true), the button changes to a toggle button where tapping it changes it between selected and unselected.

## See Also

### Managing the action

- [primaryAction](primaryaction.md): The action associated with the item.
- [action](action.md): The selector defining the action message to send to the target object when the user taps this bar button item.
- [target](target.md): The object that receives an action when the user selects the item.

# changesSelectionAsPrimaryAction (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the button represents an action or selection.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) BOOL changesSelectionAsPrimaryAction;
```

<a id="Discussion"></a>

## Discussion

When a button has this property set to [true](https://developer.apple.com/documentation/swift/true), the button changes to a toggle button where tapping it changes it between selected and unselected.

## See Also

### Managing the action

- [primaryAction](primaryaction.md): The action associated with the item.
- [action](action.md): The selector defining the action message to send to the target object when the user taps this bar button item.
- [target](target.md): The object that receives an action when the user selects the item.
