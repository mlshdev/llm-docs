> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructureusage/extendedlimits](https://developer.apple.com/documentation/metal/mtlaccelerationstructureusage/extendedlimits)

# extendedLimits (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

An option that increases an acceleration structure’s storage capacity.

## Declaration

```swift
static var extendedLimits: MTLAccelerationStructureUsage { get }
```

<a id="discussion"></a>

## Discussion

The acceleration structures you build with this option can affect their performance because they support more data complexity.

|  | Standard limits | Extended limits |
| --- | --- | --- |
| Primitives in primitive acceleration structure | `2^(28)` | `2^(30)` |
| Geometries in primitive acceleration structure | `2^(24)` | `2^(30)` |
| Instances in instance acceleration structure | `2^(24)` | `2^(30)` |
| Visibility mask bits | `8` | `32` |

## See Also

### Applying options

- [refit](refit.md): An option that lets you update an acceleration structure after creating it.
- [preferFastBuild](preferfastbuild.md): An option that instructs Metal to build an acceleration structure quickly.
- [preferFastIntersection](preferfastintersection.md): An option that instructs Metal to prioritize building an acceleration structure with better intersection performance.
- [minimizeMemory](minimizememory.md): An option that instructs Metal to prioritize building an acceleration structure that needs less memory.

# MTLAccelerationStructureUsageExtendedLimits (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

An option that increases an acceleration structure’s storage capacity.

## Declaration

```objectivec
MTLAccelerationStructureUsageExtendedLimits
```

<a id="discussion"></a>

## Discussion

The acceleration structures you build with this option can affect their performance because they support more data complexity.

|  | Standard limits | Extended limits |
| --- | --- | --- |
| Primitives in primitive acceleration structure | `2^(28)` | `2^(30)` |
| Geometries in primitive acceleration structure | `2^(24)` | `2^(30)` |
| Instances in instance acceleration structure | `2^(24)` | `2^(30)` |
| Visibility mask bits | `8` | `32` |

## See Also

### Applying options

- [MTLAccelerationStructureUsageNone](mtlaccelerationstructureusagenone.md): A sentinel value the represents an empty set of options, which is the default behavior for building new acceleration structures.
- [MTLAccelerationStructureUsageRefit](refit.md): An option that lets you update an acceleration structure after creating it.
- [MTLAccelerationStructureUsagePreferFastBuild](preferfastbuild.md): An option that instructs Metal to build an acceleration structure quickly.
- [MTLAccelerationStructureUsagePreferFastIntersection](preferfastintersection.md): An option that instructs Metal to prioritize building an acceleration structure with better intersection performance.
- [MTLAccelerationStructureUsageMinimizeMemory](minimizememory.md): An option that instructs Metal to prioritize building an acceleration structure that needs less memory.
