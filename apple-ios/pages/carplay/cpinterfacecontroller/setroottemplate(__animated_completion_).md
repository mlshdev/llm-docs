> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinterfacecontroller/setroottemplate(_:animated:completion:)

# setRootTemplate(\_:animated:completion:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Installs the root template of your app’s navigation hierarchy.

## Declaration

```swift
func setRootTemplate(_ rootTemplate: CPTemplate, animated: Bool, completion: ((Bool, (any Error)?) -> Void)? = nil)
```

```swift
func setRootTemplate(_ rootTemplate: CPTemplate, animated: Bool) async throws -> Bool
```

## Parameters

- `rootTemplate`: The template to use as the root of your app’s navigation hierarchy. This template becomes the main interface for your app, so provide a template that people can use to navigate to the rest of your app’s content.
- `animated`: `true` if you want CarPlay to animate the presentation of the template. When you set the root template for the first time, CarPlay ignores this parameter. CarPlay uses this parameter only when you replace the root template.
- `completion`: The closure to run with the results of the operation. This closure receives a Boolean value and an optional error as parameters. The Boolean value is `true` if the installation of the new root template succeeded. If the value is `false`, CarPlay provides an error with information about what happened. If you don’t provide a closure, CarPlay throws an exception when an error occurs. CarPlay runs this closure on your app’s main thread.

## Mentioned In

- [Building your app’s initial CarPlay interface](../building-your-apps-initial-carplay-interface.md)

<a id="discussion"></a>

## Discussion

Call this method to install the root template of your app’s navigation interface. Typically, you call this method as part of the initial setup of your interface in the [templateApplicationScene(\_:didConnect:)](../cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_%29.md) or [templateApplicationScene(\_:didConnect:to:)](../cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_to_%29.md) method of your scene delegate. If the interface controller already has a root template, this method removes the existing root template and all other pushed templates, and installs the new root template.

> **Note**

> You can call this method from synchronous code using a completion handler, or you can call it as an asynchronous method without the completion handler. For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Installing and removing templates

- [pushTemplate(\_:animated:completion:)](pushtemplate%28__animated_completion_%29.md): Adds the specified template to the navigation hierarchy and displays it.
- [popTemplate(animated:completion:)](poptemplate%28animated_completion_%29.md): Removes the top-most template from your app’s navigation hierarchy.
- [popToRootTemplate(animated:completion:)](poptoroottemplate%28animated_completion_%29.md): Removes all of the templates from your app’s navigation hierarchy except the root template.
- [pop(to:animated:completion:)](pop%28to_animated_completion_%29.md): Removes templates from your app’s navigation hierarchy until the specified template becomes visible.

# setRootTemplate:animated:completion: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Installs the root template of your app’s navigation hierarchy.

## Declaration

```objectivec
- (void) setRootTemplate:(CPTemplate *) rootTemplate animated:(BOOL) animated completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `rootTemplate`: The template to use as the root of your app’s navigation hierarchy. This template becomes the main interface for your app, so provide a template that people can use to navigate to the rest of your app’s content.
- `animated`: `true` if you want CarPlay to animate the presentation of the template. When you set the root template for the first time, CarPlay ignores this parameter. CarPlay uses this parameter only when you replace the root template.
- `completion`: The closure to run with the results of the operation. This closure receives a Boolean value and an optional error as parameters. The Boolean value is `true` if the installation of the new root template succeeded. If the value is `false`, CarPlay provides an error with information about what happened. If you don’t provide a closure, CarPlay throws an exception when an error occurs. CarPlay runs this closure on your app’s main thread.

## Mentioned In

- [Building your app’s initial CarPlay interface](../building-your-apps-initial-carplay-interface.md)

<a id="discussion"></a>

## Discussion

Call this method to install the root template of your app’s navigation interface. Typically, you call this method as part of the initial setup of your interface in the [templateApplicationScene:didConnectInterfaceController:](../cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_%29.md) or [templateApplicationScene:didConnectInterfaceController:toWindow:](../cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_to_%29.md) method of your scene delegate. If the interface controller already has a root template, this method removes the existing root template and all other pushed templates, and installs the new root template.

> **Note**

> You can call this method from synchronous code using a completion handler, or you can call it as an asynchronous method without the completion handler. For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Installing and removing templates

- [pushTemplate:animated:completion:](pushtemplate%28__animated_completion_%29.md): Adds the specified template to the navigation hierarchy and displays it.
- [popTemplateAnimated:completion:](poptemplate%28animated_completion_%29.md): Removes the top-most template from your app’s navigation hierarchy.
- [popToRootTemplateAnimated:completion:](poptoroottemplate%28animated_completion_%29.md): Removes all of the templates from your app’s navigation hierarchy except the root template.
- [popToTemplate:animated:completion:](pop%28to_animated_completion_%29.md): Removes templates from your app’s navigation hierarchy until the specified template becomes visible.
