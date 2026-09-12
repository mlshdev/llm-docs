> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slcomposeserviceviewcontroller/presentationanimationdidfinish()](https://developer.apple.com/documentation/social/slcomposeserviceviewcontroller/presentationanimationdidfinish())

# presentationAnimationDidFinish() (Swift)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+

Tells the compose view controller that the presentation animation is finished.

## Declaration

```swift
func presentationAnimationDidFinish()
```

<a id="Discussion"></a>

## Discussion

Implement this method to avoid performing lengthy work during initialization or the iOS view controller methods [viewWillAppear(\_:)](../../uikit/uiviewcontroller/viewwillappear%28__%29.md) and [viewDidAppear(\_:)](../../uikit/uiviewcontroller/viewdidappear%28__%29.md).

## See Also

### Responding to Lifecycle Events

- [didSelectCancel()](didselectcancel%28%29.md): Sent to the compose view after the cancel animation finishes.
- [didSelectPost()](didselectpost%28%29.md): Sent to the compose view after the post animation finishes.

# presentationAnimationDidFinish (Objective-C)

**Framework:** Social  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+

Tells the compose view controller that the presentation animation is finished.

## Declaration

```objectivec
- (void) presentationAnimationDidFinish;
```

<a id="Discussion"></a>

## Discussion

Implement this method to avoid performing lengthy work during initialization or the iOS view controller methods [viewWillAppear:](../../uikit/uiviewcontroller/viewwillappear%28__%29.md) and [viewDidAppear:](../../uikit/uiviewcontroller/viewdidappear%28__%29.md).

## See Also

### Responding to Lifecycle Events

- [didSelectCancel](didselectcancel%28%29.md): Sent to the compose view after the cancel animation finishes.
- [didSelectPost](didselectpost%28%29.md): Sent to the compose view after the post animation finishes.
