> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstringdrawingoptions/nsstringdrawingoptionsresolvesnaturalalignmentwithbasewritingdirection](https://developer.apple.com/documentation/appkit/nsstringdrawingoptions/nsstringdrawingoptionsresolvesnaturalalignmentwithbasewritingdirection)

# NSStringDrawingOptionsResolvesNaturalAlignmentWithBaseWritingDirection

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 26.0+

Specifies the behavior for resolving [NSTextAlignmentNatural](../nstextalignment/natural.md) to the visual alignment.

## Declaration

```objectivec
NSStringDrawingOptionsResolvesNaturalAlignmentWithBaseWritingDirection
```

<a id="discussion"></a>

## Discussion

When set, the resolved visual alignment is determined by the resolved base writing direction; otherwise, it is using the user’s preferred language.
