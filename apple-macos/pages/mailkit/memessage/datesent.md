> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessage/datesent](https://developer.apple.com/documentation/mailkit/memessage/datesent)

# dateSent

**Interface language:** Objective-C

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The date the sender sent the message.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDate * dateSent;
```

<a id="Discussion"></a>

## Discussion

This property corresponds to the Date header in the message. The message sender sets this header, and it may not be present.

## See Also

### Accessing the Sent and Received Dates

- [dateReceived](datereceived.md): The date that the recipient received the message.
