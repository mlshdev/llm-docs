> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/distribution-swift.enum/fill](https://developer.apple.com/documentation/appkit/nsstackview/distribution-swift.enum/fill)

# NSStackView.Distribution.fill (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.11+

The effective hugging priority in the stacking axis is `NSLayoutPriorityRequired`, causing the stacked views to tightly fill the container along the stacking axis.

## Declaration

```swift
case fill
```

## See Also

### Constants

- [NSStackView.Distribution.equalCentering](equalcentering.md): Equal center-to-center spacing of the items is maintained as much as possible while still maintaining the minimum spacing between each view.
- [NSStackView.Distribution.equalSpacing](equalspacing.md): The space separating stacked views along the stacking axis are maintained to be equal as much as possible while still maintaining the minimum spacing.
- [NSStackView.Distribution.fillEqually](fillequally.md): Stacked views will have sizes maintained to be equal as much as possible along the stacking axis. The effective hugging priority in the stacking axis is `NSLayoutPriorityRequired`.
- [NSStackView.Distribution.fillProportionally](fillproportionally.md): Stacked views will have sizes maintained to be equal, proportionally to their `intrinsicContentSize`s, as much as possible. The effective hugging priority in the stacking axis is `NSLayoutPriorityRequired`.
- [NSStackView.Distribution.gravityAreas](gravityareas.md): Stacked views will not have any special distribution behavior, relying on behavior described by gravity areas and set hugging priorities along the stacking axis.

# NSStackViewDistributionFill (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.11+

The effective hugging priority in the stacking axis is `NSLayoutPriorityRequired`, causing the stacked views to tightly fill the container along the stacking axis.

## Declaration

```objectivec
NSStackViewDistributionFill
```

## See Also

### Constants

- [NSStackViewDistributionEqualCentering](equalcentering.md): Equal center-to-center spacing of the items is maintained as much as possible while still maintaining the minimum spacing between each view.
- [NSStackViewDistributionEqualSpacing](equalspacing.md): The space separating stacked views along the stacking axis are maintained to be equal as much as possible while still maintaining the minimum spacing.
- [NSStackViewDistributionFillEqually](fillequally.md): Stacked views will have sizes maintained to be equal as much as possible along the stacking axis. The effective hugging priority in the stacking axis is `NSLayoutPriorityRequired`.
- [NSStackViewDistributionFillProportionally](fillproportionally.md): Stacked views will have sizes maintained to be equal, proportionally to their `intrinsicContentSize`s, as much as possible. The effective hugging priority in the stacking axis is `NSLayoutPriorityRequired`.
- [NSStackViewDistributionGravityAreas](gravityareas.md): Stacked views will not have any special distribution behavior, relying on behavior described by gravity areas and set hugging priorities along the stacking axis.
