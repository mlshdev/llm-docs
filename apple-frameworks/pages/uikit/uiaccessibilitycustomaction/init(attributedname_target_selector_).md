> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitycustomaction/init(attributedname:target:selector:)](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomaction/init(attributedname:target:selector:))

# init(attributedName:target:selector:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Creates a custom action object with the specified attributed name, target, and selector.

## Declaration

```swift
init(attributedName: NSAttributedString, target: Any?, selector: Selector)
```

## Parameters

- `attributedName`: The localized name of the action. Provide a short and descriptive name for the action.
- `target`: The object that performs the action.
- `selector`: The selector of target to call when you want to perform the action. The method signature must take one of the following forms:

  ```objc
  - (BOOL)myPerformActionMethod
  - (BOOL)myPerformActionMethod:(UIAccessibilityCustomAction *)action
  ```

<a id="return-value"></a>

## Return Value

An initialized custom action object.

## See Also

### Creating a custom action

- [init(name:actionHandler:)](init%28name_actionhandler_%29.md): Creates a custom action object with the specified name and action handler.
- [init(name:target:selector:)](init%28name_target_selector_%29.md): Creates a custom action object with the specified name, target, and selector.
- [init(name:image:actionHandler:)](init%28name_image_actionhandler_%29.md): Creates a custom action object with the specified name, image, and action handler.
- [init(name:image:target:selector:)](init%28name_image_target_selector_%29.md): Creates a custom action object with the specified name, image, target, and selector.
- [init(attributedName:actionHandler:)](init%28attributedname_actionhandler_%29.md): Creates a custom action object with the specified attributed name and action handler.
- [init(attributedName:image:actionHandler:)](init%28attributedname_image_actionhandler_%29.md): Creates a custom action object with the specified attributed name, image, and action handler.
- [init(attributedName:image:target:selector:)](init%28attributedname_image_target_selector_%29.md): Creates a custom action object with the specified attributed name, image, target, and selector.

# initWithAttributedName:target:selector: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Creates a custom action object with the specified attributed name, target, and selector.

## Declaration

```objectivec
- (instancetype) initWithAttributedName:(NSAttributedString *) attributedName target:(id) target selector:(SEL) selector;
```

## Parameters

- `attributedName`: The localized name of the action. Provide a short and descriptive name for the action.
- `target`: The object that performs the action.
- `selector`: The selector of target to call when you want to perform the action. The method signature must take one of the following forms:

  ```objc
  - (BOOL)myPerformActionMethod
  - (BOOL)myPerformActionMethod:(UIAccessibilityCustomAction *)action
  ```

<a id="return-value"></a>

## Return Value

An initialized custom action object.

## See Also

### Creating a custom action

- [initWithName:actionHandler:](init%28name_actionhandler_%29.md): Creates a custom action object with the specified name and action handler.
- [initWithName:target:selector:](init%28name_target_selector_%29.md): Creates a custom action object with the specified name, target, and selector.
- [initWithName:image:actionHandler:](init%28name_image_actionhandler_%29.md): Creates a custom action object with the specified name, image, and action handler.
- [initWithName:image:target:selector:](init%28name_image_target_selector_%29.md): Creates a custom action object with the specified name, image, target, and selector.
- [initWithAttributedName:actionHandler:](init%28attributedname_actionhandler_%29.md): Creates a custom action object with the specified attributed name and action handler.
- [initWithAttributedName:image:actionHandler:](init%28attributedname_image_actionhandler_%29.md): Creates a custom action object with the specified attributed name, image, and action handler.
- [initWithAttributedName:image:target:selector:](init%28attributedname_image_target_selector_%29.md): Creates a custom action object with the specified attributed name, image, target, and selector.
