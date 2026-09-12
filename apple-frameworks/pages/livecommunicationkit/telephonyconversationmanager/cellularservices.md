> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/livecommunicationkit/telephonyconversationmanager/cellularservices](https://developer.apple.com/documentation/livecommunicationkit/telephonyconversationmanager/cellularservices)

# cellularServices

**Framework:** LiveCommunicationKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A read-only list of cellular service accounts that you can use to initiate a cellular conversation.

## Declaration

```swift
final var cellularServices: [CellularService] { get }
```

<a id="discussion"></a>

## Discussion

To have access to cellular services, your app needs to be the default calling app. If your app doesn’t have permission to access to accounts, it can still initiate conversations using [TelephonyConversationManager](../telephonyconversationmanager.md).
