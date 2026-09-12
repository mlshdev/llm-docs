> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutmanager/resolvesnaturalalignmentwithbasewritingdirection](https://developer.apple.com/documentation/uikit/nstextlayoutmanager/resolvesnaturalalignmentwithbasewritingdirection)

# resolvesNaturalAlignmentWithBaseWritingDirection (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Specifies the behavior for resolving [NSTextAlignment.natural](../nstextalignment/natural.md) to the visual alignment.

## Declaration

```swift
var resolvesNaturalAlignmentWithBaseWritingDirection: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When set to `true`, the resolved visual alignment is determined by the resolved base writing direction; otherwise, it is using the user’s preferred language. The default value is `true`.

# resolvesNaturalAlignmentWithBaseWritingDirection (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Specifies the behavior for resolving [NSTextAlignmentNatural](../nstextalignment/natural.md) to the visual alignment.

## Declaration

```objectivec
@property BOOL resolvesNaturalAlignmentWithBaseWritingDirection;
```

<a id="discussion"></a>

## Discussion

When set to `true`, the resolved visual alignment is determined by the resolved base writing direction; otherwise, it is using the user’s preferred language. The default value is `true`.
