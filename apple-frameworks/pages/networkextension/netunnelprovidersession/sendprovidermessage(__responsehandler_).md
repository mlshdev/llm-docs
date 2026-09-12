> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/netunnelprovidersession/sendprovidermessage(_:responsehandler:)](https://developer.apple.com/documentation/networkextension/netunnelprovidersession/sendprovidermessage(_:responsehandler:))

# sendProviderMessage(\_:responseHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Send a message to the Tunnel Provider extension. If the extension is not running, it should be launched to handle the message. If this method can’t start sending the message it reports an error in the `returnError` parameter. If an error occurs while sending the message or returning the result, `nil` should be sent to the response handler as notification.

## Declaration

```swift
func sendProviderMessage(_ messageData: Data, responseHandler: ((Data?) -> Void)? = nil) throws
```

## Parameters

- `messageData`: An [NSData](../../foundation/nsdata.md) object containing the message to be sent.
- `responseHandler`: An optional block that handles the response from the Tunnel Provider extension. Pass nil if no response is expected.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

# sendProviderMessage:returnError:responseHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Send a message to the Tunnel Provider extension. If the extension is not running, it should be launched to handle the message. If this method can’t start sending the message it reports an error in the `returnError` parameter. If an error occurs while sending the message or returning the result, `nil` should be sent to the response handler as notification.

## Declaration

```objectivec
- (BOOL) sendProviderMessage:(NSData *) messageData returnError:(NSError **) error responseHandler:(void (^)(NSData *responseData)) responseHandler;
```

## Parameters

- `messageData`: An [NSData](../../foundation/nsdata.md) object containing the message to be sent.
- `error`: If the message was sent successfully, this parameter is set to nil. Otherwise this parameter is set to the error that occurred. Possible errors include:

  - [NEVPNErrorConfigurationInvalid](../nevpnerror-swift.struct/code/configurationinvalid.md)
  - [NEVPNErrorConfigurationDisabled](../nevpnerror-swift.struct/code/configurationdisabled.md)
- `responseHandler`: An optional block that handles the response from the Tunnel Provider extension. Pass nil if no response is expected.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the message was sent successfully, or [false](https://developer.apple.com/documentation/swift/false) if an error occurred.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.
