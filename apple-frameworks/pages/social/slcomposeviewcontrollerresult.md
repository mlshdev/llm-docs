> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slcomposeviewcontrollerresult](https://developer.apple.com/documentation/social/slcomposeviewcontrollerresult)

# SLComposeViewControllerResult (Swift)

**Framework:** Social  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+

Possible values for the `result` parameter of the [completionHandler](slcomposeviewcontroller/completionhandler.md) property.

## Declaration

```swift
enum SLComposeViewControllerResult
```

## Topics

### Constants

- [SLComposeViewControllerResult.cancelled](slcomposeviewcontrollerresult/cancelled.md): The view controller is dismissed without sending the post.
- [SLComposeViewControllerResult.done](slcomposeviewcontrollerresult/done.md): The view controller is dismissed and the message is being sent in the background.

### Initializers

- [init(rawValue:)](slcomposeviewcontrollerresult/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Processing the Results

- [completionHandler](slcomposeviewcontroller/completionhandler.md): The handler to call when the user is done composing a post.
- [SLComposeViewControllerCompletionHandler](slcomposeviewcontrollercompletionhandler.md): Defines a handler to call when the user finishes composing a post.

# SLComposeViewControllerResult (Objective-C)

**Framework:** Social  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+

Possible values for the `result` parameter of the [completionHandler](slcomposeviewcontroller/completionhandler.md) property.

## Declaration

```objectivec
enum SLComposeViewControllerResult : NSInteger;
```

## Topics

### Constants

- [SLComposeViewControllerResultCancelled](slcomposeviewcontrollerresult/cancelled.md): The view controller is dismissed without sending the post.
- [SLComposeViewControllerResultDone](slcomposeviewcontrollerresult/done.md): The view controller is dismissed and the message is being sent in the background.

## See Also

### Processing the Results

- [completionHandler](slcomposeviewcontroller/completionhandler.md): The handler to call when the user is done composing a post.
- [SLComposeViewControllerCompletionHandler](slcomposeviewcontrollercompletionhandler.md): Defines a handler to call when the user finishes composing a post.
