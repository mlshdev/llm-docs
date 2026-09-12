> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/audiodriverkit/iouseraudioclockalgorithm/simpleiir](https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/iouseraudioclockalgorithm/simpleiir)

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
