> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/kctframeclippingpathsattributename](https://developer.apple.com/documentation/coretext/kctframeclippingpathsattributename)

# kCTFrameClippingPathsAttributeName (Swift)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies array of paths to clip frame.

## Declaration

```swift
let kCTFrameClippingPathsAttributeName: CFString
```

<a id="discussion"></a>

## Discussion

The value must be a `CFArrayRef` containing `CFDictionaryRef`s. Each dictionary should have a `kCTFramePathClippingPathAttributeName` key-value pair, and can have a `kCTFramePathFillRuleAttributeName` key-value pair and `kCTFramePathFillRuleAttributeName` key-value pair as optional parameters.

## See Also

### Constants

- [CTFrameProgression](ctframeprogression.md): Constants that specify frame progression types.
- [kCTFrameProgressionAttributeName](kctframeprogressionattributename.md): Specifies progression for a frame.
- [kCTFramePathFillRuleAttributeName](kctframepathfillruleattributename.md): The key used to specify the fill rule for a frame.
- [kCTFramePathWidthAttributeName](kctframepathwidthattributename.md): The key used to specify the frame width.
- [kCTFramePathClippingPathAttributeName](kctframepathclippingpathattributename.md): Specifies clipping path.

# kCTFrameClippingPathsAttributeName (Objective-C)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies array of paths to clip frame.

## Declaration

```objectivec
extern CFStringRef const kCTFrameClippingPathsAttributeName;
```

<a id="discussion"></a>

## Discussion

The value must be a `CFArrayRef` containing `CFDictionaryRef`s. Each dictionary should have a `kCTFramePathClippingPathAttributeName` key-value pair, and can have a `kCTFramePathFillRuleAttributeName` key-value pair and `kCTFramePathFillRuleAttributeName` key-value pair as optional parameters.

## See Also

### Constants

- [CTFrameProgression](ctframeprogression.md): Constants that specify frame progression types.
- [kCTFrameProgressionAttributeName](kctframeprogressionattributename.md): Specifies progression for a frame.
- [kCTFramePathFillRuleAttributeName](kctframepathfillruleattributename.md): The key used to specify the fill rule for a frame.
- [kCTFramePathWidthAttributeName](kctframepathwidthattributename.md): The key used to specify the frame width.
- [kCTFramePathClippingPathAttributeName](kctframepathclippingpathattributename.md): Specifies clipping path.
