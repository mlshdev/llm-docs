> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayout/prepare(foranimatedboundschange:)](https://developer.apple.com/documentation/uikit/uicollectionviewlayout/prepare(foranimatedboundschange:))

# prepare(forAnimatedBoundsChange:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Prepares the layout object for animated changes to the view’s bounds or the insertion or deletion of items.

## Declaration

```swift
func prepare(forAnimatedBoundsChange oldBounds: CGRect)
```

## Parameters

- `oldBounds`: The current bounds of the collection view.

<a id="Discussion"></a>

## Discussion

The collection view calls this method before performing any animated changes to the view’s bounds or before the animated insertion or deletion of items. This method is the layout object’s opportunity to perform any calculations needed to prepare for those animated changes. Specifically, you might use this method to calculate the initial or final positions of inserted or deleted items so that you can return those values when asked for them.

You can also use this method to perform additional animations. Any animations you create are added to the animation block used to handle the insertions, deletions, and bounds changes.

## See Also

### Coordinating animated changes

- [finalizeAnimatedBoundsChange()](finalizeanimatedboundschange%28%29.md): Cleans up after any animated changes to the view’s bounds or after the insertion or deletion of items.

# prepareForAnimatedBoundsChange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Prepares the layout object for animated changes to the view’s bounds or the insertion or deletion of items.

## Declaration

```objectivec
- (void) prepareForAnimatedBoundsChange:(CGRect) oldBounds;
```

## Parameters

- `oldBounds`: The current bounds of the collection view.

<a id="Discussion"></a>

## Discussion

The collection view calls this method before performing any animated changes to the view’s bounds or before the animated insertion or deletion of items. This method is the layout object’s opportunity to perform any calculations needed to prepare for those animated changes. Specifically, you might use this method to calculate the initial or final positions of inserted or deleted items so that you can return those values when asked for them.

You can also use this method to perform additional animations. Any animations you create are added to the animation block used to handle the insertions, deletions, and bounds changes.

## See Also

### Coordinating animated changes

- [finalizeAnimatedBoundsChange](finalizeanimatedboundschange%28%29.md): Cleans up after any animated changes to the view’s bounds or after the insertion or deletion of items.
