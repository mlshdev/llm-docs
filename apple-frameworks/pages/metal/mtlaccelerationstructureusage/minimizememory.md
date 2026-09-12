> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructureusage/minimizememory](https://developer.apple.com/documentation/metal/mtlaccelerationstructureusage/minimizememory)

# minimizeMemory (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An option that instructs Metal to prioritize building an acceleration structure that needs less memory.

## Declaration

```swift
static var minimizeMemory: MTLAccelerationStructureUsage { get }
```

<a id="discussion"></a>

## Discussion

The acceleration structures you build with this option can increase their build times and can reduce their intersection performance.

## See Also

### Applying options

- [refit](refit.md): An option that lets you update an acceleration structure after creating it.
- [preferFastBuild](preferfastbuild.md): An option that instructs Metal to build an acceleration structure quickly.
- [preferFastIntersection](preferfastintersection.md): An option that instructs Metal to prioritize building an acceleration structure with better intersection performance.
- [extendedLimits](extendedlimits.md): An option that increases an acceleration structure’s storage capacity.

# MTLAccelerationStructureUsageMinimizeMemory (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An option that instructs Metal to prioritize building an acceleration structure that needs less memory.

## Declaration

```objectivec
MTLAccelerationStructureUsageMinimizeMemory
```

<a id="discussion"></a>

## Discussion

The acceleration structures you build with this option can increase their build times and can reduce their intersection performance.

## See Also

### Applying options

- [MTLAccelerationStructureUsageNone](mtlaccelerationstructureusagenone.md): A sentinel value the represents an empty set of options, which is the default behavior for building new acceleration structures.
- [MTLAccelerationStructureUsageRefit](refit.md): An option that lets you update an acceleration structure after creating it.
- [MTLAccelerationStructureUsagePreferFastBuild](preferfastbuild.md): An option that instructs Metal to build an acceleration structure quickly.
- [MTLAccelerationStructureUsagePreferFastIntersection](preferfastintersection.md): An option that instructs Metal to prioritize building an acceleration structure with better intersection performance.
- [MTLAccelerationStructureUsageExtendedLimits](extendedlimits.md): An option that increases an acceleration structure’s storage capacity.
