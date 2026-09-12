> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpinterfacecontroller/pushtemplate(_:animated:)](https://developer.apple.com/documentation/carplay/cpinterfacecontroller/pushtemplate(_:animated:))

# pushTemplate(\_:animated:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 14.0) · iPadOS 12.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Pushes a template onto the navigation stack and updates the CarPlay display.

> Use [pushTemplate(\_:animated:completion:)](pushtemplate%28__animated_completion_%29.md) instead.

## Declaration

```swift
func pushTemplate(_ templateToPush: CPTemplate, animated: Bool)
```

## Parameters

- `templateToPush`: The template to push onto the navigation stack.
- `animated`: Set to [true](https://developer.apple.com/documentation/swift/true) to animate the presentation of the template.

## See Also

### Deprecated Methods

- [setRootTemplate(\_:animated:)](setroottemplate%28__animated_%29.md): Deprecated. Sets the root template, starting a new stack for the template navigation hierarchy.
- [popTemplate(animated:)](poptemplate%28animated_%29.md): Deprecated. Pops the top template from the navigation stack and updates the CarPlay display.
- [popToRootTemplate(animated:)](poptoroottemplate%28animated_%29.md): Deprecated. Pops all templates on the stack—except the root template—and updates the CarPlay display.
- [pop(to:animated:)](pop%28to_animated_%29.md): Deprecated. Pops templates until the specified template is at the top of the navigation stack.
- [presentTemplate(\_:animated:)](presenttemplate%28__animated_%29.md): Deprecated. Presents a template modally.
- [dismissTemplate(animated:)](dismisstemplate%28animated_%29.md): Deprecated. Dismisses the template that the interface controller is displaying modally.

# pushTemplate:animated: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 14.0) · iPadOS 12.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Pushes a template onto the navigation stack and updates the CarPlay display.

> Use [pushTemplate:animated:completion:](pushtemplate%28__animated_completion_%29.md) instead.

## Declaration

```objectivec
- (void) pushTemplate:(CPTemplate *) templateToPush animated:(BOOL) animated;
```

## Parameters

- `templateToPush`: The template to push onto the navigation stack.
- `animated`: Set to [true](https://developer.apple.com/documentation/swift/true) to animate the presentation of the template.

## See Also

### Deprecated Methods

- [setRootTemplate:animated:](setroottemplate%28__animated_%29.md): Deprecated. Sets the root template, starting a new stack for the template navigation hierarchy.
- [popTemplateAnimated:](poptemplate%28animated_%29.md): Deprecated. Pops the top template from the navigation stack and updates the CarPlay display.
- [popToRootTemplateAnimated:](poptoroottemplate%28animated_%29.md): Deprecated. Pops all templates on the stack—except the root template—and updates the CarPlay display.
- [popToTemplate:animated:](pop%28to_animated_%29.md): Deprecated. Pops templates until the specified template is at the top of the navigation stack.
- [presentTemplate:animated:](presenttemplate%28__animated_%29.md): Deprecated. Presents a template modally.
- [dismissTemplateAnimated:](dismisstemplate%28animated_%29.md): Deprecated. Dismisses the template that the interface controller is displaying modally.
