> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/protocolerror](https://developer.apple.com/documentation/system/errno/protocolerror)

# protocolError

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Protocol error.

## Declaration

```swift
static var protocolError: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

Some protocol error occurred. This error is device-specific, but generally isn’t related to a hardware failure.

The corresponding C error is `EPROTO`.

## See Also

### Network Protocol Errors

- [protocolFamilyNotSupported](protocolfamilynotsupported.md): Protocol family not supported.
- [protocolNotAvailable](protocolnotavailable.md): Protocol not available.
- [protocolNotSupported](protocolnotsupported.md): Protocol not supported.
- [protocolWrongTypeForSocket](protocolwrongtypeforsocket.md): Protocol wrong for socket type.
