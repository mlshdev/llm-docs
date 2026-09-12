> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/protocolnotavailable](https://developer.apple.com/documentation/system/errno/protocolnotavailable)

# protocolNotAvailable

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Protocol not available.

## Declaration

```swift
static var protocolNotAvailable: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

A bad option or level was specified in a `getsockopt(2)` or `setsockopt(2)` call.

The corresponding C error is `ENOPROTOOPT`.

## See Also

### Network Protocol Errors

- [protocolError](protocolerror.md): Protocol error.
- [protocolFamilyNotSupported](protocolfamilynotsupported.md): Protocol family not supported.
- [protocolNotSupported](protocolnotsupported.md): Protocol not supported.
- [protocolWrongTypeForSocket](protocolwrongtypeforsocket.md): Protocol wrong for socket type.
