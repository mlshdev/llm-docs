> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitycustomaction/attributedname](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomaction/attributedname)

# attributedName (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The localized name of the action as an attributed string.

## Declaration

```swift
@NSCopying var attributedName: NSAttributedString { get set }
```

## See Also

### Accessing the action parameters

- [name](name.md): The localized name of the action.
- [image](image.md): An image that represents the action in assistive apps.
- [actionHandler](actionhandler.md): A handler to perform for the action.
- [target](target.md): The object that performs the action.
- [selector](selector.md): The method that performs the action.
- [UIAccessibilityCustomAction.Handler](handler.md): A closure type that defines a handler to perform for an action.

# attributedName (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The localized name of the action as an attributed string.

## Declaration

```objectivec
@property (nonatomic, copy) NSAttributedString * attributedName;
```

## See Also

### Accessing the action parameters

- [name](name.md): The localized name of the action.
- [image](image.md): An image that represents the action in assistive apps.
- [actionHandler](actionhandler.md): A handler to perform for the action.
- [target](target.md): The object that performs the action.
- [selector](selector.md): The method that performs the action.
- [UIAccessibilityCustomActionHandler](handler.md): A closure type that defines a handler to perform for an action.
