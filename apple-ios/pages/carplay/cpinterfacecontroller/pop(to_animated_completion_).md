> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinterfacecontroller/pop(to:animated:completion:)

# pop(to:animated:completion:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Removes templates from your app’s navigation hierarchy until the specified template becomes visible.

## Declaration

```swift
func pop(to targetTemplate: CPTemplate, animated: Bool, completion: ((Bool, (any Error)?) -> Void)? = nil)
```

```swift
func pop(to targetTemplate: CPTemplate, animated: Bool) async throws -> Bool
```

## Parameters

- `targetTemplate`: The template to make visible. If this template doesn’t exist in the navigation hierarchy, CarPlay reports an error. Typically, you retrieve this template from the [templates](templates.md) property to ensure it exists.
- `animated`: If `true`, CarPlay animates the transition between templates.
- `completion`: The closure to run with the results of the operation. This closure receives a Boolean value and an optional error as parameters. The Boolean value is `true` if CarPlay successfully restores the specified template to the top of the stack. If the value is `false`, CarPlay provides an error with information about what happened. If you don’t provide a closure, CarPlay throws an exception when an error occurs. CarPlay runs this closure on your app’s main thread.

<a id="discussion"></a>

## Discussion

Use this method to return your interface to a specific point in your navigation. Verify that the specified template is in the current array of templates before calling this method.

> **Note**

> You can call this method from synchronous code using a completion handler, or you can call it as an asynchronous method without the completion handler. For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Installing and removing templates

- [setRootTemplate(\_:animated:completion:)](setroottemplate%28__animated_completion_%29.md): Installs the root template of your app’s navigation hierarchy.
- [pushTemplate(\_:animated:completion:)](pushtemplate%28__animated_completion_%29.md): Adds the specified template to the navigation hierarchy and displays it.
- [popTemplate(animated:completion:)](poptemplate%28animated_completion_%29.md): Removes the top-most template from your app’s navigation hierarchy.
- [popToRootTemplate(animated:completion:)](poptoroottemplate%28animated_completion_%29.md): Removes all of the templates from your app’s navigation hierarchy except the root template.

# popToTemplate:animated:completion: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Removes templates from your app’s navigation hierarchy until the specified template becomes visible.

## Declaration

```objectivec
- (void) popToTemplate:(CPTemplate *) targetTemplate animated:(BOOL) animated completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `targetTemplate`: The template to make visible. If this template doesn’t exist in the navigation hierarchy, CarPlay reports an error. Typically, you retrieve this template from the [templates](templates.md) property to ensure it exists.
- `animated`: If `true`, CarPlay animates the transition between templates.
- `completion`: The closure to run with the results of the operation. This closure receives a Boolean value and an optional error as parameters. The Boolean value is `true` if CarPlay successfully restores the specified template to the top of the stack. If the value is `false`, CarPlay provides an error with information about what happened. If you don’t provide a closure, CarPlay throws an exception when an error occurs. CarPlay runs this closure on your app’s main thread.

<a id="discussion"></a>

## Discussion

Use this method to return your interface to a specific point in your navigation. Verify that the specified template is in the current array of templates before calling this method.

> **Note**

> You can call this method from synchronous code using a completion handler, or you can call it as an asynchronous method without the completion handler. For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Installing and removing templates

- [setRootTemplate:animated:completion:](setroottemplate%28__animated_completion_%29.md): Installs the root template of your app’s navigation hierarchy.
- [pushTemplate:animated:completion:](pushtemplate%28__animated_completion_%29.md): Adds the specified template to the navigation hierarchy and displays it.
- [popTemplateAnimated:completion:](poptemplate%28animated_completion_%29.md): Removes the top-most template from your app’s navigation hierarchy.
- [popToRootTemplateAnimated:completion:](poptoroottemplate%28animated_completion_%29.md): Removes all of the templates from your app’s navigation hierarchy except the root template.
