> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_buffer_set_desc_struct/init(count:elements:)](https://developer.apple.com/documentation/gss/gss_buffer_set_desc_struct/init(count:elements:))

# init(count:elements:)

**Framework:** GSS  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

Initialize a new buffer set with the given buffers.

## Declaration

```swift
init(count: Int, elements: UnsafeMutablePointer<gss_buffer_desc>!)
```

## Parameters

- `count`: The number of buffers in the `elements` array.
- `elements`: An array of buffers to be included in the new set.

## See Also

### Initialization

- [init()](init%28%29.md): Initialize a new, empty buffer set.
