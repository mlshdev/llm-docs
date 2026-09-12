> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipresentationcontroller/presentationtransitionwillbegin()](https://developer.apple.com/documentation/uikit/uipresentationcontroller/presentationtransitionwillbegin())

# presentationTransitionWillBegin() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the presentation controller that the presentation animations are about to start.

## Declaration

```swift
func presentationTransitionWillBegin()
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override it and use it to add custom views to the view hierarchy and to create any animations associated with those views. To perform your animations, get the transition coordinator of the presented view controller and call its [animate(alongsideTransition:completion:)](../uiviewcontrollertransitioncoordinator/animate%28alongsidetransition_completion_%29.md) or [animateAlongsideTransition(in:animation:completion:)](../uiviewcontrollertransitioncoordinator/animatealongsidetransition%28in_animation_completion_%29.md) method. Calling those methods ensures that your animations are executed at the same time as any other transition animations.

For an example of how to implement this method, see [Add custom views to a presentation](../uipresentationcontroller.md#Add-custom-views-to-a-presentation).

## See Also

### Tracking the transition’s start and end

- [presentationTransitionDidEnd(\_:)](presentationtransitiondidend%28__%29.md): Notifies the presentation controller that the presentation animations finished.
- [dismissalTransitionWillBegin()](dismissaltransitionwillbegin%28%29.md): Notifies the presentation controller that the dismissal animations are about to start.
- [dismissalTransitionDidEnd(\_:)](dismissaltransitiondidend%28__%29.md): Notifies the presentation controller that the dismissal animations finished.

# presentationTransitionWillBegin (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the presentation controller that the presentation animations are about to start.

## Declaration

```objectivec
- (void) presentationTransitionWillBegin;
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override it and use it to add custom views to the view hierarchy and to create any animations associated with those views. To perform your animations, get the transition coordinator of the presented view controller and call its [animateAlongsideTransition:completion:](../uiviewcontrollertransitioncoordinator/animate%28alongsidetransition_completion_%29.md) or [animateAlongsideTransitionInView:animation:completion:](../uiviewcontrollertransitioncoordinator/animatealongsidetransition%28in_animation_completion_%29.md) method. Calling those methods ensures that your animations are executed at the same time as any other transition animations.

For an example of how to implement this method, see [Add custom views to a presentation](../uipresentationcontroller.md#Add-custom-views-to-a-presentation).

## See Also

### Tracking the transition’s start and end

- [presentationTransitionDidEnd:](presentationtransitiondidend%28__%29.md): Notifies the presentation controller that the presentation animations finished.
- [dismissalTransitionWillBegin](dismissaltransitionwillbegin%28%29.md): Notifies the presentation controller that the dismissal animations are about to start.
- [dismissalTransitionDidEnd:](dismissaltransitiondidend%28__%29.md): Notifies the presentation controller that the dismissal animations finished.
