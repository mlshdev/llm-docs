> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayout/finalizelayouttransition()](https://developer.apple.com/documentation/appkit/nscollectionviewlayout/finalizelayouttransition())

# finalizeLayoutTransition() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Performs any final steps related to a layout transition before the transition animations actually occur.

## Declaration

```swift
func finalizeLayoutTransition()
```

<a id="Discussion"></a>

## Discussion

After it has gathered all of the layout attributes it needs, the collection view calls this method on both the new and old layout objects to give them time to perform any additional operations. Use this method to clean up any data structures or caches related to the transition that your layout object no longer needs.

## See Also

### Transitioning Between Layouts

- [prepareForTransition(from:)](preparefortransition%28from_%29.md): Prepares the layout object to be installed in the collection view.
- [prepareForTransition(to:)](preparefortransition%28to_%29.md): Prepares the layout object to be uninstalled from the collection view.

# finalizeLayoutTransition (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Performs any final steps related to a layout transition before the transition animations actually occur.

## Declaration

```objectivec
- (void) finalizeLayoutTransition;
```

<a id="Discussion"></a>

## Discussion

After it has gathered all of the layout attributes it needs, the collection view calls this method on both the new and old layout objects to give them time to perform any additional operations. Use this method to clean up any data structures or caches related to the transition that your layout object no longer needs.

## See Also

### Transitioning Between Layouts

- [prepareForTransitionFromLayout:](preparefortransition%28from_%29.md): Prepares the layout object to be installed in the collection view.
- [prepareForTransitionToLayout:](preparefortransition%28to_%29.md): Prepares the layout object to be uninstalled from the collection view.
