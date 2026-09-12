> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayout/finalizelayouttransition()](https://developer.apple.com/documentation/uikit/uicollectionviewlayout/finalizelayouttransition())

# finalizeLayoutTransition() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the layout object to perform any final steps before the transition animations occur.

## Declaration

```swift
func finalizeLayoutTransition()
```

<a id="Discussion"></a>

## Discussion

The collection view calls this method after it has gathered all of the layout attributes needed to perform a transition from one layout to another. You can use this method to clean up any data structures or caches created by your implementations of the [prepareForTransition(from:)](preparefortransition%28from_%29.md) or [prepareForTransition(to:)](preparefortransition%28to_%29.md) methods.

## See Also

### Transitioning between layouts

- [prepareForTransition(from:)](preparefortransition%28from_%29.md): Tells the layout object to prepare to be installed as the layout for the collection view.
- [prepareForTransition(to:)](preparefortransition%28to_%29.md): Tells the layout object that it is about to be removed as the layout for the collection view.

# finalizeLayoutTransition (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Tells the layout object to perform any final steps before the transition animations occur.

## Declaration

```objectivec
- (void) finalizeLayoutTransition;
```

<a id="Discussion"></a>

## Discussion

The collection view calls this method after it has gathered all of the layout attributes needed to perform a transition from one layout to another. You can use this method to clean up any data structures or caches created by your implementations of the [prepareForTransitionFromLayout:](preparefortransition%28from_%29.md) or [prepareForTransitionToLayout:](preparefortransition%28to_%29.md) methods.

## See Also

### Transitioning between layouts

- [prepareForTransitionFromLayout:](preparefortransition%28from_%29.md): Tells the layout object to prepare to be installed as the layout for the collection view.
- [prepareForTransitionToLayout:](preparefortransition%28to_%29.md): Tells the layout object that it is about to be removed as the layout for the collection view.
