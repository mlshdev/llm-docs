> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slcomposeserviceviewcontroller/didselectcancel()](https://developer.apple.com/documentation/social/slcomposeserviceviewcontroller/didselectcancel())

# didSelectCancel() (Swift)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+

Sent to the compose view after the cancel animation finishes.

## Declaration

```swift
func didSelectCancel()
```

<a id="Discussion"></a>

## Discussion

By default, this method calls the completeRequestReturningItems: method of the associated [extensionContext](../../uikit/uiviewcontroller/extensioncontext.md) property, passing the appropriate error value in the `items` array and a `nil` expiration.

## See Also

### Responding to Lifecycle Events

- [presentationAnimationDidFinish()](presentationanimationdidfinish%28%29.md): Tells the compose view controller that the presentation animation is finished.
- [didSelectPost()](didselectpost%28%29.md): Sent to the compose view after the post animation finishes.

# didSelectCancel (Objective-C)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+

Sent to the compose view after the cancel animation finishes.

## Declaration

```objectivec
- (void) didSelectCancel;
```

<a id="Discussion"></a>

## Discussion

By default, this method calls the completeRequestReturningItems: method of the associated [extensionContext](../../uikit/uiviewcontroller/extensioncontext.md) property, passing the appropriate error value in the `items` array and a `nil` expiration.

## See Also

### Responding to Lifecycle Events

- [presentationAnimationDidFinish](presentationanimationdidfinish%28%29.md): Tells the compose view controller that the presentation animation is finished.
- [didSelectPost](didselectpost%28%29.md): Sent to the compose view after the post animation finishes.
