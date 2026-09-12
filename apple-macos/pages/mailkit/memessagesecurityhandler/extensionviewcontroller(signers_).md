> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessagesecurityhandler/extensionviewcontroller(signers:)](https://developer.apple.com/documentation/mailkit/memessagesecurityhandler/extensionviewcontroller(signers:))

# extensionViewController(signers:) (Swift)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns a view controller that displays details about a message’s digital signature.

## Declaration

```swift
func extensionViewController(signers messageSigners: [MEMessageSigner]) -> MEExtensionViewController?
```

## Parameters

- `messageSigners`: An array that contains details about who signed the message.

<a id="return-value"></a>

## Return Value

A view controller that users can display to see information about a message’s digital signature.

# extensionViewControllerForMessageSigners: (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns a view controller that displays details about a message’s digital signature.

## Declaration

```objectivec
- (MEExtensionViewController *) extensionViewControllerForMessageSigners:(NSArray<MEMessageSigner *> *) messageSigners;
```

## Parameters

- `messageSigners`: An array that contains details about who signed the message.

<a id="return-value"></a>

## Return Value

A view controller that users can display to see information about a message’s digital signature.
