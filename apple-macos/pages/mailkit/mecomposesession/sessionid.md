> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/mecomposesession/sessionid](https://developer.apple.com/documentation/mailkit/mecomposesession/sessionid)

# sessionID (Swift)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A unique identifier for the session.

## Declaration

```swift
var sessionID: UUID { get }
```

<a id="Discussion"></a>

## Discussion

A compose session’s identifier is only valid for the duration that Mail shows a compose window. If the user opens a compose window, saves it as a draft, and later reopens it, the compose session may have a different [sessionID](sessionid.md).

## See Also

### Managing Compose Sessions

- [reload()](reload%28%29.md): Refreshes the compose session with the extension’s new information.

# sessionID (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A unique identifier for the session.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSUUID * sessionID;
```

<a id="Discussion"></a>

## Discussion

A compose session’s identifier is only valid for the duration that Mail shows a compose window. If the user opens a compose window, saves it as a draft, and later reopens it, the compose session may have a different [sessionID](sessionid.md).

## See Also

### Managing Compose Sessions

- [reloadSession](reload%28%29.md): Refreshes the compose session with the extension’s new information.
