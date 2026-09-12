> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayout/finalizeanimatedboundschange()](https://developer.apple.com/documentation/uikit/uicollectionviewlayout/finalizeanimatedboundschange())

# finalizeAnimatedBoundsChange() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Cleans up after any animated changes to the view’s bounds or after the insertion or deletion of items.

## Declaration

```swift
func finalizeAnimatedBoundsChange()
```

<a id="Discussion"></a>

## Discussion

The collection view calls this method after creating the animations for changing the view’s bounds or after the animated insertion or deletion of items. This method is the layout object’s opportunity to do any cleanup related to those operations.

You can also use this method to perform additional animations. Any animations you create are added to the animation block used to handle the insertions, deletions, and bounds changes.

## See Also

### Coordinating animated changes

- [prepare(forAnimatedBoundsChange:)](prepare%28foranimatedboundschange_%29.md): Prepares the layout object for animated changes to the view’s bounds or the insertion or deletion of items.

# finalizeAnimatedBoundsChange (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Cleans up after any animated changes to the view’s bounds or after the insertion or deletion of items.

## Declaration

```objectivec
- (void) finalizeAnimatedBoundsChange;
```

<a id="Discussion"></a>

## Discussion

The collection view calls this method after creating the animations for changing the view’s bounds or after the animated insertion or deletion of items. This method is the layout object’s opportunity to do any cleanup related to those operations.

You can also use this method to perform additional animations. Any animations you create are added to the animation block used to handle the insertions, deletions, and bounds changes.

## See Also

### Coordinating animated changes

- [prepareForAnimatedBoundsChange:](prepare%28foranimatedboundschange_%29.md): Prepares the layout object for animated changes to the view’s bounds or the insertion or deletion of items.
