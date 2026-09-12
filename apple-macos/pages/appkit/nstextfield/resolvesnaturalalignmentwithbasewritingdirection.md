> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfield/resolvesnaturalalignmentwithbasewritingdirection](https://developer.apple.com/documentation/appkit/nstextfield/resolvesnaturalalignmentwithbasewritingdirection)

# resolvesNaturalAlignmentWithBaseWritingDirection (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

Specifies the behavior for resolving [NSTextAlignment.natural](../nstextalignment/natural.md) to the visual alignment.

## Declaration

```swift
var resolvesNaturalAlignmentWithBaseWritingDirection: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When set to `true`, the resolved visual alignment is determined by the resolved base writing direction; otherwise, it is using the user’s preferred language. The default value is `false`.

# resolvesNaturalAlignmentWithBaseWritingDirection (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

Specifies the behavior for resolving [NSTextAlignmentNatural](../nstextalignment/natural.md) to the visual alignment.

## Declaration

```objectivec
@property BOOL resolvesNaturalAlignmentWithBaseWritingDirection;
```

<a id="discussion"></a>

## Discussion

When set to `true`, the resolved visual alignment is determined by the resolved base writing direction; otherwise, it is using the user’s preferred language. The default value is `false`.
