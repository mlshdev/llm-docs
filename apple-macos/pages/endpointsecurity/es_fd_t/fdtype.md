> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_fd_t/fdtype](https://developer.apple.com/documentation/endpointsecurity/es_fd_t/fdtype)

# fdtype (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file descriptor type, as a libproc type.

## Declaration

```swift
var fdtype: UInt32
```

<a id="Discussion"></a>

## Discussion

If this value is `PROX_FDTYPE_PIPE`, the [es_fd_t](../es_fd_t.md) structure also contains a `pipe.pipe_id` field. This field represents the unique ID of the pipe for correlation with other file descriptors pointing to the same or other end of the same pipe.

## See Also

### Inspecting File Descriptor Properties

- [fd](fd.md): The file descriptor number.

# fdtype (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file descriptor type, as a libproc type.

## Declaration

```objectivec
uint32_t fdtype;
```

<a id="Discussion"></a>

## Discussion

If this value is `PROX_FDTYPE_PIPE`, the [es_fd_t](../es_fd_t.md) structure also contains a `pipe.pipe_id` field. This field represents the unique ID of the pipe for correlation with other file descriptors pointing to the same or other end of the same pipe.

## See Also

### Inspecting File Descriptor Properties

- [fd](fd.md): The file descriptor number.
