> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/action](https://developer.apple.com/documentation/uikit/uibarbuttonitem/action)

# action (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The selector defining the action message to send to the target object when the user taps this bar button item.

## Declaration

```swift
var action: Selector? { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is `nil`, no action message is sent. The default value is `nil`.

## See Also

### Managing the action

- [primaryAction](primaryaction.md): The action associated with the item.
- [changesSelectionAsPrimaryAction](changesselectionasprimaryaction.md): A Boolean value that indicates whether the button represents an action or selection.
- [target](target.md): The object that receives an action when the user selects the item.

# action (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The selector defining the action message to send to the target object when the user taps this bar button item.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite, nullable) SEL action;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is `nil`, no action message is sent. The default value is `nil`.

## See Also

### Managing the action

- [primaryAction](primaryaction.md): The action associated with the item.
- [changesSelectionAsPrimaryAction](changesselectionasprimaryaction.md): A Boolean value that indicates whether the button represents an action or selection.
- [target](target.md): The object that receives an action when the user selects the item.
