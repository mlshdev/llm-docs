> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariextensionhandling/messagereceivedfromcontainingapp(withname:userinfo:)](https://developer.apple.com/documentation/safariservices/sfsafariextensionhandling/messagereceivedfromcontainingapp(withname:userinfo:))

# messageReceivedFromContainingApp(withName:userInfo:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12.4+

A method the system calls when the extension receives a message from the extension’s containing app.

## Declaration

```swift
optional func messageReceivedFromContainingApp(withName messageName: String, userInfo: [String : Any]? = nil)
```

## Parameters

- `messageName`: A string that identifies the message.
- `userInfo`: Optional message content.

## See Also

### Related Documentation

- [dispatchMessage(withName:toExtensionWithIdentifier:userInfo:completionHandler:)](../sfsafariapplication/dispatchmessage%28withname_toextensionwithidentifier_userinfo_completionhandler_%29.md): Sends a message to a Safari app extension, launching Safari if necessary.

### Receiving Messages in Your App Extension

- [messageReceived(withName:from:userInfo:)](messagereceived%28withname_from_userinfo_%29.md): A method the system calls when the extension receives a message from an injected script.

# messageReceivedFromContainingAppWithName:userInfo: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12.4+

A method the system calls when the extension receives a message from the extension’s containing app.

## Declaration

```objectivec
- (void) messageReceivedFromContainingAppWithName:(NSString *) messageName userInfo:(NSDictionary<NSString *,id> *) userInfo;
```

## Parameters

- `messageName`: A string that identifies the message.
- `userInfo`: Optional message content.

## See Also

### Related Documentation

- [dispatchMessageWithName:toExtensionWithIdentifier:userInfo:completionHandler:](../sfsafariapplication/dispatchmessage%28withname_toextensionwithidentifier_userinfo_completionhandler_%29.md): Sends a message to a Safari app extension, launching Safari if necessary.

### Receiving Messages in Your App Extension

- [messageReceivedWithName:fromPage:userInfo:](messagereceived%28withname_from_userinfo_%29.md): A method the system calls when the extension receives a message from an injected script.
