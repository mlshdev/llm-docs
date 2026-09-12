> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slcomposeviewcontrollercompletionhandler](https://developer.apple.com/documentation/social/slcomposeviewcontrollercompletionhandler)

# SLComposeViewControllerCompletionHandler (Swift)

**Framework:** Social  
**Kind:** Type Alias  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+

Defines a handler to call when the user finishes composing a post.

## Declaration

```swift
typealias SLComposeViewControllerCompletionHandler = (SLComposeViewControllerResult) -> Void
```

<a id="Discussion"></a>

## Discussion

The completion handler is called while the SLComposeViewController is still visible and it is responsible for dismissing the view controller. For the possible values of the `result` parameter, see [SLComposeViewControllerResult](slcomposeviewcontrollerresult.md). Use the [completionHandler](slcomposeviewcontroller/completionhandler.md) property to set this handler.

## See Also

### Processing the Results

- [completionHandler](slcomposeviewcontroller/completionhandler.md): The handler to call when the user is done composing a post.
- [SLComposeViewControllerResult](slcomposeviewcontrollerresult.md): Possible values for the `result` parameter of the [completionHandler](slcomposeviewcontroller/completionhandler.md) property.

# SLComposeViewControllerCompletionHandler (Objective-C)

**Framework:** Social  
**Kind:** Type Alias  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+

Defines a handler to call when the user finishes composing a post.

## Declaration

```objectivec
typedef void (^)(enum SLComposeViewControllerResult) SLComposeViewControllerCompletionHandler;
```

<a id="Discussion"></a>

## Discussion

The completion handler is called while the SLComposeViewController is still visible and it is responsible for dismissing the view controller. For the possible values of the `result` parameter, see [SLComposeViewControllerResult](slcomposeviewcontrollerresult.md). Use the [completionHandler](slcomposeviewcontroller/completionhandler.md) property to set this handler.

## See Also

### Processing the Results

- [completionHandler](slcomposeviewcontroller/completionhandler.md): The handler to call when the user is done composing a post.
- [SLComposeViewControllerResult](slcomposeviewcontrollerresult.md): Possible values for the `result` parameter of the [completionHandler](slcomposeviewcontroller/completionhandler.md) property.
