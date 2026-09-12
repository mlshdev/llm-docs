> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpinterfacecontroller/poptemplate(animated:completion:)](https://developer.apple.com/documentation/carplay/cpinterfacecontroller/poptemplate(animated:completion:))

# popTemplate(animated:completion:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Removes the top-most template from the navigation hierarchy.

## Declaration

```swift
func popTemplate(animated: Bool, completion: ((Bool, (any Error)?) -> Void)? = nil)
```

```swift
func popTemplate(animated: Bool) async throws -> Bool
```

## Parameters

- `animated`: If [true](https://developer.apple.com/documentation/swift/true), CarPlay animates the transition between templates.
- `completion`: The closure CarPlay calls after it removes the template.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func popTemplate(animated: Bool) async throws -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

CarPlay calls `completion` after it removes the top-most template from the navigation hierarchy. The Boolean parameter is [true](https://developer.apple.com/documentation/swift/true) if CarPlay removes the template successfully; otherwise, it’s [false](https://developer.apple.com/documentation/swift/false) and CarPlay provides an error that describes the failure.

CarPlay throws an exception if it can’t remove the template and you don’t provide a closure.

## See Also

### Adding and Removing Templates

- [pushTemplate(\_:animated:completion:)](pushtemplate%28__animated_completion_%29.md): Adds the specified template to the navigation hierarchy and displays it.
- [popToRootTemplate(animated:completion:)](poptoroottemplate%28animated_completion_%29.md): Removes all of the templates from the navigation hierarchy except the root template.
- [pop(to:animated:completion:)](pop%28to_animated_completion_%29.md): Removes each template from the navigation hierarchy until the specified template becomes visible.

# popTemplateAnimated:completion: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Removes the top-most template from the navigation hierarchy.

## Declaration

```objectivec
- (void) popTemplateAnimated:(BOOL) animated completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `animated`: If [true](https://developer.apple.com/documentation/swift/true), CarPlay animates the transition between templates.
- `completion`: The closure CarPlay calls after it removes the template.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func popTemplate(animated: Bool) async throws -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

CarPlay calls `completion` after it removes the top-most template from the navigation hierarchy. The Boolean parameter is [true](https://developer.apple.com/documentation/swift/true) if CarPlay removes the template successfully; otherwise, it’s [false](https://developer.apple.com/documentation/swift/false) and CarPlay provides an error that describes the failure.

CarPlay throws an exception if it can’t remove the template and you don’t provide a closure.

## See Also

### Adding and Removing Templates

- [pushTemplate:animated:completion:](pushtemplate%28__animated_completion_%29.md): Adds the specified template to the navigation hierarchy and displays it.
- [popToRootTemplateAnimated:completion:](poptoroottemplate%28animated_completion_%29.md): Removes all of the templates from the navigation hierarchy except the root template.
- [popToTemplate:animated:completion:](pop%28to_animated_completion_%29.md): Removes each template from the navigation hierarchy until the specified template becomes visible.
