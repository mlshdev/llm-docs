> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlconnectiondelegate](https://developer.apple.com/documentation/foundation/nsurlconnectiondelegate)

# NSURLConnectionDelegate (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A protocol that delegates of a URL connection implement to receive status about and provide feedback to the connection object.

## Declaration

```swift
protocol NSURLConnectionDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Delegates of [NSURLConnection](nsurlconnection.md) objects should implement either the [NSURLConnectionDataDelegate](nsurlconnectiondatadelegate.md) or [NSURLConnectionDownloadDelegate](nsurlconnectiondownloaddelegate.md) protocol in addition to the [NSURLConnectionDelegate](nsurlconnectiondelegate.md) protocol. Specifically:

- If you are using [NSURLConnection](nsurlconnection.md) in conjunction with Newsstand Kit’s `download(with:)` method, the delegate class should implement the [NSURLConnectionDownloadDelegate](nsurlconnectiondownloaddelegate.md) protocol.
- Otherwise, the delegate class should implement the [NSURLConnectionDataDelegate](nsurlconnectiondatadelegate.md) protocol.

Delegates that wish to perform custom authentication handling should implement the [connection(\_:willSendRequestFor:)](nsurlconnectiondelegate/connection%28__willsendrequestfor_%29.md) method, which is the preferred mechanism for responding to authentication challenges. (See [URLAuthenticationChallenge](urlauthenticationchallenge.md) for more information on authentication challenges.) If [connection(\_:willSendRequestFor:)](nsurlconnectiondelegate/connection%28__willsendrequestfor_%29.md) is not implemented, the older, deprecated methods [connection(\_:canAuthenticateAgainstProtectionSpace:)](nsurlconnectiondelegate/connection%28__canauthenticateagainstprotectionspace_%29.md), [connection(\_:didReceive:)](nsurlconnectiondelegate/connection%28__didreceive_%29.md), and [connection(\_:didCancel:)](nsurlconnectiondelegate/connection%28__didcancel_%29.md) are called instead.

The [connection(\_:didFailWithError:)](nsurlconnectiondelegate/connection%28__didfailwitherror_%29.md) method is called at most once if an error occurs during the loading of a resource. The [connectionShouldUseCredentialStorage(\_:)](nsurlconnectiondelegate/connectionshouldusecredentialstorage%28__%29.md) method is called once, just before the loading of a resource begins.

## Topics

### Connection Authentication

- [connection(\_:willSendRequestFor:)](nsurlconnectiondelegate/connection%28__willsendrequestfor_%29.md): Tells the delegate that the connection will send a request for an authentication challenge.
- [connection(\_:canAuthenticateAgainstProtectionSpace:)](nsurlconnectiondelegate/connection%28__canauthenticateagainstprotectionspace_%29.md): Deprecated. Sent to determine whether the delegate is able to respond to a protection space’s form of authentication.
- [connection(\_:didCancel:)](nsurlconnectiondelegate/connection%28__didcancel_%29.md): Deprecated. Sent when a connection cancels an authentication challenge.
- [connection(\_:didReceive:)](nsurlconnectiondelegate/connection%28__didreceive_%29.md): Deprecated. Sent when a connection must authenticate a challenge in order to download its request.
- [connectionShouldUseCredentialStorage(\_:)](nsurlconnectiondelegate/connectionshouldusecredentialstorage%28__%29.md): Sent to determine whether the URL loader should use the credential storage for authenticating the connection.

### Connection Completion

- [connection(\_:didFailWithError:)](nsurlconnectiondelegate/connection%28__didfailwitherror_%29.md): Sent when a connection fails to load its request successfully.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [NSURLConnectionDataDelegate](nsurlconnectiondatadelegate.md)
- [NSURLConnectionDownloadDelegate](nsurlconnectiondownloaddelegate.md)

## See Also

### URL Connection

- [NSURLConnection](nsurlconnection.md): An object that enables you to start and stop URL requests.
- [NSURLConnectionDataDelegate](nsurlconnectiondatadelegate.md): A protocol that most delegates of a URL connection implement to receive data associated with the connection.
- [NSURLConnectionDownloadDelegate](nsurlconnectiondownloaddelegate.md): A protocol that delegates of a URL connection created with Newsstand Kit implement to receive data associated with a download.

# NSURLConnectionDelegate (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A protocol that delegates of a URL connection implement to receive status about and provide feedback to the connection object.

## Declaration

```objectivec
@protocol NSURLConnectionDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Delegates of [NSURLConnection](nsurlconnection.md) objects should implement either the [NSURLConnectionDataDelegate](nsurlconnectiondatadelegate.md) or [NSURLConnectionDownloadDelegate](nsurlconnectiondownloaddelegate.md) protocol in addition to the [NSURLConnectionDelegate](nsurlconnectiondelegate.md) protocol. Specifically:

- If you are using [NSURLConnection](nsurlconnection.md) in conjunction with Newsstand Kit’s `download(with:)` method, the delegate class should implement the [NSURLConnectionDownloadDelegate](nsurlconnectiondownloaddelegate.md) protocol.
- Otherwise, the delegate class should implement the [NSURLConnectionDataDelegate](nsurlconnectiondatadelegate.md) protocol.

Delegates that wish to perform custom authentication handling should implement the [connection:willSendRequestForAuthenticationChallenge:](nsurlconnectiondelegate/connection%28__willsendrequestfor_%29.md) method, which is the preferred mechanism for responding to authentication challenges. (See [NSURLAuthenticationChallenge](urlauthenticationchallenge.md) for more information on authentication challenges.) If [connection:willSendRequestForAuthenticationChallenge:](nsurlconnectiondelegate/connection%28__willsendrequestfor_%29.md) is not implemented, the older, deprecated methods [connection:canAuthenticateAgainstProtectionSpace:](nsurlconnectiondelegate/connection%28__canauthenticateagainstprotectionspace_%29.md), [connection:didReceiveAuthenticationChallenge:](nsurlconnectiondelegate/connection%28__didreceive_%29.md), and [connection:didCancelAuthenticationChallenge:](nsurlconnectiondelegate/connection%28__didcancel_%29.md) are called instead.

The [connection:didFailWithError:](nsurlconnectiondelegate/connection%28__didfailwitherror_%29.md) method is called at most once if an error occurs during the loading of a resource. The [connectionShouldUseCredentialStorage:](nsurlconnectiondelegate/connectionshouldusecredentialstorage%28__%29.md) method is called once, just before the loading of a resource begins.

## Topics

### Connection Authentication

- [connection:willSendRequestForAuthenticationChallenge:](nsurlconnectiondelegate/connection%28__willsendrequestfor_%29.md): Tells the delegate that the connection will send a request for an authentication challenge.
- [connection:canAuthenticateAgainstProtectionSpace:](nsurlconnectiondelegate/connection%28__canauthenticateagainstprotectionspace_%29.md): Deprecated. Sent to determine whether the delegate is able to respond to a protection space’s form of authentication.
- [connection:didCancelAuthenticationChallenge:](nsurlconnectiondelegate/connection%28__didcancel_%29.md): Deprecated. Sent when a connection cancels an authentication challenge.
- [connection:didReceiveAuthenticationChallenge:](nsurlconnectiondelegate/connection%28__didreceive_%29.md): Deprecated. Sent when a connection must authenticate a challenge in order to download its request.
- [connectionShouldUseCredentialStorage:](nsurlconnectiondelegate/connectionshouldusecredentialstorage%28__%29.md): Sent to determine whether the URL loader should use the credential storage for authenticating the connection.

### Connection Completion

- [connection:didFailWithError:](nsurlconnectiondelegate/connection%28__didfailwitherror_%29.md): Sent when a connection fails to load its request successfully.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [NSURLConnectionDataDelegate](nsurlconnectiondatadelegate.md)
- [NSURLConnectionDownloadDelegate](nsurlconnectiondownloaddelegate.md)

## See Also

### URL Connection

- [NSURLConnection](nsurlconnection.md): An object that enables you to start and stop URL requests.
- [NSURLConnectionDataDelegate](nsurlconnectiondatadelegate.md): A protocol that most delegates of a URL connection implement to receive data associated with the connection.
- [NSURLConnectionDownloadDelegate](nsurlconnectiondownloaddelegate.md): A protocol that delegates of a URL connection created with Newsstand Kit implement to receive data associated with a download.
