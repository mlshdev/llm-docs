> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinterfacecontroller/pushtemplate(_:animated:completion:)

# pushTemplate(\_:animated:completion:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Adds the specified template to the navigation hierarchy and displays it.

## Declaration

```swift
func pushTemplate(_ templateToPush: CPTemplate, animated: Bool, completion: ((Bool, (any Error)?) -> Void)? = nil)
```

```swift
func pushTemplate(_ templateToPush: CPTemplate, animated: Bool) async throws -> Bool
```

## Parameters

- `templateToPush`: The template to add to the navigation hierarchy. After a successful push operation, this template becomes the top template in the navigation hierarchy, and you can access it from the [topTemplate](toptemplate.md) property.
- `animated`: If `true`, CarPlay animates the transition between templates.
- `completion`: The closure to run with the results of the operation. This closure receives a Boolean value and an optional error as parameters. The Boolean value is `true` if CarPlay successfully pushed the new template. If the value is `false`, CarPlay provides an error with information about what happened. If you don’t provide a closure, CarPlay throws an exception when an error occurs. CarPlay runs this closure on your app’s main thread.

<a id="discussion"></a>

## Discussion

Call this method to update your navigation interface and display different content. Typically, you use this method to navigate deeper into your app’s content. For example, when someone selects a playlist in a music app, the app pushes a list template with the songs in the playlist. This method requires an already installed root template, which you install using the [setRootTemplate(\_:animated:completion:)](setroottemplate%28__animated_completion_%29.md) method. If no root template exists, the method reports an error.

The type of app you create determines the maximum number of templates you can push onto your app’s navigation stack. The following table lists the total number of templates each app type supports; the root template counts as the first template in the total. For example, an audio app can push four additional templates after installing the root template.

| App type | Maximum stack depth |
| --- | --- |
| Audio | 5 templates |
| Communication | 5 templates |
| Driving task | 3 templates (2 templates in iOS 26.3 and earlier) |
| EV charging | 5 templates |
| Fueling | 3 templates |
| Navigation | 5 templates |
| Parking | 5 templates |
| Public safety | 5 templates |
| Quick food ordering | 3 templates (2 templates in iOS 26.3 and earlier) |
| Video | 5 templates |
| Voice-based conversation | 3 templates |

> **Note**

> You can call this method from synchronous code using a completion handler, or you can call it as an asynchronous method without the completion handler. For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Installing and removing templates

- [setRootTemplate(\_:animated:completion:)](setroottemplate%28__animated_completion_%29.md): Installs the root template of your app’s navigation hierarchy.
- [popTemplate(animated:completion:)](poptemplate%28animated_completion_%29.md): Removes the top-most template from your app’s navigation hierarchy.
- [popToRootTemplate(animated:completion:)](poptoroottemplate%28animated_completion_%29.md): Removes all of the templates from your app’s navigation hierarchy except the root template.
- [pop(to:animated:completion:)](pop%28to_animated_completion_%29.md): Removes templates from your app’s navigation hierarchy until the specified template becomes visible.

# pushTemplate:animated:completion: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Adds the specified template to the navigation hierarchy and displays it.

## Declaration

```objectivec
- (void) pushTemplate:(CPTemplate *) templateToPush animated:(BOOL) animated completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `templateToPush`: The template to add to the navigation hierarchy. After a successful push operation, this template becomes the top template in the navigation hierarchy, and you can access it from the [topTemplate](toptemplate.md) property.
- `animated`: If `true`, CarPlay animates the transition between templates.
- `completion`: The closure to run with the results of the operation. This closure receives a Boolean value and an optional error as parameters. The Boolean value is `true` if CarPlay successfully pushed the new template. If the value is `false`, CarPlay provides an error with information about what happened. If you don’t provide a closure, CarPlay throws an exception when an error occurs. CarPlay runs this closure on your app’s main thread.

<a id="discussion"></a>

## Discussion

Call this method to update your navigation interface and display different content. Typically, you use this method to navigate deeper into your app’s content. For example, when someone selects a playlist in a music app, the app pushes a list template with the songs in the playlist. This method requires an already installed root template, which you install using the [setRootTemplate:animated:completion:](setroottemplate%28__animated_completion_%29.md) method. If no root template exists, the method reports an error.

The type of app you create determines the maximum number of templates you can push onto your app’s navigation stack. The following table lists the total number of templates each app type supports; the root template counts as the first template in the total. For example, an audio app can push four additional templates after installing the root template.

| App type | Maximum stack depth |
| --- | --- |
| Audio | 5 templates |
| Communication | 5 templates |
| Driving task | 3 templates (2 templates in iOS 26.3 and earlier) |
| EV charging | 5 templates |
| Fueling | 3 templates |
| Navigation | 5 templates |
| Parking | 5 templates |
| Public safety | 5 templates |
| Quick food ordering | 3 templates (2 templates in iOS 26.3 and earlier) |
| Video | 5 templates |
| Voice-based conversation | 3 templates |

> **Note**

> You can call this method from synchronous code using a completion handler, or you can call it as an asynchronous method without the completion handler. For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Installing and removing templates

- [setRootTemplate:animated:completion:](setroottemplate%28__animated_completion_%29.md): Installs the root template of your app’s navigation hierarchy.
- [popTemplateAnimated:completion:](poptemplate%28animated_completion_%29.md): Removes the top-most template from your app’s navigation hierarchy.
- [popToRootTemplateAnimated:completion:](poptoroottemplate%28animated_completion_%29.md): Removes all of the templates from your app’s navigation hierarchy except the root template.
- [popToTemplate:animated:completion:](pop%28to_animated_completion_%29.md): Removes templates from your app’s navigation hierarchy until the specified template becomes visible.
