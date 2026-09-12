> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafariextensionhandling/messagereceived(withname:from:userinfo:)](https://developer.apple.com/documentation/safariservices/sfsafariextensionhandling/messagereceived(withname:from:userinfo:))

# messageReceived(withName:from:userInfo:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

A method the system calls when the extension receives a message from an injected script.

## Declaration

```swift
optional func messageReceived(withName messageName: String, from page: SFSafariPage, userInfo: [String : Any]? = nil)
```

## Parameters

- `messageName`: A string that identifies the message.
- `page`: The page that sent the message.
- `userInfo`: Optional message content. If specified, the dictionary’s value objects conform to the W3C standard for safe passing of structured data, such as Boolean objects, numeric values, strings, and arrays.

## Mentioned In

- [Passing messages between Safari app extensions and injected scripts](../passing-messages-between-safari-app-extensions-and-injected-scripts.md)

## See Also

### Receiving Messages in Your App Extension

- [messageReceivedFromContainingApp(withName:userInfo:)](messagereceivedfromcontainingapp%28withname_userinfo_%29.md): A method the system calls when the extension receives a message from the extension’s containing app.

# messageReceivedWithName:fromPage:userInfo: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

A method the system calls when the extension receives a message from an injected script.

## Declaration

```objectivec
- (void) messageReceivedWithName:(NSString *) messageName fromPage:(SFSafariPage *) page userInfo:(NSDictionary<NSString *,id> *) userInfo;
```

## Parameters

- `messageName`: A string that identifies the message.
- `page`: The page that sent the message.
- `userInfo`: Optional message content. If specified, the dictionary’s value objects conform to the W3C standard for safe passing of structured data, such as Boolean objects, numeric values, strings, and arrays.

## Mentioned In

- [Passing messages between Safari app extensions and injected scripts](../passing-messages-between-safari-app-extensions-and-injected-scripts.md)

## See Also

### Receiving Messages in Your App Extension

- [messageReceivedFromContainingAppWithName:userInfo:](messagereceivedfromcontainingapp%28withname_userinfo_%29.md): A method the system calls when the extension receives a message from the extension’s containing app.
