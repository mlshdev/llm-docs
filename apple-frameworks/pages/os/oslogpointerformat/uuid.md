> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslogpointerformat/uuid](https://developer.apple.com/documentation/os/oslogpointerformat/uuid)

# OSLogPointerFormat.uuid

**Framework:** os  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

An option to display the pointer bytes as a formatted UUID.

## Declaration

```swift
case uuid
```

<a id="Discussion"></a>

## Discussion

This option prints an easily readable [uuid_t](https://developer.apple.com/documentation/kernel/uuid_t) type.

## See Also

### Getting the Format Options

- [OSLogPointerFormat.none](none.md): An option to treat the pointer as raw bytes, and not format it.
- [OSLogPointerFormat.ipv6Address](ipv6address.md): An option to display the pointer bytes as an IPv6 network address.
- [OSLogPointerFormat.sockaddr](sockaddr.md): An option to display the pointer bytes as a socket address.
- [OSLogPointerFormat.timespec](timespec.md): An option to display the pointer bytes as a time specification.
- [OSLogPointerFormat.timeval](timeval.md): An option to display the pointer bytes as a time value.
