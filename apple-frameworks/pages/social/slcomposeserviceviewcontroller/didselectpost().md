> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slcomposeserviceviewcontroller/didselectpost()](https://developer.apple.com/documentation/social/slcomposeserviceviewcontroller/didselectpost())

# didSelectPost() (Swift)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+

Sent to the compose view after the post animation finishes.

## Declaration

```swift
func didSelectPost()
```

<a id="Discussion"></a>

## Discussion

By default, this method calls the completeRequestReturningItems: method of the associated [extensionContext](../../uikit/uiviewcontroller/extensioncontext.md) property, passing `nil` in the `items` array and a `nil` expiration handler. You must override `didSelectPost` to perform the post of [contentText](contenttext.md) and any attachments. In your implementation of this method, you can call `super` to take advantage of the default completion handler; if you don’t call `super`, you must call the completion method of the extension context.

## See Also

### Responding to Lifecycle Events

- [presentationAnimationDidFinish()](presentationanimationdidfinish%28%29.md): Tells the compose view controller that the presentation animation is finished.
- [didSelectCancel()](didselectcancel%28%29.md): Sent to the compose view after the cancel animation finishes.

# didSelectPost (Objective-C)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+

Sent to the compose view after the post animation finishes.

## Declaration

```objectivec
- (void) didSelectPost;
```

<a id="Discussion"></a>

## Discussion

By default, this method calls the completeRequestReturningItems: method of the associated [extensionContext](../../uikit/uiviewcontroller/extensioncontext.md) property, passing `nil` in the `items` array and a `nil` expiration handler. You must override `didSelectPost` to perform the post of [contentText](contenttext.md) and any attachments. In your implementation of this method, you can call `super` to take advantage of the default completion handler; if you don’t call `super`, you must call the completion method of the extension context.

## See Also

### Responding to Lifecycle Events

- [presentationAnimationDidFinish](presentationanimationdidfinish%28%29.md): Tells the compose view controller that the presentation animation is finished.
- [didSelectCancel](didselectcancel%28%29.md): Sent to the compose view after the cancel animation finishes.
