> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/mmscontent/parts

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
