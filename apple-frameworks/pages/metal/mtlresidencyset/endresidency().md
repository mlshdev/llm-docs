> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresidencyset/endresidency()](https://developer.apple.com/documentation/metal/mtlresidencyset/endresidency())

# endResidency() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Informs Metal that the residency set’s allocations no longer need to be resident, and that it can reuse the memory for other allocations.

## Declaration

```swift
func endResidency()
```

## Mentioned In

- [Simplifying GPU resource management with residency sets](../simplifying-gpu-resource-management-with-residency-sets.md)

# endResidency (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Informs Metal that the residency set’s allocations no longer need to be resident, and that it can reuse the memory for other allocations.

## Declaration

```objectivec
- (void) endResidency;
```

## Mentioned In

- [Simplifying GPU resource management with residency sets](../simplifying-gpu-resource-management-with-residency-sets.md)
