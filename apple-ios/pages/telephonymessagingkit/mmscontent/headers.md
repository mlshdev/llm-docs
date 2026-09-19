> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/mmscontent/headers

# headers

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

Additional headers in a received MMS message, as a key-value dictionary of strings.

## Declaration

```swift
var headers: [String : String]
```

<a id="discussion"></a>

## Discussion

Don’t populate this dictionary when sending a message.

## See Also

### Accessing content properties

- [parts](parts.md): The individual parts of the MMS message.
- [MMSPartContent](../mmspartcontent.md): A structure that defines custom headers within MMS content.
- [subject](subject.md): The subject of the MMS message.
