> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_data_apply](https://developer.apple.com/documentation/dispatch/dispatch_data_apply)

# dispatch_data_apply

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Traverses the memory of a dispatch data object and executes custom code on each region.

## Declaration

```objectivec
extern bool dispatch_data_apply(dispatch_data_t data, dispatch_data_applier_t applier);
```

## Parameters

- `data`: The dispatch object whose memory you want to use.
- `applier`: The block to run on each contiguous memory region of `data`.

<a id="return-value"></a>

## Return Value

A Boolean indicating whether the traversal completed successfully. Typically, this value is `true` if the applier block was executed on all of the regions or there was nothing to traverse. If it is `false`, it means the block terminated the traversal early.

<a id="Discussion"></a>

## Discussion

For each contiguous memory region, this function creates a temporary dispatch data object and passes it to the specified applier function. This new object, plus the other parameters to the block, provide direct access to the specific memory region being examined. Once the applier block returns, the temporary dispatch data object is released. (The original object in the `data` parameter is not touched.)

> **Note**

>  If the dispatch data object has zero length, the applier block is not called.

## See Also

### Applying Changes to the Data

- [dispatch_data_applier_t](dispatch_data_applier_t.md): A block to invoke for every contiguous memory region in a data object.
