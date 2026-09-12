> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/protocolfamilynotsupported](https://developer.apple.com/documentation/system/errno/protocolfamilynotsupported)

# protocolFamilyNotSupported

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Protocol family not supported.

## Declaration

```swift
static var protocolFamilyNotSupported: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

The protocol family hasn’t been configured into the system or no implementation for it exists.

The corresponding C error is `EPFNOSUPPORT`.

## See Also

### Network Protocol Errors

- [protocolError](protocolerror.md): Protocol error.
- [protocolNotAvailable](protocolnotavailable.md): Protocol not available.
- [protocolNotSupported](protocolnotsupported.md): Protocol not supported.
- [protocolWrongTypeForSocket](protocolwrongtypeforsocket.md): Protocol wrong for socket type.
