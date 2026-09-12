> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmscontent/from](https://developer.apple.com/documentation/telephonymessagingkit/mmscontent/from)

# from

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

The sender of the MMS message.

## Declaration

```swift
var from: MMSHandle?
```

<a id="discussion"></a>

## Discussion

The system populates this property for received messages. Don’t populate it when sending a message.

## See Also

### Accessing message participants

- [recipients](recipients.md): The recipients of the MMS message, as an array of MMS handles.
- [MMSHandle](../mmshandle.md): A structure that represents an MMS address.
