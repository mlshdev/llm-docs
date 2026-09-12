> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutxaxisanchor/constraint(greaterthanorequaltosystemspacingafter:multiplier:)](https://developer.apple.com/documentation/appkit/nslayoutxaxisanchor/constraint(greaterthanorequaltosystemspacingafter:multiplier:))

# constraint(greaterThanOrEqualToSystemSpacingAfter:multiplier:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Returns a constraint that defines the minimum amount by which the current anchor trails the specified anchor.

## Declaration

```swift
func constraint(greaterThanOrEqualToSystemSpacingAfter anchor: NSLayoutXAxisAnchor, multiplier: CGFloat) -> NSLayoutConstraint
```

## Parameters

- `anchor`: The anchor to use as the starting point for the constraint.
- `multiplier`: The multiple of the system spacing to use as the minimum distance between the two anchors.

<a id="return-value"></a>

## Return Value

An [NSLayoutConstraint](../nslayoutconstraint.md) object that imposes a minimum distance between the current anchor and the object in the `anchor` parameter.

<a id="Discussion"></a>

## Discussion

The constraint causes the current anchor to trail the object in the `anchor` parameter. For example, in a left-to-right layout, the current anchor is to the right of `anchor`, but in a right-to-left layout, it’s to the left of `anchor`.

The minimum distance between the two anchors is determined by multiplying the system spacing by the value in the `multiplier` parameter. (The actual distance must be greater than or equal to that value.) The value of the system space is determined from information available from the anchors.

## See Also

### Building system spacing constraints

- [constraint(equalToSystemSpacingAfter:multiplier:)](constraint%28equaltosystemspacingafter_multiplier_%29.md): Returns a constraint that defines by how much the current anchor trails the specified anchor.
- [constraint(lessThanOrEqualToSystemSpacingAfter:multiplier:)](constraint%28lessthanorequaltosystemspacingafter_multiplier_%29.md): Returns a constraint that defines the maximum amount by which the current anchor trails the specified anchor.
- [Creating self-sizing table view cells](https://developer.apple.com/documentation/uikit/creating-self-sizing-table-view-cells): Create table view cells that support Dynamic Type and use system spacing constraints to adjust the spacing surrounding text labels.

# constraintGreaterThanOrEqualToSystemSpacingAfterAnchor:multiplier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Returns a constraint that defines the minimum amount by which the current anchor trails the specified anchor.

## Declaration

```objectivec
- (NSLayoutConstraint *) constraintGreaterThanOrEqualToSystemSpacingAfterAnchor:(NSLayoutXAxisAnchor *) anchor multiplier:(CGFloat) multiplier;
```

## Parameters

- `anchor`: The anchor to use as the starting point for the constraint.
- `multiplier`: The multiple of the system spacing to use as the minimum distance between the two anchors.

<a id="return-value"></a>

## Return Value

An [NSLayoutConstraint](../nslayoutconstraint.md) object that imposes a minimum distance between the current anchor and the object in the `anchor` parameter.

<a id="Discussion"></a>

## Discussion

The constraint causes the current anchor to trail the object in the `anchor` parameter. For example, in a left-to-right layout, the current anchor is to the right of `anchor`, but in a right-to-left layout, it’s to the left of `anchor`.

The minimum distance between the two anchors is determined by multiplying the system spacing by the value in the `multiplier` parameter. (The actual distance must be greater than or equal to that value.) The value of the system space is determined from information available from the anchors.

## See Also

### Building system spacing constraints

- [constraintEqualToSystemSpacingAfterAnchor:multiplier:](constraint%28equaltosystemspacingafter_multiplier_%29.md): Returns a constraint that defines by how much the current anchor trails the specified anchor.
- [constraintLessThanOrEqualToSystemSpacingAfterAnchor:multiplier:](constraint%28lessthanorequaltosystemspacingafter_multiplier_%29.md): Returns a constraint that defines the maximum amount by which the current anchor trails the specified anchor.
- [Creating self-sizing table view cells](https://developer.apple.com/documentation/uikit/creating-self-sizing-table-view-cells): Create table view cells that support Dynamic Type and use system spacing constraints to adjust the spacing surrounding text labels.
