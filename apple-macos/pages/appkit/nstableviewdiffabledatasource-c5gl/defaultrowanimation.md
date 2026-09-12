> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdiffabledatasource-c5gl/defaultrowanimation](https://developer.apple.com/documentation/appkit/nstableviewdiffabledatasource-c5gl/defaultrowanimation)

# defaultRowAnimation

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The default animation the UI uses to show differences between rows.

## Declaration

```swift
var defaultRowAnimation: NSTableView.AnimationOptions
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [effectFade](../nstableview/animationoptions/effectfade.md).

If you set the value of this property, the new value becomes the default row animation for the next update that uses [apply(\_:animatingDifferences:completion:)](apply%28__animatingdifferences_completion_%29.md).

## See Also

### Updating Data

- [snapshot()](snapshot%28%29.md): Returns a representation of the current state of the data in the table view.
- [apply(\_:animatingDifferences:completion:)](apply%28__animatingdifferences_completion_%29.md): Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes and executing a completion handler.
