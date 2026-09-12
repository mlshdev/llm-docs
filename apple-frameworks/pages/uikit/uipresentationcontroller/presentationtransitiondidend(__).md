> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipresentationcontroller/presentationtransitiondidend(_:)](https://developer.apple.com/documentation/uikit/uipresentationcontroller/presentationtransitiondidend(_:))

# presentationTransitionDidEnd(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the presentation controller that the presentation animations finished.

## Declaration

```swift
func presentationTransitionDidEnd(_ completed: Bool)
```

## Parameters

- `completed`: [true](https://developer.apple.com/documentation/swift/true) if the animations completed and the presented view controller is now visible or [false](https://developer.apple.com/documentation/swift/false) if the animations were canceled and the presenting view controller is still visible.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override this method and use it to perform any required cleanup. For example, if the completed parameter is [false](https://developer.apple.com/documentation/swift/false), you would use this method to remove your presentation’s custom views from the view hierarchy.

For an example of how to implement this method, see [Add custom views to a presentation](../uipresentationcontroller.md#Add-custom-views-to-a-presentation).

## See Also

### Tracking the transition’s start and end

- [presentationTransitionWillBegin()](presentationtransitionwillbegin%28%29.md): Notifies the presentation controller that the presentation animations are about to start.
- [dismissalTransitionWillBegin()](dismissaltransitionwillbegin%28%29.md): Notifies the presentation controller that the dismissal animations are about to start.
- [dismissalTransitionDidEnd(\_:)](dismissaltransitiondidend%28__%29.md): Notifies the presentation controller that the dismissal animations finished.

# presentationTransitionDidEnd: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the presentation controller that the presentation animations finished.

## Declaration

```objectivec
- (void) presentationTransitionDidEnd:(BOOL) completed;
```

## Parameters

- `completed`: [true](https://developer.apple.com/documentation/swift/true) if the animations completed and the presented view controller is now visible or [false](https://developer.apple.com/documentation/swift/false) if the animations were canceled and the presenting view controller is still visible.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override this method and use it to perform any required cleanup. For example, if the completed parameter is [false](https://developer.apple.com/documentation/swift/false), you would use this method to remove your presentation’s custom views from the view hierarchy.

For an example of how to implement this method, see [Add custom views to a presentation](../uipresentationcontroller.md#Add-custom-views-to-a-presentation).

## See Also

### Tracking the transition’s start and end

- [presentationTransitionWillBegin](presentationtransitionwillbegin%28%29.md): Notifies the presentation controller that the presentation animations are about to start.
- [dismissalTransitionWillBegin](dismissaltransitionwillbegin%28%29.md): Notifies the presentation controller that the dismissal animations are about to start.
- [dismissalTransitionDidEnd:](dismissaltransitiondidend%28__%29.md): Notifies the presentation controller that the dismissal animations finished.
