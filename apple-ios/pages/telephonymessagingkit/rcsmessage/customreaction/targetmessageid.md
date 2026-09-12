> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsmessage/customreaction/targetmessageid](https://developer.apple.com/documentation/telephonymessagingkit/rcsmessage/customreaction/targetmessageid)

# targetMessageID

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+

The target message ID for the custom reaction.

## Declaration

```swift
var targetMessageID: RCSMessageID
```

<a id="discussion"></a>

## Discussion

When adding a custom reaction, this property indicates the target message ID for the custom reaction. Your app should store the message ID for the sent message used to add the custom reaction. This is necessary for removing the custom reaction at a later point in time.

When removing a custom reaction, this identifier indicates the message ID previously used when adding a custom reaction.
