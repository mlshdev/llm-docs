> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/kctframepathfillruleattributename](https://developer.apple.com/documentation/coretext/kctframepathfillruleattributename)

# kCTFramePathFillRuleAttributeName (Swift)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The key used to specify the fill rule for a frame.

## Declaration

```swift
let kCTFramePathFillRuleAttributeName: CFString
```

<a id="discussion"></a>

## Discussion

The value must be a [CFNumber](../corefoundation/cfnumber.md) object containing a [CTFramePathFillRule](ctframepathfillrule.md) constant. The default value is [CTFramePathFillRule.evenOdd](ctframepathfillrule/evenodd.md).

## See Also

### Constants

- [CTFrameProgression](ctframeprogression.md): Constants that specify frame progression types.
- [kCTFrameProgressionAttributeName](kctframeprogressionattributename.md): Specifies progression for a frame.
- [kCTFramePathWidthAttributeName](kctframepathwidthattributename.md): The key used to specify the frame width.
- [kCTFrameClippingPathsAttributeName](kctframeclippingpathsattributename.md): Specifies array of paths to clip frame.
- [kCTFramePathClippingPathAttributeName](kctframepathclippingpathattributename.md): Specifies clipping path.

# kCTFramePathFillRuleAttributeName (Objective-C)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The key used to specify the fill rule for a frame.

## Declaration

```objectivec
extern CFStringRef const kCTFramePathFillRuleAttributeName;
```

<a id="discussion"></a>

## Discussion

The value must be a [CFNumberRef](../corefoundation/cfnumber.md) object containing a [CTFramePathFillRule](ctframepathfillrule.md) constant. The default value is [kCTFramePathFillEvenOdd](ctframepathfillrule/evenodd.md).

## See Also

### Constants

- [CTFrameProgression](ctframeprogression.md): Constants that specify frame progression types.
- [kCTFrameProgressionAttributeName](kctframeprogressionattributename.md): Specifies progression for a frame.
- [kCTFramePathWidthAttributeName](kctframepathwidthattributename.md): The key used to specify the frame width.
- [kCTFrameClippingPathsAttributeName](kctframeclippingpathsattributename.md): Specifies array of paths to clip frame.
- [kCTFramePathClippingPathAttributeName](kctframepathclippingpathattributename.md): Specifies clipping path.
