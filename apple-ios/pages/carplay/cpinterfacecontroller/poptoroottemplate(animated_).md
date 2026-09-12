> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpinterfacecontroller/poptoroottemplate(animated:)](https://developer.apple.com/documentation/carplay/cpinterfacecontroller/poptoroottemplate(animated:))

# popToRootTemplate(animated:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 14.0) · iPadOS 12.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Pops all templates on the stack—except the root template—and updates the CarPlay display.

> Use [popToRootTemplate(animated:completion:)](poptoroottemplate%28animated_completion_%29.md) instead.

## Declaration

```swift
func popToRootTemplate(animated: Bool)
```

## Parameters

- `animated`: A Boolean value that indicates whether the system animates the display of transitioning templates. Set to [true](https://developer.apple.com/documentation/swift/true) to animate the transition.

## See Also

### Deprecated Methods

- [setRootTemplate(\_:animated:)](setroottemplate%28__animated_%29.md): Deprecated. Sets the root template, starting a new stack for the template navigation hierarchy.
- [pushTemplate(\_:animated:)](pushtemplate%28__animated_%29.md): Deprecated. Pushes a template onto the navigation stack and updates the CarPlay display.
- [popTemplate(animated:)](poptemplate%28animated_%29.md): Deprecated. Pops the top template from the navigation stack and updates the CarPlay display.
- [pop(to:animated:)](pop%28to_animated_%29.md): Deprecated. Pops templates until the specified template is at the top of the navigation stack.
- [presentTemplate(\_:animated:)](presenttemplate%28__animated_%29.md): Deprecated. Presents a template modally.
- [dismissTemplate(animated:)](dismisstemplate%28animated_%29.md): Deprecated. Dismisses the template that the interface controller is displaying modally.

# popToRootTemplateAnimated: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 14.0) · iPadOS 12.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Pops all templates on the stack—except the root template—and updates the CarPlay display.

> Use [popToRootTemplateAnimated:completion:](poptoroottemplate%28animated_completion_%29.md) instead.

## Declaration

```objectivec
- (void) popToRootTemplateAnimated:(BOOL) animated;
```

## Parameters

- `animated`: A Boolean value that indicates whether the system animates the display of transitioning templates. Set to [true](https://developer.apple.com/documentation/swift/true) to animate the transition.

## See Also

### Deprecated Methods

- [setRootTemplate:animated:](setroottemplate%28__animated_%29.md): Deprecated. Sets the root template, starting a new stack for the template navigation hierarchy.
- [pushTemplate:animated:](pushtemplate%28__animated_%29.md): Deprecated. Pushes a template onto the navigation stack and updates the CarPlay display.
- [popTemplateAnimated:](poptemplate%28animated_%29.md): Deprecated. Pops the top template from the navigation stack and updates the CarPlay display.
- [popToTemplate:animated:](pop%28to_animated_%29.md): Deprecated. Pops templates until the specified template is at the top of the navigation stack.
- [presentTemplate:animated:](presenttemplate%28__animated_%29.md): Deprecated. Presents a template modally.
- [dismissTemplateAnimated:](dismisstemplate%28animated_%29.md): Deprecated. Dismisses the template that the interface controller is displaying modally.
