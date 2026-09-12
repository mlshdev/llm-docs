> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_release_buffer_set(_:_:)](https://developer.apple.com/documentation/gss/gss_release_buffer_set(_:_:))

# gss_release_buffer_set(\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Frees the memory associated with a buffer set descriptor and all the buffers it contains.

## Declaration

```swift
func gss_release_buffer_set(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ buffer_set: UnsafeMutablePointer<gss_buffer_set_t?>) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `buffer_set`: A pointer to the buffer set descriptor reference that you want to free.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on completion.

## Mentioned In

- [Allocating and Releasing Objects](allocating-and-releasing-objects.md)

<a id="Discussion"></a>

## Discussion

This call frees the memory of all of the buffers that the buffer set contains, as well as the buffer set descriptor itself. Use this function when you’re done with a buffer set that you created with [gss_create_empty_buffer_set(\_:\_:)](gss_create_empty_buffer_set%28____%29.md), or created on your behalf by [gss_add_buffer_set_member(\_:\_:\_:)](gss_add_buffer_set_member%28______%29.md).

## See Also

### Allocation and Deallocation

- [gss_create_empty_buffer_set(\_:\_:)](gss_create_empty_buffer_set%28____%29.md): Allocates an empty buffer set descriptor that you use to manage an array of buffers.
- [gss_add_buffer_set_member(\_:\_:\_:)](gss_add_buffer_set_member%28______%29.md): Copies the contents of a buffer into a buffer set.
- [gss_release_buffer(\_:\_:)](gss_release_buffer%28____%29.md): Frees the memory associated with a single buffer descriptor.

# gss_release_buffer_set (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Frees the memory associated with a buffer set descriptor and all the buffers it contains.

## Declaration

```objectivec
OM_uint32 gss_release_buffer_set(OM_uint32 *minor_status, gss_buffer_set_t*buffer_set);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `buffer_set`: A pointer to the buffer set descriptor reference that you want to free.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on completion.

## Mentioned In

- [Allocating and Releasing Objects](allocating-and-releasing-objects.md)

<a id="Discussion"></a>

## Discussion

This call frees the memory of all of the buffers that the buffer set contains, as well as the buffer set descriptor itself. Use this function when you’re done with a buffer set that you created with [gss_create_empty_buffer_set](gss_create_empty_buffer_set%28____%29.md), or created on your behalf by [gss_add_buffer_set_member](gss_add_buffer_set_member%28______%29.md).

## See Also

### Allocation and Deallocation

- [gss_create_empty_buffer_set](gss_create_empty_buffer_set%28____%29.md): Allocates an empty buffer set descriptor that you use to manage an array of buffers.
- [gss_add_buffer_set_member](gss_add_buffer_set_member%28______%29.md): Copies the contents of a buffer into a buffer set.
- [gss_release_buffer](gss_release_buffer%28____%29.md): Frees the memory associated with a single buffer descriptor.
