> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayout/preparefortransition(to:)](https://developer.apple.com/documentation/uikit/uicollectionviewlayout/preparefortransition(to:))

# prepareForTransition(to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the layout object that it is about to be removed as the layout for the collection view.

## Declaration

```swift
func prepareForTransition(to newLayout: UICollectionViewLayout)
```

## Parameters

- `newLayout`: The layout object to be installed in the collection view at the end of the transition. You might use this object to provide different starting attributes depending on the final layout object.

<a id="Discussion"></a>

## Discussion

Prior to performing a layout transition, the collection view calls this method so that your layout object can perform any initial calculations needed to generate layout attributes.

## See Also

### Transitioning between layouts

- [prepareForTransition(from:)](preparefortransition%28from_%29.md): Tells the layout object to prepare to be installed as the layout for the collection view.
- [finalizeLayoutTransition()](finalizelayouttransition%28%29.md): Tells the layout object to perform any final steps before the transition animations occur.

# prepareForTransitionToLayout: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Tells the layout object that it is about to be removed as the layout for the collection view.

## Declaration

```objectivec
- (void) prepareForTransitionToLayout:(UICollectionViewLayout *) newLayout;
```

## Parameters

- `newLayout`: The layout object to be installed in the collection view at the end of the transition. You might use this object to provide different starting attributes depending on the final layout object.

<a id="Discussion"></a>

## Discussion

Prior to performing a layout transition, the collection view calls this method so that your layout object can perform any initial calculations needed to generate layout attributes.

## See Also

### Transitioning between layouts

- [prepareForTransitionFromLayout:](preparefortransition%28from_%29.md): Tells the layout object to prepare to be installed as the layout for the collection view.
- [finalizeLayoutTransition](finalizelayouttransition%28%29.md): Tells the layout object to perform any final steps before the transition animations occur.
