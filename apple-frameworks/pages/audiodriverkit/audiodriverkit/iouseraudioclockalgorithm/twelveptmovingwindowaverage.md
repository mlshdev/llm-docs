> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/audiodriverkit/iouseraudioclockalgorithm/twelveptmovingwindowaverage](https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/iouseraudioclockalgorithm/twelveptmovingwindowaverage)

# TwelvePtMovingWindowAverage

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 21.0+

The 12-point moving window average filter algorithm.

## Declaration

```objectivec
TwelvePtMovingWindowAverage
```

<a id="Discussion"></a>

## Discussion

Under this algorithm, the Host applies 12 point moving window average filter to the time stamps returned from [GetCurrentZeroTimestamp](../../iouseraudioclockdevice/getcurrentzerotimestamp.md).

## See Also

### Clock-Smoothing Algorithms

- [Raw](raw.md): An algorithm that uses timestamp values as-is.
- [SimpleIIR](simpleiir.md): The simple IIR filter algorithm.
