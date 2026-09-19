> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cggradientdrawingoptions/drawsbeforestartlocation

# drawsBeforeStartLocation (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The fill should extend beyond the starting location. The color that extends beyond the starting point is the solid color defined by the [CGGradient](../cggradient.md) object to be at location 0.

## Declaration

```swift
static var drawsBeforeStartLocation: CGGradientDrawingOptions { get }
```

## See Also

### Constants

- [drawsAfterEndLocation](drawsafterendlocation.md): The fill should extend beyond the ending location. The color that extends beyond the ending point is the solid color defined by the [CGGradient](../cggradient.md) object to be at location 1.

# kCGGradientDrawsBeforeStartLocation (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The fill should extend beyond the starting location. The color that extends beyond the starting point is the solid color defined by the [CGGradientRef](../cggradient.md) object to be at location 0.

## Declaration

```objectivec
kCGGradientDrawsBeforeStartLocation
```

## See Also

### Constants

- [kCGGradientDrawsAfterEndLocation](drawsafterendlocation.md): The fill should extend beyond the ending location. The color that extends beyond the ending point is the solid color defined by the [CGGradientRef](../cggradient.md) object to be at location 1.
