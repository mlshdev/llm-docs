> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/kctframepathclippingpathattributename](https://developer.apple.com/documentation/coretext/kctframepathclippingpathattributename)

# kCTFramePathClippingPathAttributeName (Swift)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies clipping path.

## Declaration

```swift
let kCTFramePathClippingPathAttributeName: CFString
```

<a id="discussion"></a>

## Discussion

Specifies clipping path.  This attribute is valid only in a dictionary contained in an array specified by `kCTFrameClippingPathsAttributeName`.

The value must be a `CGPathRef` specifying a clipping path. See [kCTFrameClippingPathsAttributeName](kctframeclippingpathsattributename.md).

## See Also

### Constants

- [CTFrameProgression](ctframeprogression.md): Constants that specify frame progression types.
- [kCTFrameProgressionAttributeName](kctframeprogressionattributename.md): Specifies progression for a frame.
- [kCTFramePathFillRuleAttributeName](kctframepathfillruleattributename.md): The key used to specify the fill rule for a frame.
- [kCTFramePathWidthAttributeName](kctframepathwidthattributename.md): The key used to specify the frame width.
- [kCTFrameClippingPathsAttributeName](kctframeclippingpathsattributename.md): Specifies array of paths to clip frame.

# kCTFramePathClippingPathAttributeName (Objective-C)

**Framework:** Core Text  
**Kind:** Global Variable  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies clipping path.

## Declaration

```objectivec
extern CFStringRef const kCTFramePathClippingPathAttributeName;
```

<a id="discussion"></a>

## Discussion

Specifies clipping path.  This attribute is valid only in a dictionary contained in an array specified by `kCTFrameClippingPathsAttributeName`.

The value must be a `CGPathRef` specifying a clipping path. See [kCTFrameClippingPathsAttributeName](kctframeclippingpathsattributename.md).

## See Also

### Constants

- [CTFrameProgression](ctframeprogression.md): Constants that specify frame progression types.
- [kCTFrameProgressionAttributeName](kctframeprogressionattributename.md): Specifies progression for a frame.
- [kCTFramePathFillRuleAttributeName](kctframepathfillruleattributename.md): The key used to specify the fill rule for a frame.
- [kCTFramePathWidthAttributeName](kctframepathwidthattributename.md): The key used to specify the frame width.
- [kCTFrameClippingPathsAttributeName](kctframeclippingpathsattributename.md): Specifies array of paths to clip frame.
