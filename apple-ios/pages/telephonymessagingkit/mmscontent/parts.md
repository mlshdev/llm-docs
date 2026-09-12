> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmscontent/parts](https://developer.apple.com/documentation/telephonymessagingkit/mmscontent/parts)

# parts

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

The individual parts of the MMS message.

## Declaration

```swift
var parts: [MMSPartContent]
```

<a id="discussion"></a>

## Discussion

When sending an MMS, add the individual parts to this array. When receiving an MMS, inspect this array to receive the MMS parts, in order.

## See Also

### Accessing content properties

- [MMSPartContent](../mmspartcontent.md): A structure that defines custom headers within MMS content.
- [subject](subject.md): The subject of the MMS message.
- [headers](headers.md): Additional headers in a received MMS message, as a key-value dictionary of strings.
