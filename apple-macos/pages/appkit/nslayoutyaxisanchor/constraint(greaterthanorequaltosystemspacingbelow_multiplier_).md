> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutyaxisanchor/constraint(greaterthanorequaltosystemspacingbelow:multiplier:)](https://developer.apple.com/documentation/appkit/nslayoutyaxisanchor/constraint(greaterthanorequaltosystemspacingbelow:multiplier:))

# constraint(greaterThanOrEqualToSystemSpacingBelow:multiplier:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Returns a constraint that defines the minimum distance by which the current anchor is positioned below the specified anchor.

## Declaration

```swift
func constraint(greaterThanOrEqualToSystemSpacingBelow anchor: NSLayoutYAxisAnchor, multiplier: CGFloat) -> NSLayoutConstraint
```

## Parameters

- `anchor`: The anchor to use as the starting point for the constraint.
- `multiplier`: The multiple of the system spacing to use as the distance between the two anchors.

<a id="return-value"></a>

## Return Value

An [NSLayoutConstraint](../nslayoutconstraint.md) object that imposes a minimum distance between the current anchor and the object in the `anchor` parameter.

<a id="Discussion"></a>

## Discussion

The constraint causes the current anchor to be positioned below the object in the `anchor` parameter. The minimum distance between the two anchors is determined by multiplying the system spacing by the value in the `multiplier` parameter. The value of the system spacing is determined from information available from the anchors. For example, if the anchors represent text baselines, the spacing is determined by the fonts used at those baselines.

## See Also

### Building system spacing constraints

- [constraint(equalToSystemSpacingBelow:multiplier:)](constraint%28equaltosystemspacingbelow_multiplier_%29.md): Returns a constraint that defines the specific distance at which the current anchor is positioned below the specified anchor.
- [constraint(lessThanOrEqualToSystemSpacingBelow:multiplier:)](constraint%28lessthanorequaltosystemspacingbelow_multiplier_%29.md): Returns a constraint that defines the maximum distance by which the current anchor is positioned below the specified anchor.
- [Creating self-sizing table view cells](https://developer.apple.com/documentation/uikit/creating-self-sizing-table-view-cells): Create table view cells that support Dynamic Type and use system spacing constraints to adjust the spacing surrounding text labels.

# constraintGreaterThanOrEqualToSystemSpacingBelowAnchor:multiplier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Returns a constraint that defines the minimum distance by which the current anchor is positioned below the specified anchor.

## Declaration

```objectivec
- (NSLayoutConstraint *) constraintGreaterThanOrEqualToSystemSpacingBelowAnchor:(NSLayoutYAxisAnchor *) anchor multiplier:(CGFloat) multiplier;
```

## Parameters

- `anchor`: The anchor to use as the starting point for the constraint.
- `multiplier`: The multiple of the system spacing to use as the distance between the two anchors.

<a id="return-value"></a>

## Return Value

An [NSLayoutConstraint](../nslayoutconstraint.md) object that imposes a minimum distance between the current anchor and the object in the `anchor` parameter.

<a id="Discussion"></a>

## Discussion

The constraint causes the current anchor to be positioned below the object in the `anchor` parameter. The minimum distance between the two anchors is determined by multiplying the system spacing by the value in the `multiplier` parameter. The value of the system spacing is determined from information available from the anchors. For example, if the anchors represent text baselines, the spacing is determined by the fonts used at those baselines.

## See Also

### Building system spacing constraints

- [constraintEqualToSystemSpacingBelowAnchor:multiplier:](constraint%28equaltosystemspacingbelow_multiplier_%29.md): Returns a constraint that defines the specific distance at which the current anchor is positioned below the specified anchor.
- [constraintLessThanOrEqualToSystemSpacingBelowAnchor:multiplier:](constraint%28lessthanorequaltosystemspacingbelow_multiplier_%29.md): Returns a constraint that defines the maximum distance by which the current anchor is positioned below the specified anchor.
- [Creating self-sizing table view cells](https://developer.apple.com/documentation/uikit/creating-self-sizing-table-view-cells): Create table view cells that support Dynamic Type and use system spacing constraints to adjust the spacing surrounding text labels.
