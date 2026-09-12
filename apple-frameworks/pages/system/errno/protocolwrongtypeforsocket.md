> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/protocolwrongtypeforsocket](https://developer.apple.com/documentation/system/errno/protocolwrongtypeforsocket)

# protocolWrongTypeForSocket

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Protocol wrong for socket type.

## Declaration

```swift
static var protocolWrongTypeForSocket: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

A protocol was specified that doesn’t support the semantics of the socket type requested. For example, you can’t use the ARPA Internet UDP protocol with type `SOCK_STREAM`.

The corresponding C error is `EPROTOTYPE`.

## See Also

### Network Protocol Errors

- [protocolError](protocolerror.md): Protocol error.
- [protocolFamilyNotSupported](protocolfamilynotsupported.md): Protocol family not supported.
- [protocolNotAvailable](protocolnotavailable.md): Protocol not available.
- [protocolNotSupported](protocolnotsupported.md): Protocol not supported.
