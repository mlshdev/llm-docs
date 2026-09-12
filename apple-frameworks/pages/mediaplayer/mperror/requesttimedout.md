> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mperror/requesttimedout](https://developer.apple.com/documentation/mediaplayer/mperror/requesttimedout)

# requestTimedOut

**Framework:** Media Player  
**Kind:** Type Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · macOS 10.14.2+ · tvOS 10.3+ · visionOS 1.0+ · watchOS 5.0+

The requested operation times out.

## Declaration

```swift
static var requestTimedOut: MPError.Code { get }
```

## See Also

### Error code constants

- [cancelled](cancelled.md): The system cancels the requested operation before it completes.
- [cloudServiceCapabilityMissing](cloudservicecapabilitymissing.md): The operation can’t complete because iCloud services aren’t in an enabled state.
- [unknown](unknown.md): The requested operation can’t complete due to an unknown error.
- [networkConnectionFailed](networkconnectionfailed.md): The operation fails because the device can’t connect to the network.
- [notFound](notfound.md): The operation fails because the system can’t find the requested identifier in the current storefront.
- [notSupported](notsupported.md): The requested operation fails because the system doesn’t support it.
- [permissionDenied](permissiondenied.md): The operation can’t complete because the user doesn’t have permission for the request.
