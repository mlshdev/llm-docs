> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimpactfeedbackgenerator/impactoccurred(intensity:)](https://developer.apple.com/documentation/uikit/uiimpactfeedbackgenerator/impactoccurred(intensity:))

# impactOccurred(intensity:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Triggers impact feedback with a specific intensity.

## Declaration

```swift
func impactOccurred(intensity: CGFloat)
```

## Parameters

- `intensity`: A [CGFloat](../../corefoundation/cgfloat-swift.struct.md) value between `0.0` and `1.0`.

## See Also

### Reporting impacts

- [impactOccurred()](impactoccurred%28%29.md): Triggers impact feedback.
- [impactOccurred(at:)](impactoccurred%28at_%29.md): Triggers impact feedback at the specified location.
- [impactOccurred(intensity:at:)](impactoccurred%28intensity_at_%29.md): Triggers impact feedback with a specific intensity at the specified location.

# impactOccurredWithIntensity: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Triggers impact feedback with a specific intensity.

## Declaration

```objectivec
- (void) impactOccurredWithIntensity:(CGFloat) intensity;
```

## Parameters

- `intensity`: A [CGFloat](../../corefoundation/cgfloat-swift.struct.md) value between `0.0` and `1.0`.

## See Also

### Reporting impacts

- [impactOccurred](impactoccurred%28%29.md): Triggers impact feedback.
- [impactOccurredAtLocation:](impactoccurred%28at_%29.md): Triggers impact feedback at the specified location.
- [impactOccurredWithIntensity:atLocation:](impactoccurred%28intensity_at_%29.md): Triggers impact feedback with a specific intensity at the specified location.
