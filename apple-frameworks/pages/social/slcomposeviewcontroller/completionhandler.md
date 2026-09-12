> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slcomposeviewcontroller/completionhandler](https://developer.apple.com/documentation/social/slcomposeviewcontroller/completionhandler)

# completionHandler (Swift)

**Framework:** Social  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+

The handler to call when the user is done composing a post.

## Declaration

```swift
var completionHandler: SLComposeViewControllerCompletionHandler! { get set }
```

<a id="Discussion"></a>

## Discussion

The handler has a single parameter that indicates whether the user finished or cancelled composing the post. This block is not guaranteed to be called on any particular thread. Do not dismiss the [SLComposeViewController](../slcomposeviewcontroller.md) in your completion handler—the system will do so automatically.

## See Also

### Processing the Results

- [SLComposeViewControllerCompletionHandler](../slcomposeviewcontrollercompletionhandler.md): Defines a handler to call when the user finishes composing a post.
- [SLComposeViewControllerResult](../slcomposeviewcontrollerresult.md): Possible values for the `result` parameter of the [completionHandler](completionhandler.md) property.

# completionHandler (Objective-C)

**Framework:** Social  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+

The handler to call when the user is done composing a post.

## Declaration

```objectivec
@property (nonatomic, copy) SLComposeViewControllerCompletionHandler completionHandler;
```

<a id="Discussion"></a>

## Discussion

The handler has a single parameter that indicates whether the user finished or cancelled composing the post. This block is not guaranteed to be called on any particular thread. Do not dismiss the [SLComposeViewController](../slcomposeviewcontroller.md) in your completion handler—the system will do so automatically.

## See Also

### Processing the Results

- [SLComposeViewControllerCompletionHandler](../slcomposeviewcontrollercompletionhandler.md): Defines a handler to call when the user finishes composing a post.
- [SLComposeViewControllerResult](../slcomposeviewcontrollerresult.md): Possible values for the `result` parameter of the [completionHandler](completionhandler.md) property.
