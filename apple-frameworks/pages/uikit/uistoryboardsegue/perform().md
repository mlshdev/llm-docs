> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistoryboardsegue/perform()](https://developer.apple.com/documentation/uikit/uistoryboardsegue/perform())

# perform() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Performs the visual transition for the segue.

## Declaration

```swift
func perform()
```

<a id="Discussion"></a>

## Discussion

Subclasses override this method and use it to perform the animations from the views in [source](source.md) to the views in [destination](destination.md). Typically, you use UIKit or Core Animation to set up an animation from one set of views to the next. For more complex animations, you might take a snapshot image of the two view hierarchies and manipulate the images instead of the actual view objects.

Regardless of how you perform the animation, at the end of it, you’re responsible for installing the destination view controller (and its views) in the right place so that it can handle events. For example, if you were to implement a custom modal transition, you might perform your animations using snapshot images and then at the end call the [presentModalViewController:animated:](../uiviewcontroller/presentmodalviewcontroller_animated_.md) method (with animations disabled) to set up the appropriate modal relationship between the source and destination view controllers.

# perform (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Performs the visual transition for the segue.

## Declaration

```objectivec
- (void) perform;
```

<a id="Discussion"></a>

## Discussion

Subclasses override this method and use it to perform the animations from the views in [sourceViewController](source.md) to the views in [destinationViewController](destination.md). Typically, you use UIKit or Core Animation to set up an animation from one set of views to the next. For more complex animations, you might take a snapshot image of the two view hierarchies and manipulate the images instead of the actual view objects.

Regardless of how you perform the animation, at the end of it, you’re responsible for installing the destination view controller (and its views) in the right place so that it can handle events. For example, if you were to implement a custom modal transition, you might perform your animations using snapshot images and then at the end call the [presentModalViewController:animated:](../uiviewcontroller/presentmodalviewcontroller_animated_.md) method (with animations disabled) to set up the appropriate modal relationship between the source and destination view controllers.
