> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nsstringdrawingoptions/optionsresolvesnaturalalignmentwithbasewritingdirection

# optionsResolvesNaturalAlignmentWithBaseWritingDirection (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Specifies the behavior for resolving [NSTextAlignment.natural](../nstextalignment/natural.md) to the visual alignment.

## Declaration

```swift
static var optionsResolvesNaturalAlignmentWithBaseWritingDirection: NSStringDrawingOptions { get }
```

<a id="discussion"></a>

## Discussion

When set, the resolved visual alignment is determined by the resolved base writing direction; otherwise, it is using the user’s preferred language.

# NSStringDrawingOptionsResolvesNaturalAlignmentWithBaseWritingDirection (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Specifies the behavior for resolving [NSTextAlignmentNatural](../nstextalignment/natural.md) to the visual alignment.

## Declaration

```objectivec
NSStringDrawingOptionsResolvesNaturalAlignmentWithBaseWritingDirection
```

<a id="discussion"></a>

## Discussion

When set, the resolved visual alignment is determined by the resolved base writing direction; otherwise, it is using the user’s preferred language.
