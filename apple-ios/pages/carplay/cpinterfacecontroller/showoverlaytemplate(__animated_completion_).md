> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinterfacecontroller/showoverlaytemplate(_:animated:completion:)

# showOverlayTemplate(\_:animated:completion:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Displays a voice-control template as an overlay on top of your app’s current content.

## Declaration

```swift
func showOverlayTemplate(_ templateToShow: CPTemplate, animated: Bool, completion: ((Bool, (any Error)?) -> Void)? = nil)
```

```swift
func showOverlayTemplate(_ templateToShow: CPTemplate, animated: Bool) async throws -> Bool
```

## Parameters

- `templateToShow`: A template of type [CPVoiceControlTemplate](../cpvoicecontroltemplate.md). All other template types generate an error.
- `animated`: If `true`, CarPlay animates the presentation of the template.
- `completion`: The closure to run with the results of the operation. This closure receives a Boolean value and an optional error as parameters. The Boolean value is `true` if CarPlay successfully displays the template using an overlay. If the value is `false`, CarPlay provides an error with information about what happened. If you don’t provide a closure, CarPlay throws an exception when an error occurs. CarPlay runs this closure on your app’s main thread.

<a id="discussion"></a>

## Discussion

You can present only one overlay template at a time from your app. To hide the overlay, call the [hideOverlayTemplate(animated:completion:)](hideoverlaytemplate%28animated_completion_%29.md) method.

> **Note**

> You can call this method from synchronous code using a completion handler, or you can call it as an asynchronous method without the completion handler. For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Showing a template as an overlay

- [hideOverlayTemplate(animated:completion:)](hideoverlaytemplate%28animated_completion_%29.md): Dismisses the template previously displayed as an overlay.

# showOverlayTemplate:animated:completion: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Displays a voice-control template as an overlay on top of your app’s current content.

## Declaration

```objectivec
- (void) showOverlayTemplate:(CPTemplate *) templateToShow animated:(BOOL) animated completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `templateToShow`: A template of type [CPVoiceControlTemplate](../cpvoicecontroltemplate.md). All other template types generate an error.
- `animated`: If `true`, CarPlay animates the presentation of the template.
- `completion`: The closure to run with the results of the operation. This closure receives a Boolean value and an optional error as parameters. The Boolean value is `true` if CarPlay successfully displays the template using an overlay. If the value is `false`, CarPlay provides an error with information about what happened. If you don’t provide a closure, CarPlay throws an exception when an error occurs. CarPlay runs this closure on your app’s main thread.

<a id="discussion"></a>

## Discussion

You can present only one overlay template at a time from your app. To hide the overlay, call the [hideOverlayTemplateAnimated:completion:](hideoverlaytemplate%28animated_completion_%29.md) method.

> **Note**

> You can call this method from synchronous code using a completion handler, or you can call it as an asynchronous method without the completion handler. For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Showing a template as an overlay

- [hideOverlayTemplateAnimated:completion:](hideoverlaytemplate%28animated_completion_%29.md): Dismisses the template previously displayed as an overlay.
