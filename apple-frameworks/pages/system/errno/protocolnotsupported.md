> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/protocolnotsupported](https://developer.apple.com/documentation/system/errno/protocolnotsupported)

# protocolNotSupported

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Protocol not supported.

## Declaration

```swift
static var protocolNotSupported: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

The protocol hasn’t been configured into the system, or no implementation for it exists.

The corresponding C error is `EPROTONOSUPPORT`.

## See Also

### Network Protocol Errors

- [protocolError](protocolerror.md): Protocol error.
- [protocolFamilyNotSupported](protocolfamilynotsupported.md): Protocol family not supported.
- [protocolNotAvailable](protocolnotavailable.md): Protocol not available.
- [protocolWrongTypeForSocket](protocolwrongtypeforsocket.md): Protocol wrong for socket type.
