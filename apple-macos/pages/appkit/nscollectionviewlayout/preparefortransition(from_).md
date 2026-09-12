> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayout/preparefortransition(from:)](https://developer.apple.com/documentation/appkit/nscollectionviewlayout/preparefortransition(from:))

# prepareForTransition(from:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Prepares the layout object to be installed in the collection view.

## Declaration

```swift
func prepareForTransition(from oldLayout: NSCollectionViewLayout)
```

## Parameters

- `oldLayout`: The layout object installed in the collection view at the beginning of the transition. You might use this object to retrieve the current layout attributes for items and views.

<a id="Discussion"></a>

## Discussion

Prior to transitioning to a new layout object, the collection view calls this method on the new layout object to give it time to perform any initial calculations.

## See Also

### Transitioning Between Layouts

- [prepareForTransition(to:)](preparefortransition%28to_%29.md): Prepares the layout object to be uninstalled from the collection view.
- [finalizeLayoutTransition()](finalizelayouttransition%28%29.md): Performs any final steps related to a layout transition before the transition animations actually occur.

# prepareForTransitionFromLayout: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Prepares the layout object to be installed in the collection view.

## Declaration

```objectivec
- (void) prepareForTransitionFromLayout:(NSCollectionViewLayout *) oldLayout;
```

## Parameters

- `oldLayout`: The layout object installed in the collection view at the beginning of the transition. You might use this object to retrieve the current layout attributes for items and views.

<a id="Discussion"></a>

## Discussion

Prior to transitioning to a new layout object, the collection view calls this method on the new layout object to give it time to perform any initial calculations.

## See Also

### Transitioning Between Layouts

- [prepareForTransitionToLayout:](preparefortransition%28to_%29.md): Prepares the layout object to be uninstalled from the collection view.
- [finalizeLayoutTransition](finalizelayouttransition%28%29.md): Performs any final steps related to a layout transition before the transition animations actually occur.
