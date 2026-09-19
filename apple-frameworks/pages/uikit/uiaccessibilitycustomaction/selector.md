> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiaccessibilitycustomaction/selector

# selector (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The method that performs the action.

## Declaration

```swift
var selector: Selector { get set }
```

<a id="Discussion"></a>

## Discussion

The signature of the selector must take one of the following forms:

```objc
- (BOOL)myPerformActionMethod
- (BOOL)myPerformActionMethod:(UIAccessibilityCustomAction *)action
```

When the user selects a custom action, the assistive technology calls the specified method of the object in the [target](target.md) property. Use your method to perform the indicated action.

## See Also

### Accessing the action parameters

- [name](name.md): The localized name of the action.
- [attributedName](attributedname.md): The localized name of the action as an attributed string.
- [image](image.md): An image that represents the action in assistive apps.
- [actionHandler](actionhandler.md): A handler to perform for the action.
- [target](target.md): The object that performs the action.
- [UIAccessibilityCustomAction.Handler](handler.md): A closure type that defines a handler to perform for an action.

# selector (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The method that performs the action.

## Declaration

```objectivec
@property (nonatomic, assign) SEL selector;
```

<a id="Discussion"></a>

## Discussion

The signature of the selector must take one of the following forms:

```objc
- (BOOL)myPerformActionMethod
- (BOOL)myPerformActionMethod:(UIAccessibilityCustomAction *)action
```

When the user selects a custom action, the assistive technology calls the specified method of the object in the [target](target.md) property. Use your method to perform the indicated action.

## See Also

### Accessing the action parameters

- [name](name.md): The localized name of the action.
- [attributedName](attributedname.md): The localized name of the action as an attributed string.
- [image](image.md): An image that represents the action in assistive apps.
- [actionHandler](actionhandler.md): A handler to perform for the action.
- [target](target.md): The object that performs the action.
- [UIAccessibilityCustomActionHandler](handler.md): A closure type that defines a handler to perform for an action.
