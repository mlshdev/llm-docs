> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlauthenticationchallenge](https://developer.apple.com/documentation/foundation/urlauthenticationchallenge)

# URLAuthenticationChallenge (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A challenge from a server requiring authentication from the client.

## Declaration

```swift
class URLAuthenticationChallenge
```

<a id="overview"></a>

## Overview

Your app receives authentication challenges in various [URLSession](urlsession.md), [NSURLConnection](nsurlconnection.md), and [NSURLDownload](nsurldownload.md) delegate methods, such as [urlSession(\_:task:didReceive:completionHandler:)](urlsessiontaskdelegate/urlsession%28__task_didreceive_completionhandler_%29.md). These objects provide the information you’ll need when deciding how to handle a server’s request for authentication.

At the core of that authentication challenge is a *protection space* that defines the type of authentication being requested, the host and port number, the networking protocol, and (where applicable) the authentication realm (a group of related URLs on the same server that share a single set of credentials).

## Topics

### Creating an authentication challenge instance

- [init(authenticationChallenge:sender:)](urlauthenticationchallenge/init%28authenticationchallenge_sender_%29.md): Creates an authentication challenge from an existing challenge instance.
- [init(protectionSpace:proposedCredential:previousFailureCount:failureResponse:error:sender:)](urlauthenticationchallenge/init%28protectionspace_proposedcredential_previousfailurecount_failureresponse_error_sender_%29.md): Initializes an authentication challenge from parameters you provide.

### Inspecting the authentication challenge

- [protectionSpace](urlauthenticationchallenge/protectionspace.md): The receiver’s protection space.

### Getting properties of previous authentication attempts

- [failureResponse](urlauthenticationchallenge/failureresponse.md): The URL response object representing the last authentication failure.
- [previousFailureCount](urlauthenticationchallenge/previousfailurecount.md): The receiver’s count of failed authentication attempts.
- [proposedCredential](urlauthenticationchallenge/proposedcredential.md): The proposed credential for this challenge.

### Getting authentication errors

- [error](urlauthenticationchallenge/error.md): The error object representing the last authentication failure.

### Legacy

- [sender](urlauthenticationchallenge/sender.md): The sender of the challenge.

### Initializers

- [init(coder:)](urlauthenticationchallenge/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Authentication and credentials

- [Handling an authentication challenge](handling-an-authentication-challenge.md): Respond appropriately when a server demands authentication for a URL request.
- [URLCredential](urlcredential.md): `A`n authentication credential consisting of information specific to the type of credential and the type of persistent storage to use, if any.
- [URLCredentialStorage](urlcredentialstorage.md): The manager of a shared credentials cache.
- [URLProtectionSpace](urlprotectionspace.md): A server or an area on a server, commonly referred to as a realm, that requires authentication.

# NSURLAuthenticationChallenge (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A challenge from a server requiring authentication from the client.

## Declaration

```objectivec
@interface NSURLAuthenticationChallenge : NSObject
```

<a id="overview"></a>

## Overview

Your app receives authentication challenges in various [NSURLSession](urlsession.md), [NSURLConnection](nsurlconnection.md), and [NSURLDownload](nsurldownload.md) delegate methods, such as [URLSession:task:didReceiveChallenge:completionHandler:](urlsessiontaskdelegate/urlsession%28__task_didreceive_completionhandler_%29.md). These objects provide the information you’ll need when deciding how to handle a server’s request for authentication.

At the core of that authentication challenge is a *protection space* that defines the type of authentication being requested, the host and port number, the networking protocol, and (where applicable) the authentication realm (a group of related URLs on the same server that share a single set of credentials).

## Topics

### Creating an authentication challenge instance

- [initWithAuthenticationChallenge:sender:](urlauthenticationchallenge/init%28authenticationchallenge_sender_%29.md): Creates an authentication challenge from an existing challenge instance.
- [initWithProtectionSpace:proposedCredential:previousFailureCount:failureResponse:error:sender:](urlauthenticationchallenge/init%28protectionspace_proposedcredential_previousfailurecount_failureresponse_error_sender_%29.md): Initializes an authentication challenge from parameters you provide.

### Inspecting the authentication challenge

- [protectionSpace](urlauthenticationchallenge/protectionspace.md): The receiver’s protection space.

### Getting properties of previous authentication attempts

- [failureResponse](urlauthenticationchallenge/failureresponse.md): The URL response object representing the last authentication failure.
- [previousFailureCount](urlauthenticationchallenge/previousfailurecount.md): The receiver’s count of failed authentication attempts.
- [proposedCredential](urlauthenticationchallenge/proposedcredential.md): The proposed credential for this challenge.

### Getting authentication errors

- [error](urlauthenticationchallenge/error.md): The error object representing the last authentication failure.

### Legacy

- [sender](urlauthenticationchallenge/sender.md): The sender of the challenge.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](nssecurecoding.md)

## See Also

### Authentication and credentials

- [Handling an authentication challenge](handling-an-authentication-challenge.md): Respond appropriately when a server demands authentication for a URL request.
- [NSURLCredential](urlcredential.md): `A`n authentication credential consisting of information specific to the type of credential and the type of persistent storage to use, if any.
- [NSURLCredentialStorage](urlcredentialstorage.md): The manager of a shared credentials cache.
- [NSURLProtectionSpace](urlprotectionspace.md): A server or an area on a server, commonly referred to as a realm, that requires authentication.
