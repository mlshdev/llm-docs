> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdiffabledatasourcereference/defaultrowanimation](https://developer.apple.com/documentation/appkit/nstableviewdiffabledatasourcereference/defaultrowanimation)

# defaultRowAnimation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The default animation the UI uses to show differences between rows.

## Declaration

```swift
var defaultRowAnimation: NSTableView.AnimationOptions { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [effectFade](../nstableview/animationoptions/effectfade.md).

If you set the value of this property, the new value becomes the default row animation for the next update that uses [applySnapshot(\_:animatingDifferences:)](applysnapshot%28__animatingdifferences_%29.md).

## See Also

### Updating Data

- [snapshot()](snapshot%28%29.md): Returns a representation of the current state of the data in the table view.
- [applySnapshot(\_:animatingDifferences:)](applysnapshot%28__animatingdifferences_%29.md): Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes.
- [applySnapshot(\_:animatingDifferences:completion:)](applysnapshot%28__animatingdifferences_completion_%29.md): Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes and executing a completion handler.

# defaultRowAnimation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The default animation the UI uses to show differences between rows.

## Declaration

```objectivec
@property NSTableViewAnimationOptions defaultRowAnimation;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [NSTableViewAnimationEffectFade](../nstableview/animationoptions/effectfade.md).

If you set the value of this property, the new value becomes the default row animation for the next update that uses [applySnapshot:animatingDifferences:](applysnapshot%28__animatingdifferences_%29.md).

## See Also

### Updating Data

- [snapshot](snapshot%28%29.md): Returns a representation of the current state of the data in the table view.
- [applySnapshot:animatingDifferences:](applysnapshot%28__animatingdifferences_%29.md): Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes.
- [applySnapshot:animatingDifferences:completion:](applysnapshot%28__animatingdifferences_completion_%29.md): Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes and executing a completion handler.
