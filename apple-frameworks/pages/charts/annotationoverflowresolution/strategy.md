> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/charts/annotationoverflowresolution/strategy

# AnnotationOverflowResolution.Strategy

**Framework:** Swift Charts  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Strategies for annotation overflow resolution.

## Declaration

```swift
struct Strategy
```

## Topics

### Type Properties

- [automatic](strategy/automatic.md): Automatically chooses a overflow resolution.
- [disabled](strategy/disabled.md): Places the annotation “as-is”.
- [fit](strategy/fit.md): Fits the annotation automatically, adjusting its position to ensure it doesn’t overflow.
- [padScale](strategy/padscale.md): Pads the scale of the chart to make space for the annotation.

### Type Methods

- [fit(to:)](strategy/fit%28to_%29.md): Fits the annotation to the given boundary, adjusting its position to ensure it doesn’t overflow.
