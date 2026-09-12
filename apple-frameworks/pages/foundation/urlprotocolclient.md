> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlprotocolclient](https://developer.apple.com/documentation/foundation/urlprotocolclient)

# URLProtocolClient (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The interface used by [URLProtocol](urlprotocol.md) subclasses to communicate with the URL Loading System.

## Declaration

```swift
protocol URLProtocolClient : NSObjectProtocol, Sendable
```

<a id="overview"></a>

## Overview

Don’t implement this protocol in your application. Instead, your [URLProtocol](urlprotocol.md) subclass calls methods of this protocol on its own [client](urlprotocol/client.md) property.

## Topics

### Creating a response

- [urlProtocol(\_:didReceive:cacheStoragePolicy:)](urlprotocolclient/urlprotocol%28__didreceive_cachestoragepolicy_%29.md): Tells the client that the protocol implementation has created a response object for the request.

### Handling redirects

- [urlProtocol(\_:wasRedirectedTo:redirectResponse:)](urlprotocolclient/urlprotocol%28__wasredirectedto_redirectresponse_%29.md): Tells the client that the protocol implementation has been redirected.

### Working with cache data

- [urlProtocol(\_:cachedResponseIsValid:)](urlprotocolclient/urlprotocol%28__cachedresponseisvalid_%29.md): Tells the client that a cached response is valid.

### Handling authentication challenges

- [urlProtocol(\_:didCancel:)](urlprotocolclient/urlprotocol%28__didcancel_%29.md): Tells the client that an authentication challenge has been canceled.
- [urlProtocol(\_:didReceive:)](urlprotocolclient/urlprotocol%28__didreceive_%29.md): Tells the client that the URL Loading System received an authentication challenge.

### Indicating loading progress or failure

- [urlProtocol(\_:didFailWithError:)](urlprotocolclient/urlprotocol%28__didfailwitherror_%29.md): Tells the client that the load request failed due to an error.
- [urlProtocol(\_:didLoad:)](urlprotocolclient/urlprotocol%28__didload_%29.md): Tells the client that the protocol implementation has loaded some data.
- [urlProtocolDidFinishLoading(\_:)](urlprotocolclient/urlprotocoldidfinishloading%28__%29.md): Tells the client that the protocol implementation has finished loading.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting protocol attributes

- [cachedResponse](urlprotocol/cachedresponse.md): The protocol’s cached response.
- [client](urlprotocol/client.md): The object the protocol uses to communicate with the URL loading system.
- [request](urlprotocol/request.md): The protocol’s request.
- [task](urlprotocol/task.md): The protocol’s task.

# NSURLProtocolClient (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The interface used by [NSURLProtocol](urlprotocol.md) subclasses to communicate with the URL Loading System.

## Declaration

```objectivec
@protocol NSURLProtocolClient <NSObject>
```

<a id="overview"></a>

## Overview

Don’t implement this protocol in your application. Instead, your [NSURLProtocol](urlprotocol.md) subclass calls methods of this protocol on its own [client](urlprotocol/client.md) property.

## Topics

### Creating a response

- [URLProtocol:didReceiveResponse:cacheStoragePolicy:](urlprotocolclient/urlprotocol%28__didreceive_cachestoragepolicy_%29.md): Tells the client that the protocol implementation has created a response object for the request.

### Handling redirects

- [URLProtocol:wasRedirectedToRequest:redirectResponse:](urlprotocolclient/urlprotocol%28__wasredirectedto_redirectresponse_%29.md): Tells the client that the protocol implementation has been redirected.

### Working with cache data

- [URLProtocol:cachedResponseIsValid:](urlprotocolclient/urlprotocol%28__cachedresponseisvalid_%29.md): Tells the client that a cached response is valid.

### Handling authentication challenges

- [URLProtocol:didCancelAuthenticationChallenge:](urlprotocolclient/urlprotocol%28__didcancel_%29.md): Tells the client that an authentication challenge has been canceled.
- [URLProtocol:didReceiveAuthenticationChallenge:](urlprotocolclient/urlprotocol%28__didreceive_%29.md): Tells the client that the URL Loading System received an authentication challenge.

### Indicating loading progress or failure

- [URLProtocol:didFailWithError:](urlprotocolclient/urlprotocol%28__didfailwitherror_%29.md): Tells the client that the load request failed due to an error.
- [URLProtocol:didLoadData:](urlprotocolclient/urlprotocol%28__didload_%29.md): Tells the client that the protocol implementation has loaded some data.
- [URLProtocolDidFinishLoading:](urlprotocolclient/urlprotocoldidfinishloading%28__%29.md): Tells the client that the protocol implementation has finished loading.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Getting protocol attributes

- [cachedResponse](urlprotocol/cachedresponse.md): The protocol’s cached response.
- [client](urlprotocol/client.md): The object the protocol uses to communicate with the URL loading system.
- [request](urlprotocol/request.md): The protocol’s request.
- [task](urlprotocol/task.md): The protocol’s task.
