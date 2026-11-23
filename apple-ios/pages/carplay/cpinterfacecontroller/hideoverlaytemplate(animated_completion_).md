> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpinterfacecontroller/hideoverlaytemplate(animated:completion:)

# hideOverlayTemplate(animated:completion:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Dismisses the template previously displayed as an overlay.

## Declaration

```swift
func hideOverlayTemplate(animated: Bool, completion: ((Bool, (any Error)?) -> Void)? = nil)
```

```swift
func hideOverlayTemplate(animated: Bool) async throws -> Bool
```

## Parameters

- `animated`: If `true`, CarPlay animates the dismissal of the overlay.
- `completion`: The closure to run with the results of the operation. This closure receives a Boolean value and an optional error as parameters. The Boolean value is `true` if CarPlay successfully dismissed the overlay. If the value is `false`, CarPlay provides an error with information about what happened. If you don’t provide a closure, CarPlay throws an exception when an error occurs. CarPlay runs this closure on your app’s main thread.

<a id="discussion"></a>

## Discussion

Call this method to dismiss a template you presented using the [showOverlayTemplate(\_:animated:completion:)](showoverlaytemplate%28__animated_completion_%29.md) method.

> **Note**

> You can call this method from synchronous code using a completion handler, or you can call it as an asynchronous method without the completion handler. For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Showing a template as an overlay

- [showOverlayTemplate(\_:animated:completion:)](showoverlaytemplate%28__animated_completion_%29.md): Displays a voice-control template as an overlay on top of your app’s current content.

# hideOverlayTemplateAnimated:completion: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Dismisses the template previously displayed as an overlay.

## Declaration

```objectivec
- (void) hideOverlayTemplateAnimated:(BOOL) animated completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `animated`: If `true`, CarPlay animates the dismissal of the overlay.
- `completion`: The closure to run with the results of the operation. This closure receives a Boolean value and an optional error as parameters. The Boolean value is `true` if CarPlay successfully dismissed the overlay. If the value is `false`, CarPlay provides an error with information about what happened. If you don’t provide a closure, CarPlay throws an exception when an error occurs. CarPlay runs this closure on your app’s main thread.

<a id="discussion"></a>

## Discussion

Call this method to dismiss a template you presented using the [showOverlayTemplate:animated:completion:](showoverlaytemplate%28__animated_completion_%29.md) method.

> **Note**

> You can call this method from synchronous code using a completion handler, or you can call it as an asynchronous method without the completion handler. For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Showing a template as an overlay

- [showOverlayTemplate:animated:completion:](showoverlaytemplate%28__animated_completion_%29.md): Displays a voice-control template as an overlay on top of your app’s current content.
