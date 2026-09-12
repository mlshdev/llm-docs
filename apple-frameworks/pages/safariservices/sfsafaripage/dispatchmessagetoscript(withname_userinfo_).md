> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafaripage/dispatchmessagetoscript(withname:userinfo:)](https://developer.apple.com/documentation/safariservices/sfsafaripage/dispatchmessagetoscript(withname:userinfo:))

# dispatchMessageToScript(withName:userInfo:) (Swift)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Dispatches a message from the app extension to the content script injected in this page.

## Declaration

```swift
func dispatchMessageToScript(withName messageName: String, userInfo: [String : Any]? = nil)
```

## Parameters

- `messageName`: A string that identifies the message.
- `userInfo`: An optional dictionary containing additional message content. If a dictionary is provided, values must conform to the W3C standard for safe passing of structured data, such as Boolean objects, numeric values, strings, and arrays.

## Mentioned In

- [Adjusting settings for contextual menu items](../adjusting-settings-for-contextual-menu-items.md)
- [Passing messages between Safari app extensions and injected scripts](../passing-messages-between-safari-app-extensions-and-injected-scripts.md)

# dispatchMessageToScriptWithName:userInfo: (Objective-C)

**Framework:** Safari Services  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Dispatches a message from the app extension to the content script injected in this page.

## Declaration

```objectivec
- (void) dispatchMessageToScriptWithName:(NSString *) messageName userInfo:(NSDictionary<NSString *,id> *) userInfo;
```

## Parameters

- `messageName`: A string that identifies the message.
- `userInfo`: An optional dictionary containing additional message content. If a dictionary is provided, values must conform to the W3C standard for safe passing of structured data, such as Boolean objects, numeric values, strings, and arrays.

## Mentioned In

- [Adjusting settings for contextual menu items](../adjusting-settings-for-contextual-menu-items.md)
- [Passing messages between Safari app extensions and injected scripts](../passing-messages-between-safari-app-extensions-and-injected-scripts.md)
