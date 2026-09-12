> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpinterfacecontroller/pop(to:animated:)](https://developer.apple.com/documentation/carplay/cpinterfacecontroller/pop(to:animated:))

# pop(to:animated:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 14.0) · iPadOS 12.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Pops templates until the specified template is at the top of the navigation stack.

> Use [pop(to:animated:completion:)](pop%28to_animated_completion_%29.md) instead.

## Declaration

```swift
func pop(to targetTemplate: CPTemplate, animated: Bool)
```

## Parameters

- `targetTemplate`: The template that you want at the top of the stack. The template must be on the navigation stack before you call this method.
- `animated`: A Boolean value that indicates whether the system animates the display of transitioning templates. Set to [true](https://developer.apple.com/documentation/swift/true) to animate the transition.

## See Also

### Deprecated Methods

- [setRootTemplate(\_:animated:)](setroottemplate%28__animated_%29.md): Deprecated. Sets the root template, starting a new stack for the template navigation hierarchy.
- [pushTemplate(\_:animated:)](pushtemplate%28__animated_%29.md): Deprecated. Pushes a template onto the navigation stack and updates the CarPlay display.
- [popTemplate(animated:)](poptemplate%28animated_%29.md): Deprecated. Pops the top template from the navigation stack and updates the CarPlay display.
- [popToRootTemplate(animated:)](poptoroottemplate%28animated_%29.md): Deprecated. Pops all templates on the stack—except the root template—and updates the CarPlay display.
- [presentTemplate(\_:animated:)](presenttemplate%28__animated_%29.md): Deprecated. Presents a template modally.
- [dismissTemplate(animated:)](dismisstemplate%28animated_%29.md): Deprecated. Dismisses the template that the interface controller is displaying modally.

# popToTemplate:animated: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 14.0) · iPadOS 12.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Pops templates until the specified template is at the top of the navigation stack.

> Use [popToTemplate:animated:completion:](pop%28to_animated_completion_%29.md) instead.

## Declaration

```objectivec
- (void) popToTemplate:(CPTemplate *) targetTemplate animated:(BOOL) animated;
```

## Parameters

- `targetTemplate`: The template that you want at the top of the stack. The template must be on the navigation stack before you call this method.
- `animated`: A Boolean value that indicates whether the system animates the display of transitioning templates. Set to [true](https://developer.apple.com/documentation/swift/true) to animate the transition.

## See Also

### Deprecated Methods

- [setRootTemplate:animated:](setroottemplate%28__animated_%29.md): Deprecated. Sets the root template, starting a new stack for the template navigation hierarchy.
- [pushTemplate:animated:](pushtemplate%28__animated_%29.md): Deprecated. Pushes a template onto the navigation stack and updates the CarPlay display.
- [popTemplateAnimated:](poptemplate%28animated_%29.md): Deprecated. Pops the top template from the navigation stack and updates the CarPlay display.
- [popToRootTemplateAnimated:](poptoroottemplate%28animated_%29.md): Deprecated. Pops all templates on the stack—except the root template—and updates the CarPlay display.
- [presentTemplate:animated:](presenttemplate%28__animated_%29.md): Deprecated. Presents a template modally.
- [dismissTemplateAnimated:](dismisstemplate%28animated_%29.md): Deprecated. Dismisses the template that the interface controller is displaying modally.
