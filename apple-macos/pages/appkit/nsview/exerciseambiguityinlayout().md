> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/exerciseambiguityinlayout()](https://developer.apple.com/documentation/appkit/nsview/exerciseambiguityinlayout())

# exerciseAmbiguityInLayout() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

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

- [constraintsAffectingLayout(for:)](constraintsaffectinglayout%28for_%29.md): Returns the constraints impacting the layout of the view for a given orientation.
- [hasAmbiguousLayout](hasambiguouslayout.md): A Boolean value indicating whether the constraints impacting the layout of the view incompletely specify the location of the view.

# exerciseAmbiguityInLayout (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

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

- [constraintsAffectingLayoutForOrientation:](constraintsaffectinglayout%28for_%29.md): Returns the constraints impacting the layout of the view for a given orientation.
- [hasAmbiguousLayout](hasambiguouslayout.md): A Boolean value indicating whether the constraints impacting the layout of the view incompletely specify the location of the view.
