> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessage/datereceived](https://developer.apple.com/documentation/mailkit/memessage/datereceived)

# dateReceived

**Interface language:** Objective-C

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The date that the recipient received the message.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDate * dateReceived;
```

<a id="Discussion"></a>

## Discussion

This property is only available if the message has been delivered. For example, it isn’t present in a draft message.

## See Also

### Accessing the Sent and Received Dates

- [dateSent](datesent.md): The date the sender sent the message.
