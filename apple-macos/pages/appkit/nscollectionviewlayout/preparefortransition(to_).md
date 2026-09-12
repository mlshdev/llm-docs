> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayout/preparefortransition(to:)](https://developer.apple.com/documentation/appkit/nscollectionviewlayout/preparefortransition(to:))

# prepareForTransition(to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Prepares the layout object to be uninstalled from the collection view.

## Declaration

```swift
func prepareForTransition(to newLayout: NSCollectionViewLayout)
```

## Parameters

- `newLayout`: The layout object to install in the collection view at the end of the transition.

<a id="Discussion"></a>

## Discussion

Prior to transitioning to a new layout object, the collection view calls this method on the old layout object to give it time to perform any cleanup operations.

## See Also

### Transitioning Between Layouts

- [prepareForTransition(from:)](preparefortransition%28from_%29.md): Prepares the layout object to be installed in the collection view.
- [finalizeLayoutTransition()](finalizelayouttransition%28%29.md): Performs any final steps related to a layout transition before the transition animations actually occur.

# prepareForTransitionToLayout: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Prepares the layout object to be uninstalled from the collection view.

## Declaration

```objectivec
- (void) prepareForTransitionToLayout:(NSCollectionViewLayout *) newLayout;
```

## Parameters

- `newLayout`: The layout object to install in the collection view at the end of the transition.

<a id="Discussion"></a>

## Discussion

Prior to transitioning to a new layout object, the collection view calls this method on the old layout object to give it time to perform any cleanup operations.

## See Also

### Transitioning Between Layouts

- [prepareForTransitionFromLayout:](preparefortransition%28from_%29.md): Prepares the layout object to be installed in the collection view.
- [finalizeLayoutTransition](finalizelayouttransition%28%29.md): Performs any final steps related to a layout transition before the transition animations actually occur.
