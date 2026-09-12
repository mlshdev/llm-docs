> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresidencyset/requestresidency()](https://developer.apple.com/documentation/metal/mtlresidencyset/requestresidency())

# requestResidency() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Tells Metal to do as much preparatory work as it can, with the system’s current conditions, to make the set’s resource allocations resident.

## Declaration

```swift
func requestResidency()
```

## Mentioned In

- [Simplifying GPU resource management with residency sets](../simplifying-gpu-resource-management-with-residency-sets.md)

<a id="discussion"></a>

## Discussion

Call the method anytime after calling a residency set’s [commit()](commit%28%29.md) method, ideally well before calling the [commit()](../mtlcommandbuffer/commit%28%29.md) method of any [MTLCommandBuffer](../mtlcommandbuffer.md) that uses it.

The method may postpone some of the necessary steps to make resources resident in scenarios where other apps concurrently need resources in residency.

# requestResidency (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Tells Metal to do as much preparatory work as it can, with the system’s current conditions, to make the set’s resource allocations resident.

## Declaration

```objectivec
- (void) requestResidency;
```

## Mentioned In

- [Simplifying GPU resource management with residency sets](../simplifying-gpu-resource-management-with-residency-sets.md)

<a id="discussion"></a>

## Discussion

Call the method anytime after calling a residency set’s [commit](commit%28%29.md) method, ideally well before calling the [commit](../mtlcommandbuffer/commit%28%29.md) method of any [MTLCommandBuffer](../mtlcommandbuffer.md) that uses it.

The method may postpone some of the necessary steps to make resources resident in scenarios where other apps concurrently need resources in residency.
