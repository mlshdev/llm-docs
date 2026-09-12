> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_iov_buffer_desc_struct/init(type:buffer:)](https://developer.apple.com/documentation/gss/gss_iov_buffer_desc_struct/init(type:buffer:))

# init(type:buffer:)

**Framework:** GSS  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

## Declaration

```swift
init(type: OM_uint32, buffer: gss_buffer_desc)
```

## Parameters

- `type`: The desired IOV buffer type.
- `buffer`: The buffer structure.

<a id="Discussion"></a>

## Discussion

Initialize a new IOV buffer structure with the given configuration.

## See Also

### Initialization

- [init()](init%28%29.md): Initialize a new, empty IOV buffer structure.
