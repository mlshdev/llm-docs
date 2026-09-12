> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructureusage/mtlaccelerationstructureusagenone](https://developer.apple.com/documentation/metal/mtlaccelerationstructureusage/mtlaccelerationstructureusagenone)

# MTLAccelerationStructureUsageNone

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A sentinel value the represents an empty set of options, which is the default behavior for building new acceleration structures.

## Declaration

```objectivec
MTLAccelerationStructureUsageNone
```

## See Also

### Applying options

- [MTLAccelerationStructureUsageRefit](refit.md): An option that lets you update an acceleration structure after creating it.
- [MTLAccelerationStructureUsagePreferFastBuild](preferfastbuild.md): An option that instructs Metal to build an acceleration structure quickly.
- [MTLAccelerationStructureUsagePreferFastIntersection](preferfastintersection.md): An option that instructs Metal to prioritize building an acceleration structure with better intersection performance.
- [MTLAccelerationStructureUsageMinimizeMemory](minimizememory.md): An option that instructs Metal to prioritize building an acceleration structure that needs less memory.
- [MTLAccelerationStructureUsageExtendedLimits](extendedlimits.md): An option that increases an acceleration structure’s storage capacity.
