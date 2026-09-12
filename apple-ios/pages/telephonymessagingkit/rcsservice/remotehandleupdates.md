> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/remotehandleupdates](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/remotehandleupdates)

# remoteHandleUpdates

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

An asynchronous sequence of remote handle updates produced by this service.

## Declaration

```swift
final var remoteHandleUpdates: some AsyncSequence<RCSService.RemoteHandleUpdate, Never> { get throws }
```

<a id="discussion"></a>

## Discussion

Use a `for`-`await`-`in` loop to receive [RCSService.RemoteHandleUpdate](remotehandleupdate.md) instances from this property.

## See Also

### Receiving handle updates

- [RCSService.RemoteHandleUpdate](remotehandleupdate.md): A structure that contains information about an update to a remote handle.
