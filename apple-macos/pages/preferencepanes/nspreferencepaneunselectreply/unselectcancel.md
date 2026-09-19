> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/preferencepanes/nspreferencepaneunselectreply/unselectcancel

# NSPreferencePaneUnselectReply.unselectCancel (Swift)

**Framework:** Preference Panes  
**Kind:** Case  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

Cancel the deselection.

## Declaration

```swift
case unselectCancel
```

## See Also

### Replies

- [NSPreferencePaneUnselectReply.unselectNow](unselectnow.md): Continue the deselection.
- [NSPreferencePaneUnselectReply.unselectLater](unselectlater.md): Delay the deselection until the preference pane invokes [reply(toShouldUnselect:)](../nspreferencepane/reply%28toshouldunselect_%29.md).

# NSUnselectCancel (Objective-C)

**Framework:** Preference Panes  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 14.0+ · macOS 10.1+

Cancel the deselection.

## Declaration

```objectivec
NSUnselectCancel
```

## See Also

### Replies

- [NSUnselectNow](unselectnow.md): Continue the deselection.
- [NSUnselectLater](unselectlater.md): Delay the deselection until the preference pane invokes [replyToShouldUnselect:](../nspreferencepane/reply%28toshouldunselect_%29.md).
