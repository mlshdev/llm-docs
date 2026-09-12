> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_create_empty_buffer_set(_:_:)](https://developer.apple.com/documentation/gss/gss_create_empty_buffer_set(_:_:))

# gss_create_empty_buffer_set(\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Allocates an empty buffer set descriptor that you use to manage an array of buffers.

## Declaration

```swift
func gss_create_empty_buffer_set(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ buffer_set: UnsafeMutablePointer<gss_buffer_set_t?>) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure. Typically, a failure results from an inability to allocate memory which is communicated by the minor status [ENOMEM](../foundation/posixerror/enomem.md).
- `buffer_set`: A pointer to a buffer set descriptor reference. When the function successfully allocates a buffer set descriptor, it sets the reference to point at it. The descriptor itself is initialized with zero length and a `NULL` pointer.

  On failure, the reference is unchanged.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success, or [GSS_S_FAILURE](gss_s_failure.md) otherwise. Inspect the `minor_status` parameter for additional information on failure.

## Mentioned In

- [Allocating and Releasing Objects](allocating-and-releasing-objects.md)

<a id="Discussion"></a>

## Discussion

This function allocates memory for the data structure that you use to manage an array of buffers, consisting of a length parameter and a pointer. It does not allocate memory for any actual buffers.

When you’re done with the buffer set descriptor created by this function, call [gss_release_buffer_set(\_:\_:)](gss_release_buffer_set%28____%29.md) to free its memory, as well as that of any buffers it contains at that time.

## See Also

### Allocation and Deallocation

- [gss_add_buffer_set_member(\_:\_:\_:)](gss_add_buffer_set_member%28______%29.md): Copies the contents of a buffer into a buffer set.
- [gss_release_buffer(\_:\_:)](gss_release_buffer%28____%29.md): Frees the memory associated with a single buffer descriptor.
- [gss_release_buffer_set(\_:\_:)](gss_release_buffer_set%28____%29.md): Frees the memory associated with a buffer set descriptor and all the buffers it contains.

# gss_create_empty_buffer_set (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Allocates an empty buffer set descriptor that you use to manage an array of buffers.

## Declaration

```objectivec
OM_uint32 gss_create_empty_buffer_set(OM_uint32 *minor_status, gss_buffer_set_t*buffer_set);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure. Typically, a failure results from an inability to allocate memory which is communicated by the minor status [ENOMEM](../foundation/posixerror/enomem.md).
- `buffer_set`: A pointer to a buffer set descriptor reference. When the function successfully allocates a buffer set descriptor, it sets the reference to point at it. The descriptor itself is initialized with zero length and a `NULL` pointer.

  On failure, the reference is unchanged.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success, or [GSS_S_FAILURE](gss_s_failure.md) otherwise. Inspect the `minor_status` parameter for additional information on failure.

## Mentioned In

- [Allocating and Releasing Objects](allocating-and-releasing-objects.md)

<a id="Discussion"></a>

## Discussion

This function allocates memory for the data structure that you use to manage an array of buffers, consisting of a length parameter and a pointer. It does not allocate memory for any actual buffers.

When you’re done with the buffer set descriptor created by this function, call [gss_release_buffer_set](gss_release_buffer_set%28____%29.md) to free its memory, as well as that of any buffers it contains at that time.

## See Also

### Allocation and Deallocation

- [gss_add_buffer_set_member](gss_add_buffer_set_member%28______%29.md): Copies the contents of a buffer into a buffer set.
- [gss_release_buffer](gss_release_buffer%28____%29.md): Frees the memory associated with a single buffer descriptor.
- [gss_release_buffer_set](gss_release_buffer_set%28____%29.md): Frees the memory associated with a buffer set descriptor and all the buffers it contains.
