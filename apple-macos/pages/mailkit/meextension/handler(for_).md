> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/meextension/handler(for:)](https://developer.apple.com/documentation/mailkit/meextension/handler(for:))

# handler(for:) (Swift)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns an object that participates in the composition of a mail message.

## Declaration

```swift
optional func handler(for session: MEComposeSession) -> any MEComposeSessionHandler
```

## Parameters

- `session`: An object that represents a mail compose window.

<a id="return-value"></a>

## Return Value

An object that participates in the composition of a mail message.

<a id="Discussion"></a>

## Discussion

MailKit invokes this method for each compose window it displays.

# handlerForComposeSession: (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns an object that participates in the composition of a mail message.

## Declaration

```objectivec
- (id<MEComposeSessionHandler>) handlerForComposeSession:(MEComposeSession *) session;
```

## Parameters

- `session`: An object that represents a mail compose window.

<a id="return-value"></a>

## Return Value

An object that participates in the composition of a mail message.

<a id="Discussion"></a>

## Discussion

MailKit invokes this method for each compose window it displays.
