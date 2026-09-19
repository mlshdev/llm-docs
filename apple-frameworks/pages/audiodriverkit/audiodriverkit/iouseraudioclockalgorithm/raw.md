> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiodriverkit/audiodriverkit/iouseraudioclockalgorithm/raw

# Raw

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 21.0+

An algorithm that uses timestamp values as-is.

## Declaration

```objectivec
Raw
```

<a id="Discussion"></a>

## Discussion

Under this algorithm, the Host doesn’t apply any filtering to the time stamps returned from [GetCurrentZeroTimestamp](../../iouseraudioclockdevice/getcurrentzerotimestamp.md).

## See Also

### Clock-Smoothing Algorithms

- [SimpleIIR](simpleiir.md): The simple IIR filter algorithm.
- [TwelvePtMovingWindowAverage](twelveptmovingwindowaverage.md): The 12-point moving window average filter algorithm.
