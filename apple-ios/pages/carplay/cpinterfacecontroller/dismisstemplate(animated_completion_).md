> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpinterfacecontroller/dismisstemplate(animated:completion:)](https://developer.apple.com/documentation/carplay/cpinterfacecontroller/dismisstemplate(animated:completion:))

# dismissTemplate(animated:completion:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Dismisses a modal template.

## Declaration

```swift
func dismissTemplate(animated: Bool, completion: ((Bool, (any Error)?) -> Void)? = nil)
```

```swift
func dismissTemplate(animated: Bool) async throws -> Bool
```

## Parameters

- `animated`: If [true](https://developer.apple.com/documentation/swift/true), CarPlay animates the dismissal of the template.
- `completion`: The closure CarPlay calls after it dismisses the template.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func dismissTemplate(animated: Bool) async throws -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

CarPlay calls `completion` after it dismisses the template. The Boolean parameter is [true](https://developer.apple.com/documentation/swift/true) when the dismissal succeeds; otherwise, it’s [false](https://developer.apple.com/documentation/swift/false) and CarPlay provides an error that describes the failure. CarPlay throws an exception if the dismissal fails and you don’t provide a closure.

## See Also

### Displaying Templates Modally

- [presentTemplate(\_:animated:completion:)](presenttemplate%28__animated_completion_%29.md): Presents a template modally.
- [presentedTemplate](presentedtemplate.md): The interface controller’s current modal template.

# dismissTemplateAnimated:completion: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Dismisses a modal template.

## Declaration

```objectivec
- (void) dismissTemplateAnimated:(BOOL) animated completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `animated`: If [true](https://developer.apple.com/documentation/swift/true), CarPlay animates the dismissal of the template.
- `completion`: The closure CarPlay calls after it dismisses the template.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func dismissTemplate(animated: Bool) async throws -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

CarPlay calls `completion` after it dismisses the template. The Boolean parameter is [true](https://developer.apple.com/documentation/swift/true) when the dismissal succeeds; otherwise, it’s [false](https://developer.apple.com/documentation/swift/false) and CarPlay provides an error that describes the failure. CarPlay throws an exception if the dismissal fails and you don’t provide a closure.

## See Also

### Displaying Templates Modally

- [presentTemplate:animated:completion:](presenttemplate%28__animated_completion_%29.md): Presents a template modally.
- [presentedTemplate](presentedtemplate.md): The interface controller’s current modal template.
