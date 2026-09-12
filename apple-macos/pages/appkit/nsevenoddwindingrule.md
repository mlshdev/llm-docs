> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevenoddwindingrule](https://developer.apple.com/documentation/appkit/nsevenoddwindingrule)

# NSEvenOddWindingRule

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Specifies the even-odd winding rule.

> Use [NSWindingRuleEvenOdd](nsbezierpath/windingrule-swift.enum/evenodd.md) instead.

## Declaration

```objectivec
static const NSWindingRule NSEvenOddWindingRule;
```

<a id="Discussion"></a>

## Discussion

Count the total number of path crossings. If the number of crossings is even, the point is outside the path. If the number of crossings is odd, the point is inside the path and the region that contains it is filled.

## See Also

### Deprecated Constants

- [NSNonZeroWindingRule](nsnonzerowindingrule.md): Deprecated. Specifies the non-zero winding rule.
