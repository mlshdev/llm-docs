> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/meextension/handlerformessagesecurity()](https://developer.apple.com/documentation/mailkit/meextension/handlerformessagesecurity())

# handlerForMessageSecurity() (Swift)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns an object that applies security measures such as encryption and digital signatures to messages.

## Declaration

```swift
optional func handlerForMessageSecurity() -> any MEMessageSecurityHandler
```

<a id="return-value"></a>

## Return Value

An object that encrypts, decrypts, and signs messages.

# handlerForMessageSecurity (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns an object that applies security measures such as encryption and digital signatures to messages.

## Declaration

```objectivec
- (id<MEMessageSecurityHandler>) handlerForMessageSecurity;
```

<a id="return-value"></a>

## Return Value

An object that encrypts, decrypts, and signs messages.
