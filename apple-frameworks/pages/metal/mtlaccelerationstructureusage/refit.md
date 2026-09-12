> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructureusage/refit](https://developer.apple.com/documentation/metal/mtlaccelerationstructureusage/refit)

# refit (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

An option that lets you update an acceleration structure after creating it.

## Declaration

```swift
static var refit: MTLAccelerationStructureUsage { get }
```

<a id="discussion"></a>

## Discussion

Apply this option to make a modifiable acceleration structure, which you can update over time, such as for geometry changes. By default, the framework builds immutable acceleration structures for performance. When you apply the [refit](refit.md) option, the framework builds an acceleration structure more conservatively, which can reduce its intersection performance.

> **Note**

>  Refitting an acceleration structure generally works better when the geometry changes are relatively small.

## See Also

### Applying options

- [preferFastBuild](preferfastbuild.md): An option that instructs Metal to build an acceleration structure quickly.
- [preferFastIntersection](preferfastintersection.md): An option that instructs Metal to prioritize building an acceleration structure with better intersection performance.
- [minimizeMemory](minimizememory.md): An option that instructs Metal to prioritize building an acceleration structure that needs less memory.
- [extendedLimits](extendedlimits.md): An option that increases an acceleration structure’s storage capacity.

# MTLAccelerationStructureUsageRefit (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

An option that lets you update an acceleration structure after creating it.

## Declaration

```objectivec
MTLAccelerationStructureUsageRefit
```

<a id="discussion"></a>

## Discussion

Apply this option to make a modifiable acceleration structure, which you can update over time, such as for geometry changes. By default, the framework builds immutable acceleration structures for performance. When you apply the [MTLAccelerationStructureUsageRefit](refit.md) option, the framework builds an acceleration structure more conservatively, which can reduce its intersection performance.

> **Note**

>  Refitting an acceleration structure generally works better when the geometry changes are relatively small.

## See Also

### Applying options

- [MTLAccelerationStructureUsageNone](mtlaccelerationstructureusagenone.md): A sentinel value the represents an empty set of options, which is the default behavior for building new acceleration structures.
- [MTLAccelerationStructureUsagePreferFastBuild](preferfastbuild.md): An option that instructs Metal to build an acceleration structure quickly.
- [MTLAccelerationStructureUsagePreferFastIntersection](preferfastintersection.md): An option that instructs Metal to prioritize building an acceleration structure with better intersection performance.
- [MTLAccelerationStructureUsageMinimizeMemory](minimizememory.md): An option that instructs Metal to prioritize building an acceleration structure that needs less memory.
- [MTLAccelerationStructureUsageExtendedLimits](extendedlimits.md): An option that increases an acceleration structure’s storage capacity.
