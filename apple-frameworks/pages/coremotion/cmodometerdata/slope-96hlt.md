> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmodometerdata/slope-96hlt](https://developer.apple.com/documentation/coremotion/cmodometerdata/slope-96hlt)

# slope

**Interface language:** Objective-C

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 10.0+

The slope at the location toward the direction of travel, measured in degrees.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSNumber * slope;
```

<a id="Discussion"></a>

## Discussion

If the slope is invalid, this property is [nil](../../objectivec/nil-227m0.md).

## See Also

### Getting speed and slope

- [speed](speed.md): The instantaneous velocity of the device, measured in meters per second.
- [maxAbsSlope](maxabsslope-96ulr.md): The maximum absolute slope at the location toward all directions, measured in degrees.
