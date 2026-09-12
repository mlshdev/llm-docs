> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpinterfacecontroller/setroottemplate(_:animated:)](https://developer.apple.com/documentation/carplay/cpinterfacecontroller/setroottemplate(_:animated:))

# setRootTemplate(\_:animated:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 14.0) · iPadOS 12.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Sets the root template, starting a new stack for the template navigation hierarchy.

> Use [setRootTemplate(\_:animated:completion:)](setroottemplate%28__animated_completion_%29.md) instead.

## Declaration

```swift
func setRootTemplate(_ rootTemplate: CPTemplate, animated: Bool)
```

## Parameters

- `rootTemplate`: The root template. Replaces the current [rootTemplate](roottemplate.md), if one exists.
- `animated`: Set to [true](https://developer.apple.com/documentation/swift/true) to animate the presentation of the root template; ignored if there isn’t a current [rootTemplate](roottemplate.md).

## See Also

### Deprecated Methods

- [pushTemplate(\_:animated:)](pushtemplate%28__animated_%29.md): Deprecated. Pushes a template onto the navigation stack and updates the CarPlay display.
- [popTemplate(animated:)](poptemplate%28animated_%29.md): Deprecated. Pops the top template from the navigation stack and updates the CarPlay display.
- [popToRootTemplate(animated:)](poptoroottemplate%28animated_%29.md): Deprecated. Pops all templates on the stack—except the root template—and updates the CarPlay display.
- [pop(to:animated:)](pop%28to_animated_%29.md): Deprecated. Pops templates until the specified template is at the top of the navigation stack.
- [presentTemplate(\_:animated:)](presenttemplate%28__animated_%29.md): Deprecated. Presents a template modally.
- [dismissTemplate(animated:)](dismisstemplate%28animated_%29.md): Deprecated. Dismisses the template that the interface controller is displaying modally.

# setRootTemplate:animated: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 14.0) · iPadOS 12.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Sets the root template, starting a new stack for the template navigation hierarchy.

> Use [setRootTemplate:animated:completion:](setroottemplate%28__animated_completion_%29.md) instead.

## Declaration

```objectivec
- (void) setRootTemplate:(CPTemplate *) rootTemplate animated:(BOOL) animated;
```

## Parameters

- `rootTemplate`: The root template. Replaces the current [rootTemplate](roottemplate.md), if one exists.
- `animated`: Set to [true](https://developer.apple.com/documentation/swift/true) to animate the presentation of the root template; ignored if there isn’t a current [rootTemplate](roottemplate.md).

## See Also

### Deprecated Methods

- [pushTemplate:animated:](pushtemplate%28__animated_%29.md): Deprecated. Pushes a template onto the navigation stack and updates the CarPlay display.
- [popTemplateAnimated:](poptemplate%28animated_%29.md): Deprecated. Pops the top template from the navigation stack and updates the CarPlay display.
- [popToRootTemplateAnimated:](poptoroottemplate%28animated_%29.md): Deprecated. Pops all templates on the stack—except the root template—and updates the CarPlay display.
- [popToTemplate:animated:](pop%28to_animated_%29.md): Deprecated. Pops templates until the specified template is at the top of the navigation stack.
- [presentTemplate:animated:](presenttemplate%28__animated_%29.md): Deprecated. Presents a template modally.
- [dismissTemplateAnimated:](dismisstemplate%28animated_%29.md): Deprecated. Dismisses the template that the interface controller is displaying modally.
