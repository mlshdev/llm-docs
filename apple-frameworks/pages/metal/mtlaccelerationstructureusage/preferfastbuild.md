> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructureusage/preferfastbuild](https://developer.apple.com/documentation/metal/mtlaccelerationstructureusage/preferfastbuild)

# preferFastBuild (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

An option that instructs Metal to build an acceleration structure quickly.

## Declaration

```swift
static var preferFastBuild: MTLAccelerationStructureUsage { get }
```

<a id="discussion"></a>

## Discussion

Apply this option when you need to reduce the time when creating or refitting an acceleration structure, such as from code that’s sensitive to runtime performance.

> **Note**

>  The acceleration structures you build with this option can reduce their intersection performance.

## See Also

### Applying options

- [refit](refit.md): An option that lets you update an acceleration structure after creating it.
- [preferFastIntersection](preferfastintersection.md): An option that instructs Metal to prioritize building an acceleration structure with better intersection performance.
- [minimizeMemory](minimizememory.md): An option that instructs Metal to prioritize building an acceleration structure that needs less memory.
- [extendedLimits](extendedlimits.md): An option that increases an acceleration structure’s storage capacity.

# MTLAccelerationStructureUsagePreferFastBuild (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

An option that instructs Metal to build an acceleration structure quickly.

## Declaration

```objectivec
MTLAccelerationStructureUsagePreferFastBuild
```

<a id="discussion"></a>

## Discussion

Apply this option when you need to reduce the time when creating or refitting an acceleration structure, such as from code that’s sensitive to runtime performance.

> **Note**

>  The acceleration structures you build with this option can reduce their intersection performance.

## See Also

### Applying options

- [MTLAccelerationStructureUsageNone](mtlaccelerationstructureusagenone.md): A sentinel value the represents an empty set of options, which is the default behavior for building new acceleration structures.
- [MTLAccelerationStructureUsageRefit](refit.md): An option that lets you update an acceleration structure after creating it.
- [MTLAccelerationStructureUsagePreferFastIntersection](preferfastintersection.md): An option that instructs Metal to prioritize building an acceleration structure with better intersection performance.
- [MTLAccelerationStructureUsageMinimizeMemory](minimizememory.md): An option that instructs Metal to prioritize building an acceleration structure that needs less memory.
- [MTLAccelerationStructureUsageExtendedLimits](extendedlimits.md): An option that increases an acceleration structure’s storage capacity.
