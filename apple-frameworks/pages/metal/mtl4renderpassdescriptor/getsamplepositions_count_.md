> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4renderpassdescriptor/getsamplepositions:count:](https://developer.apple.com/documentation/metal/mtl4renderpassdescriptor/getsamplepositions:count:)

# getSamplePositions:count:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Retrieves the previously-configured custom sample positions.

## Declaration

```objectivec
- (NSUInteger) getSamplePositions:(MTLSamplePosition *) positions count:(NSUInteger) count;
```

## Parameters

- `positions`: The destination array where Metal stores [MTLSamplePosition](../mtlsampleposition.md) instances.
- `count`: Number of [MTLSamplePosition](../mtlsampleposition.md) instances in the array. This array needs to be large enough to store all sample positions.

<a id="return-value"></a>

## Return Value

The number of previously-configured custom sample positions.

<a id="discussion"></a>

## Discussion

This method stores the app’s last set custom sample positions into an output array. Metal only modifies the array when the `count` parameter consists of a length sufficient to store the number of sample positions.
