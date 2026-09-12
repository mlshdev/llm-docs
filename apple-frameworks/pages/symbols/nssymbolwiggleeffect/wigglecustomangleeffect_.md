> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/nssymbolwiggleeffect/wigglecustomangleeffect:](https://developer.apple.com/documentation/symbols/nssymbolwiggleeffect/wigglecustomangleeffect:)

# wiggleCustomAngleEffect:

**Interface language:** Objective-C

**Framework:** Symbols  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Convenience initializer for a wiggle effect that moves back and forth along an axis, starting by moving toward a custom angle.

## Declaration

```objectivec
+ (instancetype) wiggleCustomAngleEffect:(double) angle;
```

<a id="discussion"></a>

## Discussion

The angle is in degrees moving clockwise from the positive x-axis.
