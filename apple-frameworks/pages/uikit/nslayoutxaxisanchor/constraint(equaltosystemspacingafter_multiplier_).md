> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutxaxisanchor/constraint(equaltosystemspacingafter:multiplier:)](https://developer.apple.com/documentation/uikit/nslayoutxaxisanchor/constraint(equaltosystemspacingafter:multiplier:))

# constraint(equalToSystemSpacingAfter:multiplier:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns a constraint that defines by how much the current anchor trails the specified anchor.

## Declaration

```swift
func constraint(equalToSystemSpacingAfter anchor: NSLayoutXAxisAnchor, multiplier: CGFloat) -> NSLayoutConstraint
```

## Parameters

- `anchor`: The anchor to use as the starting point for the constraint.
- `multiplier`: The multiple of the system spacing to use as the distance between the two anchors.

<a id="return-value"></a>

## Return Value

An [NSLayoutConstraint](../nslayoutconstraint.md) object that imposes a specific distance between the current anchor and the object in the `anchor` parameter.

<a id="Discussion"></a>

## Discussion

The constraint causes the current anchor to trail the object in the `anchor` parameter. For example, in a left-to-right layout, the current anchor is to the right of `anchor`, but in a right-to-left layout, it’s to the left of `anchor`.

The distance between the two anchors is determined by multiplying the system spacing by the value in the `multiplier` parameter. The value of the system space is determined from information available from the anchors.

## See Also

### Building system spacing constraints

- [constraint(greaterThanOrEqualToSystemSpacingAfter:multiplier:)](constraint%28greaterthanorequaltosystemspacingafter_multiplier_%29.md): Returns a constraint that defines the minimum amount by which the current anchor trails the specified anchor.
- [constraint(lessThanOrEqualToSystemSpacingAfter:multiplier:)](constraint%28lessthanorequaltosystemspacingafter_multiplier_%29.md): Returns a constraint that defines the maximum amount by which the current anchor trails the specified anchor.
- [Creating self-sizing table view cells](../creating-self-sizing-table-view-cells.md): Create table view cells that support Dynamic Type and use system spacing constraints to adjust the spacing surrounding text labels.

# constraintEqualToSystemSpacingAfterAnchor:multiplier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns a constraint that defines by how much the current anchor trails the specified anchor.

## Declaration

```objectivec
- (NSLayoutConstraint *) constraintEqualToSystemSpacingAfterAnchor:(NSLayoutXAxisAnchor *) anchor multiplier:(CGFloat) multiplier;
```

## Parameters

- `anchor`: The anchor to use as the starting point for the constraint.
- `multiplier`: The multiple of the system spacing to use as the distance between the two anchors.

<a id="return-value"></a>

## Return Value

An [NSLayoutConstraint](../nslayoutconstraint.md) object that imposes a specific distance between the current anchor and the object in the `anchor` parameter.

<a id="Discussion"></a>

## Discussion

The constraint causes the current anchor to trail the object in the `anchor` parameter. For example, in a left-to-right layout, the current anchor is to the right of `anchor`, but in a right-to-left layout, it’s to the left of `anchor`.

The distance between the two anchors is determined by multiplying the system spacing by the value in the `multiplier` parameter. The value of the system space is determined from information available from the anchors.

## See Also

### Building system spacing constraints

- [constraintGreaterThanOrEqualToSystemSpacingAfterAnchor:multiplier:](constraint%28greaterthanorequaltosystemspacingafter_multiplier_%29.md): Returns a constraint that defines the minimum amount by which the current anchor trails the specified anchor.
- [constraintLessThanOrEqualToSystemSpacingAfterAnchor:multiplier:](constraint%28lessthanorequaltosystemspacingafter_multiplier_%29.md): Returns a constraint that defines the maximum amount by which the current anchor trails the specified anchor.
- [Creating self-sizing table view cells](../creating-self-sizing-table-view-cells.md): Create table view cells that support Dynamic Type and use system spacing constraints to adjust the spacing surrounding text labels.
