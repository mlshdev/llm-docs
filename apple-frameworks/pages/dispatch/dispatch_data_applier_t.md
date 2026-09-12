> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_data_applier_t](https://developer.apple.com/documentation/dispatch/dispatch_data_applier_t)

# dispatch_data_applier_t

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A block to invoke for every contiguous memory region in a data object.

## Declaration

```objectivec
typedef _Bool (^)(NSObject<OS_dispatch_data> *, unsigned long, const void *, unsigned long) dispatch_data_applier_t;
```

<a id="Discussion"></a>

## Discussion

The parameters of a dispatch data applier block are as follows:

- `region` \- A data object containing the current memory region being analyzed.
- `offset` \- The logical offset to the current region from the start of the data object.
- `buffer` \- A pointer to the memory for the current region.
- `size` \- The size of the memory for the current region.

This handler returns a Boolean value indicating whether traversal of the region should continue.

## See Also

### Applying Changes to the Data

- [dispatch_data_apply](dispatch_data_apply.md): Traverses the memory of a dispatch data object and executes custom code on each region.
