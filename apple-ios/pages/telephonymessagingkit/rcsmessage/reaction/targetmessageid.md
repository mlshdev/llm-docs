> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsmessage/reaction/targetmessageid](https://developer.apple.com/documentation/telephonymessagingkit/rcsmessage/reaction/targetmessageid)

# targetMessageID

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+

The target message ID for the reaction.

## Declaration

```swift
var targetMessageID: RCSMessageID
```

<a id="discussion"></a>

## Discussion

When adding a reaction, this property indicates the target message ID for the reaction. Your app should store the message ID for the sent message used to add the reaction. This is necessary for removing the reaction at a later point in time.

When removing a reaction, this identifier indicates the message ID previously used when adding a reaction.
