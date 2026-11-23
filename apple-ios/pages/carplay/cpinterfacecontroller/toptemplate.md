> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinterfacecontroller/toptemplate

# topTemplate (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The top-most template in your app’s navigation hierarchy.

## Declaration

```swift
var topTemplate: CPTemplate? { get }
```

<a id="discussion"></a>

## Discussion

This property stores the top-most template in your app’s navigation stack. The navigation stack includes the root template and the templates you pushed onto the stack using the [pushTemplate(\_:animated:completion:)](pushtemplate%28__animated_completion_%29.md) method. It doesn’t include templates you removed from the stack or templates you presented modally or using an overlay. If you haven’t yet installed a root template, this property is `nil`.

## See Also

### Getting the current templates

- [rootTemplate](roottemplate.md): The root template in the navigation hierarchy.
- [templates](templates.md): The templates currently in your app’s navigation hierarchy.

# topTemplate (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The top-most template in your app’s navigation hierarchy.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) CPTemplate * topTemplate;
```

<a id="discussion"></a>

## Discussion

This property stores the top-most template in your app’s navigation stack. The navigation stack includes the root template and the templates you pushed onto the stack using the [pushTemplate:animated:completion:](pushtemplate%28__animated_completion_%29.md) method. It doesn’t include templates you removed from the stack or templates you presented modally or using an overlay. If you haven’t yet installed a root template, this property is `nil`.

## See Also

### Getting the current templates

- [rootTemplate](roottemplate.md): The root template in the navigation hierarchy.
- [templates](templates.md): The templates currently in your app’s navigation hierarchy.
