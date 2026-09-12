> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitycustomaction/actionhandler](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomaction/actionhandler)

# actionHandler (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A handler to perform for the action.

## Declaration

```swift
var actionHandler: UIAccessibilityCustomAction.Handler? { get set }
```

<a id="Discussion"></a>

## Discussion

If you set this property, the system chooses this action handler over the [target](target.md) and [selector](selector.md).

## See Also

### Accessing the action parameters

- [name](name.md): The localized name of the action.
- [attributedName](attributedname.md): The localized name of the action as an attributed string.
- [image](image.md): An image that represents the action in assistive apps.
- [target](target.md): The object that performs the action.
- [selector](selector.md): The method that performs the action.
- [UIAccessibilityCustomAction.Handler](handler.md): A closure type that defines a handler to perform for an action.

# actionHandler (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A handler to perform for the action.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIAccessibilityCustomActionHandler actionHandler;
```

<a id="Discussion"></a>

## Discussion

If you set this property, the system chooses this action handler over the [target](target.md) and [selector](selector.md).

## See Also

### Accessing the action parameters

- [name](name.md): The localized name of the action.
- [attributedName](attributedname.md): The localized name of the action as an attributed string.
- [image](image.md): An image that represents the action in assistive apps.
- [target](target.md): The object that performs the action.
- [selector](selector.md): The method that performs the action.
- [UIAccessibilityCustomActionHandler](handler.md): A closure type that defines a handler to perform for an action.
