> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructureusage/preferfastintersection](https://developer.apple.com/documentation/metal/mtlaccelerationstructureusage/preferfastintersection)

# preferFastIntersection (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An option that instructs Metal to prioritize building an acceleration structure with better intersection performance.

## Declaration

```swift
static var preferFastIntersection: MTLAccelerationStructureUsage { get }
```

<a id="discussion"></a>

## Discussion

The acceleration structures you build with this option can increase their build times.

## See Also

### Applying options

- [refit](refit.md): An option that lets you update an acceleration structure after creating it.
- [preferFastBuild](preferfastbuild.md): An option that instructs Metal to build an acceleration structure quickly.
- [minimizeMemory](minimizememory.md): An option that instructs Metal to prioritize building an acceleration structure that needs less memory.
- [extendedLimits](extendedlimits.md): An option that increases an acceleration structure’s storage capacity.

# MTLAccelerationStructureUsagePreferFastIntersection (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An option that instructs Metal to prioritize building an acceleration structure with better intersection performance.

## Declaration

```objectivec
MTLAccelerationStructureUsagePreferFastIntersection
```

<a id="discussion"></a>

## Discussion

The acceleration structures you build with this option can increase their build times.

## See Also

### Applying options

- [MTLAccelerationStructureUsageNone](mtlaccelerationstructureusagenone.md): A sentinel value the represents an empty set of options, which is the default behavior for building new acceleration structures.
- [MTLAccelerationStructureUsageRefit](refit.md): An option that lets you update an acceleration structure after creating it.
- [MTLAccelerationStructureUsagePreferFastBuild](preferfastbuild.md): An option that instructs Metal to build an acceleration structure quickly.
- [MTLAccelerationStructureUsageMinimizeMemory](minimizememory.md): An option that instructs Metal to prioritize building an acceleration structure that needs less memory.
- [MTLAccelerationStructureUsageExtendedLimits](extendedlimits.md): An option that increases an acceleration structure’s storage capacity.
