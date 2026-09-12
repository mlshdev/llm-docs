> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitycustomaction/init(name:actionhandler:)](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomaction/init(name:actionhandler:))

# init(name:actionHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a custom action object with the specified name and action handler.

## Declaration

```swift
init(name: String, actionHandler: @escaping UIAccessibilityCustomAction.Handler)
```

## See Also

### Creating a custom action

- [init(name:target:selector:)](init%28name_target_selector_%29.md): Creates a custom action object with the specified name, target, and selector.
- [init(name:image:actionHandler:)](init%28name_image_actionhandler_%29.md): Creates a custom action object with the specified name, image, and action handler.
- [init(name:image:target:selector:)](init%28name_image_target_selector_%29.md): Creates a custom action object with the specified name, image, target, and selector.
- [init(attributedName:actionHandler:)](init%28attributedname_actionhandler_%29.md): Creates a custom action object with the specified attributed name and action handler.
- [init(attributedName:target:selector:)](init%28attributedname_target_selector_%29.md): Creates a custom action object with the specified attributed name, target, and selector.
- [init(attributedName:image:actionHandler:)](init%28attributedname_image_actionhandler_%29.md): Creates a custom action object with the specified attributed name, image, and action handler.
- [init(attributedName:image:target:selector:)](init%28attributedname_image_target_selector_%29.md): Creates a custom action object with the specified attributed name, image, target, and selector.

# initWithName:actionHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a custom action object with the specified name and action handler.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name actionHandler:(UIAccessibilityCustomActionHandler) actionHandler;
```

## See Also

### Creating a custom action

- [initWithName:target:selector:](init%28name_target_selector_%29.md): Creates a custom action object with the specified name, target, and selector.
- [initWithName:image:actionHandler:](init%28name_image_actionhandler_%29.md): Creates a custom action object with the specified name, image, and action handler.
- [initWithName:image:target:selector:](init%28name_image_target_selector_%29.md): Creates a custom action object with the specified name, image, target, and selector.
- [initWithAttributedName:actionHandler:](init%28attributedname_actionhandler_%29.md): Creates a custom action object with the specified attributed name and action handler.
- [initWithAttributedName:target:selector:](init%28attributedname_target_selector_%29.md): Creates a custom action object with the specified attributed name, target, and selector.
- [initWithAttributedName:image:actionHandler:](init%28attributedname_image_actionhandler_%29.md): Creates a custom action object with the specified attributed name, image, and action handler.
- [initWithAttributedName:image:target:selector:](init%28attributedname_image_target_selector_%29.md): Creates a custom action object with the specified attributed name, image, target, and selector.
