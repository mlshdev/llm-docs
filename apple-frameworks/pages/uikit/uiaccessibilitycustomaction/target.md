> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitycustomaction/target](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomaction/target)

# target (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The object that performs the action.

## Declaration

```swift
weak var target: AnyObject? { get set }
```

## See Also

### Accessing the action parameters

- [name](name.md): The localized name of the action.
- [attributedName](attributedname.md): The localized name of the action as an attributed string.
- [image](image.md): An image that represents the action in assistive apps.
- [actionHandler](actionhandler.md): A handler to perform for the action.
- [selector](selector.md): The method that performs the action.
- [UIAccessibilityCustomAction.Handler](handler.md): A closure type that defines a handler to perform for an action.

# target (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The object that performs the action.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id target;
```

## See Also

### Accessing the action parameters

- [name](name.md): The localized name of the action.
- [attributedName](attributedname.md): The localized name of the action as an attributed string.
- [image](image.md): An image that represents the action in assistive apps.
- [actionHandler](actionhandler.md): A handler to perform for the action.
- [selector](selector.md): The method that performs the action.
- [UIAccessibilityCustomActionHandler](handler.md): A closure type that defines a handler to perform for an action.
