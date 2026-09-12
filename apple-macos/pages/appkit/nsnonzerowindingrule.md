> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsnonzerowindingrule](https://developer.apple.com/documentation/appkit/nsnonzerowindingrule)

# NSNonZeroWindingRule

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Specifies the non-zero winding rule.

> Use [NSWindingRuleNonZero](nsbezierpath/windingrule-swift.enum/nonzero.md) instead.

## Declaration

```objectivec
static const NSWindingRule NSNonZeroWindingRule;
```

<a id="Discussion"></a>

## Discussion

Count each left-to-right path as +1, and each right-to-left path as -1. If the sum of all crossings is 0, the point is outside the path. If the sum is nonzero, the point is inside the path and the region containing it is filled. This is the default winding rule.

## See Also

### Deprecated Constants

- [NSEvenOddWindingRule](nsevenoddwindingrule.md): Deprecated. Specifies the even-odd winding rule.
