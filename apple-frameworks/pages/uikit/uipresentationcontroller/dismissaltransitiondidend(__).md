> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipresentationcontroller/dismissaltransitiondidend(_:)](https://developer.apple.com/documentation/uikit/uipresentationcontroller/dismissaltransitiondidend(_:))

# dismissalTransitionDidEnd(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the presentation controller that the dismissal animations finished.

## Declaration

```swift
func dismissalTransitionDidEnd(_ completed: Bool)
```

## Parameters

- `completed`: [true](https://developer.apple.com/documentation/swift/true) if the animations completed and the presented view controller was dismissed or [false](https://developer.apple.com/documentation/swift/false) if the animations were canceled and the presented view controller is still visible.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override this method and use it to remove any custom views that the presentation controller added to the view hierarchy. Remove your views only if the `completed` parameter is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Tracking the transition’s start and end

- [presentationTransitionWillBegin()](presentationtransitionwillbegin%28%29.md): Notifies the presentation controller that the presentation animations are about to start.
- [presentationTransitionDidEnd(\_:)](presentationtransitiondidend%28__%29.md): Notifies the presentation controller that the presentation animations finished.
- [dismissalTransitionWillBegin()](dismissaltransitionwillbegin%28%29.md): Notifies the presentation controller that the dismissal animations are about to start.

# dismissalTransitionDidEnd: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the presentation controller that the dismissal animations finished.

## Declaration

```objectivec
- (void) dismissalTransitionDidEnd:(BOOL) completed;
```

## Parameters

- `completed`: [true](https://developer.apple.com/documentation/swift/true) if the animations completed and the presented view controller was dismissed or [false](https://developer.apple.com/documentation/swift/false) if the animations were canceled and the presented view controller is still visible.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override this method and use it to remove any custom views that the presentation controller added to the view hierarchy. Remove your views only if the `completed` parameter is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Tracking the transition’s start and end

- [presentationTransitionWillBegin](presentationtransitionwillbegin%28%29.md): Notifies the presentation controller that the presentation animations are about to start.
- [presentationTransitionDidEnd:](presentationtransitiondidend%28__%29.md): Notifies the presentation controller that the presentation animations finished.
- [dismissalTransitionWillBegin](dismissaltransitionwillbegin%28%29.md): Notifies the presentation controller that the dismissal animations are about to start.
