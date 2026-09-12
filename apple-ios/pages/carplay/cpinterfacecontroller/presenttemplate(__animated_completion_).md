> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpinterfacecontroller/presenttemplate(_:animated:completion:)](https://developer.apple.com/documentation/carplay/cpinterfacecontroller/presenttemplate(_:animated:completion:))

# presentTemplate(\_:animated:completion:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Presents a template modally.

## Declaration

```swift
func presentTemplate(_ templateToPresent: CPTemplate, animated: Bool, completion: ((Bool, (any Error)?) -> Void)? = nil)
```

```swift
func presentTemplate(_ templateToPresent: CPTemplate, animated: Bool) async throws -> Bool
```

## Parameters

- `templateToPresent`: The template to present modally.
- `animated`: If [true](https://developer.apple.com/documentation/swift/true), CarPlay animates the presentation of the template.
- `completion`: The closure CarPlay calls after it presents the template.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func presentTemplate(_ templateToPresent: CPTemplate, animated: Bool) async throws -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

CarPlay can only present one modal template at a time. `templateToPresent` must be one of [CPActionSheetTemplate](../cpactionsheettemplate.md), [CPAlertTemplate](../cpalerttemplate.md), or [CPVoiceControlTemplate](../cpvoicecontroltemplate.md).

CarPlay calls `completion` after it presents the template. The Boolean parameter is [true](https://developer.apple.com/documentation/swift/true) when the presentation succeeds; otherwise, it’s [false](https://developer.apple.com/documentation/swift/false) and CarPlay provides an error that describes the failure. CarPlay throws an exception if the presentation fails and you don’t provide a closure.

## See Also

### Displaying Templates Modally

- [dismissTemplate(animated:completion:)](dismisstemplate%28animated_completion_%29.md): Dismisses a modal template.
- [presentedTemplate](presentedtemplate.md): The interface controller’s current modal template.

# presentTemplate:animated:completion: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Presents a template modally.

## Declaration

```objectivec
- (void) presentTemplate:(CPTemplate *) templateToPresent animated:(BOOL) animated completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `templateToPresent`: The template to present modally.
- `animated`: If [true](https://developer.apple.com/documentation/swift/true), CarPlay animates the presentation of the template.
- `completion`: The closure CarPlay calls after it presents the template.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func presentTemplate(_ templateToPresent: CPTemplate, animated: Bool) async throws -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

CarPlay can only present one modal template at a time. `templateToPresent` must be one of [CPActionSheetTemplate](../cpactionsheettemplate.md), [CPAlertTemplate](../cpalerttemplate.md), or [CPVoiceControlTemplate](../cpvoicecontroltemplate.md).

CarPlay calls `completion` after it presents the template. The Boolean parameter is [true](https://developer.apple.com/documentation/swift/true) when the presentation succeeds; otherwise, it’s [false](https://developer.apple.com/documentation/swift/false) and CarPlay provides an error that describes the failure. CarPlay throws an exception if the presentation fails and you don’t provide a closure.

## See Also

### Displaying Templates Modally

- [dismissTemplateAnimated:completion:](dismisstemplate%28animated_completion_%29.md): Dismisses a modal template.
- [presentedTemplate](presentedtemplate.md): The interface controller’s current modal template.
