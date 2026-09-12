> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4renderpassdescriptor/setsamplepositions:count:](https://developer.apple.com/documentation/metal/mtl4renderpassdescriptor/setsamplepositions:count:)

# setSamplePositions:count:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the custom sample positions to use in MSAA rendering.

## Declaration

```objectivec
- (void) setSamplePositions:(const MTLSamplePosition *) positions count:(NSUInteger) count;
```

## Parameters

- `positions`: Array of [MTLSamplePosition](../mtlsampleposition.md) instances.
- `count`: Number of [MTLSamplePosition](../mtlsampleposition.md) instances in the array. This value needs to be a valid sample count, or `0` to disable custom sample positions.
