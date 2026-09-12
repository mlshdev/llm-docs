> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_release_buffer(_:_:)](https://developer.apple.com/documentation/gss/gss_release_buffer(_:_:))

# gss_release_buffer(\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Frees the memory associated with a single buffer descriptor.

## Declaration

```swift
func gss_release_buffer(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ buffer: gss_buffer_t) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `buffer`: The buffer reference that is to be removed from memory.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on completion.

## See Also

### Allocation and Deallocation

- [gss_create_empty_buffer_set(\_:\_:)](gss_create_empty_buffer_set%28____%29.md): Allocates an empty buffer set descriptor that you use to manage an array of buffers.
- [gss_add_buffer_set_member(\_:\_:\_:)](gss_add_buffer_set_member%28______%29.md): Copies the contents of a buffer into a buffer set.
- [gss_release_buffer_set(\_:\_:)](gss_release_buffer_set%28____%29.md): Frees the memory associated with a buffer set descriptor and all the buffers it contains.

# gss_release_buffer (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Frees the memory associated with a single buffer descriptor.

## Declaration

```objectivec
OM_uint32 gss_release_buffer(OM_uint32 *minor_status, gss_buffer_t buffer);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `buffer`: The buffer reference that is to be removed from memory.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on completion.

## See Also

### Allocation and Deallocation

- [gss_create_empty_buffer_set](gss_create_empty_buffer_set%28____%29.md): Allocates an empty buffer set descriptor that you use to manage an array of buffers.
- [gss_add_buffer_set_member](gss_add_buffer_set_member%28______%29.md): Copies the contents of a buffer into a buffer set.
- [gss_release_buffer_set](gss_release_buffer_set%28____%29.md): Frees the memory associated with a buffer set descriptor and all the buffers it contains.
