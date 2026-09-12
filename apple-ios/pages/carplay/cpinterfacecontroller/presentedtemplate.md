> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpinterfacecontroller/presentedtemplate](https://developer.apple.com/documentation/carplay/cpinterfacecontroller/presentedtemplate)

# presentedTemplate (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The interface controller’s current modal template.

## Declaration

```swift
var presentedTemplate: CPTemplate? { get }
```

## See Also

### Displaying Templates Modally

- [presentTemplate(\_:animated:completion:)](presenttemplate%28__animated_completion_%29.md): Presents a template modally.
- [dismissTemplate(animated:completion:)](dismisstemplate%28animated_completion_%29.md): Dismisses a modal template.

# presentedTemplate (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The interface controller’s current modal template.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CPTemplate * presentedTemplate;
```

## See Also

### Displaying Templates Modally

- [presentTemplate:animated:completion:](presenttemplate%28__animated_completion_%29.md): Presents a template modally.
- [dismissTemplateAnimated:completion:](dismisstemplate%28animated_completion_%29.md): Dismisses a modal template.
