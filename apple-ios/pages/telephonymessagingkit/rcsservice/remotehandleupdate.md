> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/remotehandleupdate](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/remotehandleupdate)

# RCSService.RemoteHandleUpdate

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that contains information about an update to a remote handle.

## Declaration

```swift
struct RemoteHandleUpdate
```

## Topics

### Accessing handle update properties

- [cellularServiceID](remotehandleupdate/cellularserviceid.md): The cellular service ID associated with message.
- [CellularServiceID](../cellularserviceid.md): An opaque identifier that represents the cellular service for which to provide operations.
- [handle](remotehandleupdate/handle.md): The old value of the handle that updated.
- [newHandle](remotehandleupdate/newhandle.md): The new value for the updated handle.
- [RCSHandle](../rcshandle.md): An enumeration that represents an RCS destination or sender.
- [isBusinessHandle](remotehandleupdate/isbusinesshandle.md): A Boolean value that indicates whether the handle is a business handle.
- [capabilities](remotehandleupdate/capabilities.md): The updated capabilities.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Receiving handle updates

- [remoteHandleUpdates](remotehandleupdates.md): An asynchronous sequence of remote handle updates produced by this service.
