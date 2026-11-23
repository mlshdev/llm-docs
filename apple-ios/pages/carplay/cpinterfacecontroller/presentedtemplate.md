> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinterfacecontroller/presentedtemplate

# presentedTemplate (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The current modally-presented template.

## Declaration

```swift
var presentedTemplate: CPTemplate? { get }
```

<a id="discussion"></a>

## Discussion

To present a template modally from your app’s interface, call the [presentTemplate(\_:animated:completion:)](presenttemplate%28__animated_completion_%29.md) method. If there isn’t a modally presented template currently, the value of this property is `nil`.

## See Also

### Presenting a template modally

- [presentTemplate(\_:animated:completion:)](presenttemplate%28__animated_completion_%29.md): Presents the template modally over your app’s navigation interface.
- [dismissTemplate(animated:completion:)](dismisstemplate%28animated_completion_%29.md): Dismisses the template you previously presented modally.

# presentedTemplate (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The current modally-presented template.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CPTemplate * presentedTemplate;
```

<a id="discussion"></a>

## Discussion

To present a template modally from your app’s interface, call the [presentTemplate:animated:completion:](presenttemplate%28__animated_completion_%29.md) method. If there isn’t a modally presented template currently, the value of this property is `nil`.

## See Also

### Presenting a template modally

- [presentTemplate:animated:completion:](presenttemplate%28__animated_completion_%29.md): Presents the template modally over your app’s navigation interface.
- [dismissTemplateAnimated:completion:](dismisstemplate%28animated_completion_%29.md): Dismisses the template you previously presented modally.
