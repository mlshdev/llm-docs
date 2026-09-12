> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/mecomposesession/reload()](https://developer.apple.com/documentation/mailkit/mecomposesession/reload())

# reload() (Swift)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Refreshes the compose session with the extension’s new information.

## Declaration

```swift
func reload()
```

<a id="Discussion"></a>

## Discussion

Call this method from your extension to regenerate address annotations to replace existing annotations for the session. In response, MailKit invokes [annotateAddressesForSession(\_:completion:)](../mecomposesessionhandler/annotateaddressesforsession%28__completion_%29.md) for all addresses in the To, Cc, and Bcc fields.

## See Also

### Managing Compose Sessions

- [sessionID](sessionid.md): A unique identifier for the session.

# reloadSession (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Refreshes the compose session with the extension’s new information.

## Declaration

```objectivec
- (void) reloadSession;
```

<a id="Discussion"></a>

## Discussion

Call this method from your extension to regenerate address annotations to replace existing annotations for the session. In response, MailKit invokes [session:annotateAddressesWithCompletionHandler:](../mecomposesessionhandler/annotateaddressesforsession%28__completion_%29.md) for all addresses in the To, Cc, and Bcc fields.

## See Also

### Managing Compose Sessions

- [sessionID](sessionid.md): A unique identifier for the session.
