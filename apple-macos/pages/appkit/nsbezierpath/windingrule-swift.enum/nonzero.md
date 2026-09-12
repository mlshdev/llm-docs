> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbezierpath/windingrule-swift.enum/nonzero](https://developer.apple.com/documentation/appkit/nsbezierpath/windingrule-swift.enum/nonzero)

# NSBezierPath.WindingRule.nonZero (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

Specifies the non-zero winding rule.

## Declaration

```swift
case nonZero
```

<a id="Discussion"></a>

## Discussion

Count each left-to-right path as +1, and each right-to-left path as -1. If the sum of all crossings is 0, the point is outside the path. If the sum is nonzero, the point is inside the path and the region containing it is filled. This is the default winding rule.

## See Also

### Constants

- [NSBezierPath.WindingRule.evenOdd](evenodd.md): Specifies the even-odd winding rule.

# NSWindingRuleNonZero (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

Specifies the non-zero winding rule.

## Declaration

```objectivec
NSWindingRuleNonZero
```

<a id="Discussion"></a>

## Discussion

Count each left-to-right path as +1, and each right-to-left path as -1. If the sum of all crossings is 0, the point is outside the path. If the sum is nonzero, the point is inside the path and the region containing it is filled. This is the default winding rule.

## See Also

### Constants

- [NSWindingRuleEvenOdd](evenodd.md): Specifies the even-odd winding rule.
