> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiview/exerciseambiguityinlayout()

# exerciseAmbiguityInLayout() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Randomly changes the frame of a view with an ambiguous layout between the different valid values.

## Declaration

```swift
func exerciseAmbiguityInLayout()
```

<a id="Discussion"></a>

## Discussion

This method randomly changes the frame of a view with an ambiguous layout between its different valid values, causing the view to move in the interface. This makes it easy to visually identify what the valid frames are and may enable the developer to discern what constraints need to be added to the layout to fully specify a location for the view.

This method should only be used for debugging constraint-based layout. No application should ship with calls to this method as part of its operation.

## See Also

### Debugging Auto Layout

- [constraintsAffectingLayout(for:)](constraintsaffectinglayout%28for_%29.md): Returns the constraints impacting the layout of the view for a given axis.
- [hasAmbiguousLayout](hasambiguouslayout.md): A Boolean value that determines whether the constraints impacting the layout of the view incompletely specify the location of the view.

# exerciseAmbiguityInLayout (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Randomly changes the frame of a view with an ambiguous layout between the different valid values.

## Declaration

```objectivec
- (void) exerciseAmbiguityInLayout;
```

<a id="Discussion"></a>

## Discussion

This method randomly changes the frame of a view with an ambiguous layout between its different valid values, causing the view to move in the interface. This makes it easy to visually identify what the valid frames are and may enable the developer to discern what constraints need to be added to the layout to fully specify a location for the view.

This method should only be used for debugging constraint-based layout. No application should ship with calls to this method as part of its operation.

## See Also

### Debugging Auto Layout

- [constraintsAffectingLayoutForAxis:](constraintsaffectinglayout%28for_%29.md): Returns the constraints impacting the layout of the view for a given axis.
- [hasAmbiguousLayout](hasambiguouslayout.md): A Boolean value that determines whether the constraints impacting the layout of the view incompletely specify the location of the view.
