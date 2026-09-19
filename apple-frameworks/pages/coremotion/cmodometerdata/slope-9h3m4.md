> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremotion/cmodometerdata/slope-9h3m4

# slope

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 10.0+

The slope at the location toward the direction of travel, measured in degrees.

## Declaration

```swift
var slope: Double? { get }
```

<a id="Discussion"></a>

## Discussion

If the slope measurement is invalid, this property is [nil](../../objectivec/nil-227m0.md).

## See Also

### Getting speed and slope

- [speed](speed.md): The instantaneous velocity of the device, measured in meters per second.
- [maxAbsSlope](maxabsslope-9mnfd.md): The maximum absolute slope at the location toward all directions, measured in degrees.
