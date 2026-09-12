> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/preferencepanes/nspreferencepaneunselectreply/unselectlater](https://developer.apple.com/documentation/preferencepanes/nspreferencepaneunselectreply/unselectlater)

# NSPreferencePaneUnselectReply.unselectLater (Swift)

**Framework:** Preference Panes  
**Kind:** Case  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

Delay the deselection until the preference pane invokes [reply(toShouldUnselect:)](../nspreferencepane/reply%28toshouldunselect_%29.md).

## Declaration

```swift
case unselectLater
```

## See Also

### Replies

- [NSPreferencePaneUnselectReply.unselectCancel](unselectcancel.md): Cancel the deselection.
- [NSPreferencePaneUnselectReply.unselectNow](unselectnow.md): Continue the deselection.

# NSUnselectLater (Objective-C)

**Framework:** Preference Panes  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

Delay the deselection until the preference pane invokes [replyToShouldUnselect:](../nspreferencepane/reply%28toshouldunselect_%29.md).

## Declaration

```objectivec
NSUnselectLater
```

## See Also

### Replies

- [NSUnselectCancel](unselectcancel.md): Cancel the deselection.
- [NSUnselectNow](unselectnow.md): Continue the deselection.
