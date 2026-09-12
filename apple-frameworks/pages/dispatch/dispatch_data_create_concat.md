> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_data_create_concat](https://developer.apple.com/documentation/dispatch/dispatch_data_create_concat)

# dispatch_data_create_concat

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a new dispatch data object consisting of the concatenated data from two other data objects.

## Declaration

```objectivec
extern dispatch_data_tdispatch_data_create_concat(dispatch_data_t data1, dispatch_data_t data2);
```

## Parameters

- `data1`: The first data object to include. The memory from this object is placed at the beginning of the new data object’s memory region.
- `data2`: The second data object to include. The memory from this object is added to the end of the memory from `data1`.

<a id="return-value"></a>

## Return Value

A new dispatch data object containing the concatenated memory.

<a id="Discussion"></a>

## Discussion

After calling this function, it is safe to release either of the objects in `data1` or `data2`. However, be aware that the memory from those objects may not be deallocated if the newly created dispatch data object references it, as opposed to copies it.

## See Also

### Creating a Dispatch Data Object

- [dispatch_data_create](dispatch_data_create.md): Creates a new dispatch data object with the specified memory buffer.
- [dispatch_data_create_map](dispatch_data_create_map.md): Returns a new dispatch data object containing a contiguous representation of the specified object’s memory.
- [dispatch_data_create_subrange](dispatch_data_create_subrange.md): Returns a new dispatch data object whose contents consist of a portion of another object’s memory region.
- [dispatch_data_copy_region](dispatch_data_copy_region.md): Returns a data object containing a portion of the data in another data object.
- [dispatch_data_empty](dispatch_data_empty.md): A dispatch data object representing a zero-length memory region.
- [dispatch_data_t](dispatch_data_t.md): An immutable object representing a contiguous or sparse region of memory.
- [OS_dispatch_data](os_dispatch_data.md)
- [DISPATCH_DATA_DESTRUCTOR_DEFAULT](dispatch_data_destructor_default.md): The default data destructor for dispatch objects.
- [DISPATCH_DATA_DESTRUCTOR_FREE](dispatch_data_destructor_free.md): The destructor for dispatch data objects whose memory buffer was created using the malloc family of allocation routines.
