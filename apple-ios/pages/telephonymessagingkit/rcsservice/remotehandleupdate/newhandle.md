> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/remotehandleupdate/newhandle](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/remotehandleupdate/newhandle)

# newHandle

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

The new value for the updated handle.

## Declaration

```swift
let newHandle: RCSHandle?
```

<a id="discussion"></a>

## Discussion

This value is `nil` if the handle didn’t change.

## See Also

### Accessing handle update properties

- [cellularServiceID](cellularserviceid.md): The cellular service ID associated with message.
- [CellularServiceID](../../cellularserviceid.md): An opaque identifier that represents the cellular service for which to provide operations.
- [handle](handle.md): The old value of the handle that updated.
- [RCSHandle](../../rcshandle.md): An enumeration that represents an RCS destination or sender.
- [isBusinessHandle](isbusinesshandle.md): A Boolean value that indicates whether the handle is a business handle.
- [capabilities](capabilities.md): The updated capabilities.
