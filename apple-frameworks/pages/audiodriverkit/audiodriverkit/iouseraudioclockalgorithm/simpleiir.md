> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/iouseraudioclockalgorithm/simpleiir

# SimpleIIR

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 21.0+

The simple IIR filter algorithm.

## Declaration

```objectivec
SimpleIIR
```

<a id="Discussion"></a>

## Discussion

Under this algorithm, the Host applies a simple IIR filter to the time stamp stream. This is the default algorithm used for devices that don’t implement `DevicePropertyClockAlgorithm`.

## See Also

### Clock-Smoothing Algorithms

- [Raw](raw.md): An algorithm that uses timestamp values as-is.
- [TwelvePtMovingWindowAverage](twelveptmovingwindowaverage.md): The 12-point moving window average filter algorithm.
