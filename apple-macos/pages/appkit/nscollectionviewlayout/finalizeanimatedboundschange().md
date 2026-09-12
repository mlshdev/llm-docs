> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayout/finalizeanimatedboundschange()](https://developer.apple.com/documentation/appkit/nscollectionviewlayout/finalizeanimatedboundschange())

# finalizeAnimatedBoundsChange() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Cleans up after any animated changes to the collection view’s bounds or after the insertion or deletion of items.

## Declaration

```swift
func finalizeAnimatedBoundsChange()
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. The collection view calls this method after creating the animations for changing inserting or deleting items or for changing the collection view’s bounds. Subclasses can use this method to perform any cleanup operations related to those changes. You can also use this method to perform custom animations. Any animations you create are added to the animation block used to handle the insertions, deletions, and bounds changes.

## See Also

### Coordinating Animated Changes

- [prepare(forAnimatedBoundsChange:)](prepare%28foranimatedboundschange_%29.md): Prepares the layout object for animated changes to the collection view’s bounds or for the insertion or deletion of items.

# finalizeAnimatedBoundsChange (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Cleans up after any animated changes to the collection view’s bounds or after the insertion or deletion of items.

## Declaration

```objectivec
- (void) finalizeAnimatedBoundsChange;
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. The collection view calls this method after creating the animations for changing inserting or deleting items or for changing the collection view’s bounds. Subclasses can use this method to perform any cleanup operations related to those changes. You can also use this method to perform custom animations. Any animations you create are added to the animation block used to handle the insertions, deletions, and bounds changes.

## See Also

### Coordinating Animated Changes

- [prepareForAnimatedBoundsChange:](prepare%28foranimatedboundschange_%29.md): Prepares the layout object for animated changes to the collection view’s bounds or for the insertion or deletion of items.
