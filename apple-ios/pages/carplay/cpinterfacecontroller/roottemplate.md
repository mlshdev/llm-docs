> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinterfacecontroller/roottemplate

# rootTemplate (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The root template in the navigation hierarchy.

## Declaration

```swift
var rootTemplate: CPTemplate { get }
```

<a id="discussion"></a>

## Discussion

The root template represents your app’s initial interface, and is the starting point from which someone explores your app’s content. Use this property to get the root template. To install or change the root template, call the [setRootTemplate(\_:animated:completion:)](setroottemplate%28__animated_completion_%29.md) method.

## See Also

### Getting the current templates

- [topTemplate](toptemplate.md): The top-most template in your app’s navigation hierarchy.
- [templates](templates.md): The templates currently in your app’s navigation hierarchy.

# rootTemplate (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The root template in the navigation hierarchy.

## Declaration

```objectivec
@property (nonatomic, readonly) CPTemplate * rootTemplate;
```

<a id="discussion"></a>

## Discussion

The root template represents your app’s initial interface, and is the starting point from which someone explores your app’s content. Use this property to get the root template. To install or change the root template, call the [setRootTemplate:animated:completion:](setroottemplate%28__animated_completion_%29.md) method.

## See Also

### Getting the current templates

- [topTemplate](toptemplate.md): The top-most template in your app’s navigation hierarchy.
- [templates](templates.md): The templates currently in your app’s navigation hierarchy.
