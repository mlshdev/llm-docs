> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitycustomaction/init(attributedname:actionhandler:)](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomaction/init(attributedname:actionhandler:))

# init(attributedName:actionHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a custom action object with the specified attributed name and action handler.

## Declaration

```swift
init(attributedName: NSAttributedString, actionHandler: @escaping UIAccessibilityCustomAction.Handler)
```

## See Also

### Creating a custom action

- [init(name:actionHandler:)](init%28name_actionhandler_%29.md): Creates a custom action object with the specified name and action handler.
- [init(name:target:selector:)](init%28name_target_selector_%29.md): Creates a custom action object with the specified name, target, and selector.
- [init(name:image:actionHandler:)](init%28name_image_actionhandler_%29.md): Creates a custom action object with the specified name, image, and action handler.
- [init(name:image:target:selector:)](init%28name_image_target_selector_%29.md): Creates a custom action object with the specified name, image, target, and selector.
- [init(attributedName:target:selector:)](init%28attributedname_target_selector_%29.md): Creates a custom action object with the specified attributed name, target, and selector.
- [init(attributedName:image:actionHandler:)](init%28attributedname_image_actionhandler_%29.md): Creates a custom action object with the specified attributed name, image, and action handler.
- [init(attributedName:image:target:selector:)](init%28attributedname_image_target_selector_%29.md): Creates a custom action object with the specified attributed name, image, target, and selector.

# initWithAttributedName:actionHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a custom action object with the specified attributed name and action handler.

## Declaration

```objectivec
- (instancetype) initWithAttributedName:(NSAttributedString *) attributedName actionHandler:(UIAccessibilityCustomActionHandler) actionHandler;
```

## See Also

### Creating a custom action

- [initWithName:actionHandler:](init%28name_actionhandler_%29.md): Creates a custom action object with the specified name and action handler.
- [initWithName:target:selector:](init%28name_target_selector_%29.md): Creates a custom action object with the specified name, target, and selector.
- [initWithName:image:actionHandler:](init%28name_image_actionhandler_%29.md): Creates a custom action object with the specified name, image, and action handler.
- [initWithName:image:target:selector:](init%28name_image_target_selector_%29.md): Creates a custom action object with the specified name, image, target, and selector.
- [initWithAttributedName:target:selector:](init%28attributedname_target_selector_%29.md): Creates a custom action object with the specified attributed name, target, and selector.
- [initWithAttributedName:image:actionHandler:](init%28attributedname_image_actionhandler_%29.md): Creates a custom action object with the specified attributed name, image, and action handler.
- [initWithAttributedName:image:target:selector:](init%28attributedname_image_target_selector_%29.md): Creates a custom action object with the specified attributed name, image, target, and selector.
