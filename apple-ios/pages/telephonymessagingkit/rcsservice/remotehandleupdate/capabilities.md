> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/remotehandleupdate/capabilities](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/remotehandleupdate/capabilities)

# capabilities

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

The updated capabilities.

## Declaration

```swift
let capabilities: RCSService.RemoteCapabilities?
```

<a id="discussion"></a>

## Discussion

This value is `nil` if the capabilities didn’t change.

## See Also

### Accessing handle update properties

- [cellularServiceID](cellularserviceid.md): The cellular service ID associated with message.
- [CellularServiceID](../../cellularserviceid.md): An opaque identifier that represents the cellular service for which to provide operations.
- [handle](handle.md): The old value of the handle that updated.
- [newHandle](newhandle.md): The new value for the updated handle.
- [RCSHandle](../../rcshandle.md): An enumeration that represents an RCS destination or sender.
- [isBusinessHandle](isbusinesshandle.md): A Boolean value that indicates whether the handle is a business handle.
