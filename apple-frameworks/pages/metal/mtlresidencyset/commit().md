> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlresidencyset/commit()

# commit() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Applies any pending additions to and removals from the residency set.

## Declaration

```swift
func commit()
```

## Mentioned In

- [Simplifying GPU resource management with residency sets](../simplifying-gpu-resource-management-with-residency-sets.md)

<a id="discussion"></a>

## Discussion

Call the method when have no other changes to stage, such as with [addAllocation(\_:)](addallocation%28__%29.md), [removeAllocation(\_:)](removeallocation%28__%29.md), and their sibling methods.

# commit (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Applies any pending additions to and removals from the residency set.

## Declaration

```objectivec
- (void) commit;
```

## Mentioned In

- [Simplifying GPU resource management with residency sets](../simplifying-gpu-resource-management-with-residency-sets.md)

<a id="discussion"></a>

## Discussion

Call the method when have no other changes to stage, such as with [addAllocation:](addallocation%28__%29.md), [removeAllocation:](removeallocation%28__%29.md), and their sibling methods.
