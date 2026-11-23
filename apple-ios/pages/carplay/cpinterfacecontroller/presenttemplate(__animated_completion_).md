> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinterfacecontroller/presenttemplate(_:animated:completion:)

# presentTemplate(\_:animated:completion:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Presents the template modally over your app’s navigation interface.

## Declaration

```swift
func presentTemplate(_ templateToPresent: CPTemplate, animated: Bool, completion: ((Bool, (any Error)?) -> Void)? = nil)
```

```swift
func presentTemplate(_ templateToPresent: CPTemplate, animated: Bool) async throws -> Bool
```

## Parameters

- `templateToPresent`: The template to present modally. Specify only templates of type [CPActionSheetTemplate](../cpactionsheettemplate.md), [CPAlertTemplate](../cpalerttemplate.md), or [CPVoiceControlTemplate](../cpvoicecontroltemplate.md). All other template types generate an error.
- `animated`: If `true`, CarPlay animates the presentation of the template.
- `completion`: The closure to run with the results of the operation. This closure receives a Boolean value and an optional error as parameters. The Boolean value is `true` if CarPlay successfully presented the template modally. If the value is `false`, CarPlay provides an error with information about what happened. If you don’t provide a closure, CarPlay throws an exception when an error occurs. CarPlay runs this closure on your app’s main thread.

<a id="discussion"></a>

## Discussion

You can present only one modal template at a time from your app. You can determine if there is an existing modal template using the [presentedTemplate](presentedtemplate.md) property. To dismiss a previously presented template, call the [dismissTemplate(animated:completion:)](dismisstemplate%28animated_completion_%29.md) method.

> **Note**

> You can call this method from synchronous code using a completion handler, or you can call it as an asynchronous method without the completion handler. For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Presenting a template modally

- [dismissTemplate(animated:completion:)](dismisstemplate%28animated_completion_%29.md): Dismisses the template you previously presented modally.
- [presentedTemplate](presentedtemplate.md): The current modally-presented template.

# presentTemplate:animated:completion: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Presents the template modally over your app’s navigation interface.

## Declaration

```objectivec
- (void) presentTemplate:(CPTemplate *) templateToPresent animated:(BOOL) animated completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `templateToPresent`: The template to present modally. Specify only templates of type [CPActionSheetTemplate](../cpactionsheettemplate.md), [CPAlertTemplate](../cpalerttemplate.md), or [CPVoiceControlTemplate](../cpvoicecontroltemplate.md). All other template types generate an error.
- `animated`: If `true`, CarPlay animates the presentation of the template.
- `completion`: The closure to run with the results of the operation. This closure receives a Boolean value and an optional error as parameters. The Boolean value is `true` if CarPlay successfully presented the template modally. If the value is `false`, CarPlay provides an error with information about what happened. If you don’t provide a closure, CarPlay throws an exception when an error occurs. CarPlay runs this closure on your app’s main thread.

<a id="discussion"></a>

## Discussion

You can present only one modal template at a time from your app. You can determine if there is an existing modal template using the [presentedTemplate](presentedtemplate.md) property. To dismiss a previously presented template, call the [dismissTemplateAnimated:completion:](dismisstemplate%28animated_completion_%29.md) method.

> **Note**

> You can call this method from synchronous code using a completion handler, or you can call it as an asynchronous method without the completion handler. For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Presenting a template modally

- [dismissTemplateAnimated:completion:](dismisstemplate%28animated_completion_%29.md): Dismisses the template you previously presented modally.
- [presentedTemplate](presentedtemplate.md): The current modally-presented template.
