> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/accessorytransportsession/transportstaterestoreidentifier](https://developer.apple.com/documentation/accessorytransportextension/accessorytransportsession/transportstaterestoreidentifier)

# transportStateRestoreIdentifier

**Framework:** Accessory Transport Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

An optional identifier for restoring transport state across sessions.

## Declaration

```swift
var transportStateRestoreIdentifier: String?
```

<a id="discussion"></a>

## Discussion

Use this identifier to restore connection state if your transport extension needs to relaunch.

## See Also

### Determining the communication method

- [transport](transport.md): A transport method that the session uses to communicate with the accessory.
- [pushToken](pushtoken.md): A token that identifies the iOS device to the Apple Push Notification service for routing accessory responses over the internet.
