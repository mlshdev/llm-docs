> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/target](https://developer.apple.com/documentation/uikit/uibarbuttonitem/target)

# target (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The object that receives an action when the user selects the item.

## Declaration

```swift
weak var target: AnyObject? { get set }
```

<a id="Discussion"></a>

## Discussion

If `nil`, the action message is passed up the responder chain where it may be handled by any object implementing a method corresponding to the selector held by the [action](action.md) property. The default value is `nil`.

## See Also

### Managing the action

- [primaryAction](primaryaction.md): The action associated with the item.
- [changesSelectionAsPrimaryAction](changesselectionasprimaryaction.md): A Boolean value that indicates whether the button represents an action or selection.
- [action](action.md): The selector defining the action message to send to the target object when the user taps this bar button item.

# target (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The object that receives an action when the user selects the item.

## Declaration

```objectivec
@property (nonatomic, weak, readwrite, nullable) id target;
```

<a id="Discussion"></a>

## Discussion

If `nil`, the action message is passed up the responder chain where it may be handled by any object implementing a method corresponding to the selector held by the [action](action.md) property. The default value is `nil`.

## See Also

### Managing the action

- [primaryAction](primaryaction.md): The action associated with the item.
- [changesSelectionAsPrimaryAction](changesselectionasprimaryaction.md): A Boolean value that indicates whether the button represents an action or selection.
- [action](action.md): The selector defining the action message to send to the target object when the user taps this bar button item.
