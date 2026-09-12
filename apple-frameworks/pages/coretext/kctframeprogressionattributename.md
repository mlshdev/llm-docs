> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/kctframeprogressionattributename](https://developer.apple.com/documentation/coretext/kctframeprogressionattributename)

# kCTFrameProgressionAttributeName (Swift)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies progression for a frame.

## Declaration

```swift
let kCTFrameProgressionAttributeName: CFString
```

<a id="Discussion"></a>

## Discussion

A [CFNumber](../corefoundation/cfnumber.md) object containing a [CTFrameProgression](ctframeprogression.md) constant. The default is `kCTFrameProgressionTopToBottom`.

This value determines the line-stacking behavior for a frame and does not affect the appearance of the glyphs within that frame.

## See Also

### Constants

- [CTFrameProgression](ctframeprogression.md): Constants that specify frame progression types.
- [kCTFramePathFillRuleAttributeName](kctframepathfillruleattributename.md): The key used to specify the fill rule for a frame.
- [kCTFramePathWidthAttributeName](kctframepathwidthattributename.md): The key used to specify the frame width.
- [kCTFrameClippingPathsAttributeName](kctframeclippingpathsattributename.md): Specifies array of paths to clip frame.
- [kCTFramePathClippingPathAttributeName](kctframepathclippingpathattributename.md): Specifies clipping path.

# kCTFrameProgressionAttributeName (Objective-C)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies progression for a frame.

## Declaration

```objectivec
extern CFStringRef const kCTFrameProgressionAttributeName;
```

<a id="Discussion"></a>

## Discussion

A [CFNumberRef](../corefoundation/cfnumber.md) object containing a [CTFrameProgression](ctframeprogression.md) constant. The default is `kCTFrameProgressionTopToBottom`.

This value determines the line-stacking behavior for a frame and does not affect the appearance of the glyphs within that frame.

## See Also

### Constants

- [CTFrameProgression](ctframeprogression.md): Constants that specify frame progression types.
- [kCTFramePathFillRuleAttributeName](kctframepathfillruleattributename.md): The key used to specify the fill rule for a frame.
- [kCTFramePathWidthAttributeName](kctframepathwidthattributename.md): The key used to specify the frame width.
- [kCTFrameClippingPathsAttributeName](kctframeclippingpathsattributename.md): Specifies array of paths to clip frame.
- [kCTFramePathClippingPathAttributeName](kctframepathclippingpathattributename.md): Specifies clipping path.
