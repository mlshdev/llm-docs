> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlauthenticationchallenge/init(authenticationchallenge:sender:)](https://developer.apple.com/documentation/foundation/urlauthenticationchallenge/init(authenticationchallenge:sender:))

# init(authenticationChallenge:sender:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an authentication challenge from an existing challenge instance.

## Declaration

```swift
init(authenticationChallenge challenge: URLAuthenticationChallenge, sender: any URLAuthenticationChallengeSender)
```

## Parameters

- `challenge`: The challenge that you want to copy. Usually, this is a challenge received by an existing [URLProtocol](../urlprotocol.md) subclass that you are subclassing.
- `sender`: The sender that you want to use for the new object. Typically, the sender is the instance of your custom [URLProtocol](../urlprotocol.md) subclass that called this method.

<a id="return-value"></a>

## Return Value

A new authentication challenge object, based on an existing challenge.

<a id="Discussion"></a>

## Discussion

Most apps don’t create [URLAuthenticationChallenge](../urlauthenticationchallenge.md) instances themselves. Instead, they handle received challenges in the [urlSession(\_:task:didReceive:completionHandler:)](../urlsessiontaskdelegate/urlsession%28__task_didreceive_completionhandler_%29.md) method of [URLSessionTaskDelegate](../urlsessiontaskdelegate.md).

However, you might need to create authentication challenge objects when adding support for custom networking protocols, as part of a custom [URLProtocol](../urlprotocol.md) subclass. When you subclass an existing [URLProtocol](../urlprotocol.md) subclass, this initializer lets you modify challenges issued by the existing class so that your subclass receives any responses to those challenges.

## See Also

### Creating an authentication challenge instance

- [init(protectionSpace:proposedCredential:previousFailureCount:failureResponse:error:sender:)](init%28protectionspace_proposedcredential_previousfailurecount_failureresponse_error_sender_%29.md): Initializes an authentication challenge from parameters you provide.

# initWithAuthenticationChallenge:sender: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an authentication challenge from an existing challenge instance.

## Declaration

```objectivec
- (instancetype) initWithAuthenticationChallenge:(NSURLAuthenticationChallenge *) challenge sender:(id<NSURLAuthenticationChallengeSender>) sender;
```

## Parameters

- `challenge`: The challenge that you want to copy. Usually, this is a challenge received by an existing [NSURLProtocol](../urlprotocol.md) subclass that you are subclassing.
- `sender`: The sender that you want to use for the new object. Typically, the sender is the instance of your custom [NSURLProtocol](../urlprotocol.md) subclass that called this method.

<a id="return-value"></a>

## Return Value

A new authentication challenge object, based on an existing challenge.

<a id="Discussion"></a>

## Discussion

Most apps don’t create [NSURLAuthenticationChallenge](../urlauthenticationchallenge.md) instances themselves. Instead, they handle received challenges in the [URLSession:task:didReceiveChallenge:completionHandler:](../urlsessiontaskdelegate/urlsession%28__task_didreceive_completionhandler_%29.md) method of [NSURLSessionTaskDelegate](../urlsessiontaskdelegate.md).

However, you might need to create authentication challenge objects when adding support for custom networking protocols, as part of a custom [NSURLProtocol](../urlprotocol.md) subclass. When you subclass an existing [NSURLProtocol](../urlprotocol.md) subclass, this initializer lets you modify challenges issued by the existing class so that your subclass receives any responses to those challenges.

## See Also

### Creating an authentication challenge instance

- [initWithProtectionSpace:proposedCredential:previousFailureCount:failureResponse:error:sender:](init%28protectionspace_proposedcredential_previousfailurecount_failureresponse_error_sender_%29.md): Initializes an authentication challenge from parameters you provide.
