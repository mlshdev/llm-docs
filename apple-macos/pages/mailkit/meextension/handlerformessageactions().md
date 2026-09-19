> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mailkit/meextension/handlerformessageactions()

# handlerForMessageActions() (Swift)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns an object that performs actions on mail messages as the system downloads them.

## Declaration

```swift
optional func handlerForMessageActions() -> any MEMessageActionHandler
```

<a id="return-value"></a>

## Return Value

An object that performs actions on mail messages.

<a id="discussion"></a>

## Discussion

> **Tip**

>  Message action handlers typically don’t need any additional state to determine the actions to take on messages. Therefore, using a singleton handler instance is appropriate.

# handlerForMessageActions (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns an object that performs actions on mail messages as the system downloads them.

## Declaration

```objectivec
- (id<MEMessageActionHandler>) handlerForMessageActions;
```

<a id="return-value"></a>

## Return Value

An object that performs actions on mail messages.

<a id="discussion"></a>

## Discussion

> **Tip**

>  Message action handlers typically don’t need any additional state to determine the actions to take on messages. Therefore, using a singleton handler instance is appropriate.
