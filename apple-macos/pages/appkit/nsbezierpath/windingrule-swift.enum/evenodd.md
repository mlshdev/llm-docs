> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsbezierpath/windingrule-swift.enum/evenodd

# NSBezierPath.WindingRule.evenOdd (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

Specifies the even-odd winding rule.

## Declaration

```swift
case evenOdd
```

<a id="Discussion"></a>

## Discussion

Count the total number of path crossings. If the number of crossings is even, the point is outside the path. If the number of crossings is odd, the point is inside the path and the region that contains it is filled.

## See Also

### Constants

- [NSBezierPath.WindingRule.nonZero](nonzero.md): Specifies the non-zero winding rule.

# NSWindingRuleEvenOdd (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

Specifies the even-odd winding rule.

## Declaration

```objectivec
NSWindingRuleEvenOdd
```

<a id="Discussion"></a>

## Discussion

Count the total number of path crossings. If the number of crossings is even, the point is outside the path. If the number of crossings is odd, the point is inside the path and the region that contains it is filled.

## See Also

### Constants

- [NSWindingRuleNonZero](nonzero.md): Specifies the non-zero winding rule.
