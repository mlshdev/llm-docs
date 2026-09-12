> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipresentationcontroller/dismissaltransitionwillbegin()](https://developer.apple.com/documentation/uikit/uipresentationcontroller/dismissaltransitionwillbegin())

# dismissalTransitionWillBegin() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the presentation controller that the dismissal animations are about to start.

## Declaration

```swift
func dismissalTransitionWillBegin()
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override this method and use it to configure any animations associated with your presentation’s custom views. To perform your animations, get the transition coordinator of the presented view controller and call its [animate(alongsideTransition:completion:)](../uiviewcontrollertransitioncoordinator/animate%28alongsidetransition_completion_%29.md) or [animateAlongsideTransition(in:animation:completion:)](../uiviewcontrollertransitioncoordinator/animatealongsidetransition%28in_animation_completion_%29.md) method. Calling those methods ensures that your animations are executed at the same time as any other transition animations.

Do not use this method to remove your views from the view hierarchy. Remove your views in the [dismissalTransitionDidEnd(\_:)](dismissaltransitiondidend%28__%29.md) method instead.

## See Also

### Tracking the transition’s start and end

- [presentationTransitionWillBegin()](presentationtransitionwillbegin%28%29.md): Notifies the presentation controller that the presentation animations are about to start.
- [presentationTransitionDidEnd(\_:)](presentationtransitiondidend%28__%29.md): Notifies the presentation controller that the presentation animations finished.
- [dismissalTransitionDidEnd(\_:)](dismissaltransitiondidend%28__%29.md): Notifies the presentation controller that the dismissal animations finished.

# dismissalTransitionWillBegin (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the presentation controller that the dismissal animations are about to start.

## Declaration

```objectivec
- (void) dismissalTransitionWillBegin;
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override this method and use it to configure any animations associated with your presentation’s custom views. To perform your animations, get the transition coordinator of the presented view controller and call its [animateAlongsideTransition:completion:](../uiviewcontrollertransitioncoordinator/animate%28alongsidetransition_completion_%29.md) or [animateAlongsideTransitionInView:animation:completion:](../uiviewcontrollertransitioncoordinator/animatealongsidetransition%28in_animation_completion_%29.md) method. Calling those methods ensures that your animations are executed at the same time as any other transition animations.

Do not use this method to remove your views from the view hierarchy. Remove your views in the [dismissalTransitionDidEnd:](dismissaltransitiondidend%28__%29.md) method instead.

## See Also

### Tracking the transition’s start and end

- [presentationTransitionWillBegin](presentationtransitionwillbegin%28%29.md): Notifies the presentation controller that the presentation animations are about to start.
- [presentationTransitionDidEnd:](presentationtransitiondidend%28__%29.md): Notifies the presentation controller that the presentation animations finished.
- [dismissalTransitionDidEnd:](dismissaltransitiondidend%28__%29.md): Notifies the presentation controller that the dismissal animations finished.
