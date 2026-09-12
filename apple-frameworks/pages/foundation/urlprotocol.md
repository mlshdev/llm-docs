> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlprotocol](https://developer.apple.com/documentation/foundation/urlprotocol)

# URLProtocol (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract class that handles the loading of protocol-specific URL data.

## Declaration

```swift
class URLProtocol
```

<a id="overview"></a>

## Overview

Don’t instantiate a [URLProtocol](urlprotocol.md) subclass directly. Instead, create subclasses for any custom protocols or URL schemes that your app supports. When a download starts, the system creates the appropriate protocol object to handle the corresponding URL request. You define your protocol class and call the [registerClass(\_:)](urlprotocol/registerclass%28__%29.md) class method during your app’s launch time so that the system is aware of your protocol.

> **Note**

>  You cannot use this class to define custom URL schemes and protocols in watchOS 2 and later.

To support the customization of protocol-specific requests, create extensions to the [URLRequest](urlrequest.md) class to provide any custom API that you need. You can store and retrieve protocol-specific request data by using [URLProtocol](urlprotocol.md)’s class methods [property(forKey:in:)](urlprotocol/property%28forkey_in_%29.md) and [setProperty(\_:forKey:in:)](urlprotocol/setproperty%28__forkey_in_%29.md).

Create a [URLResponse](urlresponse.md) for each request your subclass processes successfully. You may want to create a custom [URLResponse](urlresponse.md) class to provide protocol specific information.

<a id="Subclassing-notes"></a>

### Subclassing notes

When overriding methods of this class, be aware that methods that take a `task` parameter are preferred by the system to those that do not. Therefore, you should override the task-based methods when subclassing, as follows:

Swift:

- Initialization — Override [init(task:cachedResponse:client:)](urlprotocol/init%28task_cachedresponse_client_%29.md) instead of or in addition to [init(request:cachedResponse:client:)](urlprotocol/init%28request_cachedresponse_client_%29.md). Also override the task-based [canInit(with:)](urlprotocol/caninit%28with_%29-18gbo.md) instead of or in addition to the request-based [canInit(with:)](urlprotocol/caninit%28with_%29-76brg.md).

Objective-C:

- Initialization — Override [canInit(with:)](urlprotocol/caninit%28with_%29-18gbo.md) and [init(task:cachedResponse:client:)](urlprotocol/init%28task_cachedresponse_client_%29.md) instead of or in addition to [canInit(with:)](urlprotocol/caninit%28with_%29-76brg.md) and [init(request:cachedResponse:client:)](urlprotocol/init%28request_cachedresponse_client_%29.md).

## Topics

### Creating protocol objects

- [init(request:cachedResponse:client:)](urlprotocol/init%28request_cachedresponse_client_%29.md): Creates a URL protocol instance to handle the request.
- [init(task:cachedResponse:client:)](urlprotocol/init%28task_cachedresponse_client_%29.md): Creates a URL protocol instance to handle the task.

### Registering and unregistering protocol classes

- [registerClass(\_:)](urlprotocol/registerclass%28__%29.md): Attempts to register a subclass of [URLProtocol](urlprotocol.md), making it visible to the URL loading system.
- [unregisterClass(\_:)](urlprotocol/unregisterclass%28__%29.md): Unregisters the specified subclass of [URLProtocol](urlprotocol.md).

### Determining If a subclass can handle a request

- [canInit(with:)](urlprotocol/caninit%28with_%29-76brg.md): Determines whether the protocol subclass can handle the specified request.
- [canInit(with:)](urlprotocol/caninit%28with_%29-18gbo.md): Determines whether the protocol subclass can handle the specified task.

### Getting and setting request properties

- [property(forKey:in:)](urlprotocol/property%28forkey_in_%29.md): Fetches the property associated with the specified key in the specified request.
- [setProperty(\_:forKey:in:)](urlprotocol/setproperty%28__forkey_in_%29.md): Sets the property associated with the specified key in the specified request.
- [removeProperty(forKey:in:)](urlprotocol/removeproperty%28forkey_in_%29.md): Removes the property associated with the specified key in the specified request.

### Providing a canonical version of a request

- [canonicalRequest(for:)](urlprotocol/canonicalrequest%28for_%29.md): Returns a canonical version of the specified request.

### Determining if requests are cache equivalent

- [requestIsCacheEquivalent(\_:to:)](urlprotocol/requestiscacheequivalent%28__to_%29.md): A Boolean value indicating whether two requests are equivalent for cache purposes.

### Starting and stopping downloads

- [startLoading()](urlprotocol/startloading%28%29.md): Starts protocol-specific loading of the request.
- [stopLoading()](urlprotocol/stoploading%28%29.md): Stops protocol-specific loading of the request.

### Getting protocol attributes

- [cachedResponse](urlprotocol/cachedresponse.md): The protocol’s cached response.
- [client](urlprotocol/client.md): The object the protocol uses to communicate with the URL loading system.
- [URLProtocolClient](urlprotocolclient.md): The interface used by [URLProtocol](urlprotocol.md) subclasses to communicate with the URL Loading System.
- [request](urlprotocol/request.md): The protocol’s request.
- [task](urlprotocol/task.md): The protocol’s task.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Supporting custom protocols

- [protocolClasses](urlsessionconfiguration/protocolclasses.md): An array of extra protocol subclasses that handle requests in a session.

# NSURLProtocol (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An abstract class that handles the loading of protocol-specific URL data.

## Declaration

```objectivec
@interface NSURLProtocol : NSObject
```

<a id="overview"></a>

## Overview

Don’t instantiate a [NSURLProtocol](urlprotocol.md) subclass directly. Instead, create subclasses for any custom protocols or URL schemes that your app supports. When a download starts, the system creates the appropriate protocol object to handle the corresponding URL request. You define your protocol class and call the [registerClass:](urlprotocol/registerclass%28__%29.md) class method during your app’s launch time so that the system is aware of your protocol.

> **Note**

>  You cannot use this class to define custom URL schemes and protocols in watchOS 2 and later.

To support the customization of protocol-specific requests, create extensions to the [URLRequest](urlrequest.md) class to provide any custom API that you need. You can store and retrieve protocol-specific request data by using [NSURLProtocol](urlprotocol.md)’s class methods [propertyForKey:inRequest:](urlprotocol/property%28forkey_in_%29.md) and [setProperty:forKey:inRequest:](urlprotocol/setproperty%28__forkey_in_%29.md).

Create a [NSURLResponse](urlresponse.md) for each request your subclass processes successfully. You may want to create a custom [NSURLResponse](urlresponse.md) class to provide protocol specific information.

<a id="Subclassing-notes"></a>

### Subclassing notes

When overriding methods of this class, be aware that methods that take a `task` parameter are preferred by the system to those that do not. Therefore, you should override the task-based methods when subclassing, as follows:

Swift:

- Initialization — Override [initWithTask:cachedResponse:client:](urlprotocol/init%28task_cachedresponse_client_%29.md) instead of or in addition to [initWithRequest:cachedResponse:client:](urlprotocol/init%28request_cachedresponse_client_%29.md). Also override the task-based [canInitWithTask:](urlprotocol/caninit%28with_%29-18gbo.md) instead of or in addition to the request-based [canInitWithRequest:](urlprotocol/caninit%28with_%29-76brg.md).

Objective-C:

- Initialization — Override [canInitWithTask:](urlprotocol/caninit%28with_%29-18gbo.md) and [initWithTask:cachedResponse:client:](urlprotocol/init%28task_cachedresponse_client_%29.md) instead of or in addition to [canInitWithRequest:](urlprotocol/caninit%28with_%29-76brg.md) and [initWithRequest:cachedResponse:client:](urlprotocol/init%28request_cachedresponse_client_%29.md).

## Topics

### Creating protocol objects

- [initWithRequest:cachedResponse:client:](urlprotocol/init%28request_cachedresponse_client_%29.md): Creates a URL protocol instance to handle the request.
- [initWithTask:cachedResponse:client:](urlprotocol/init%28task_cachedresponse_client_%29.md): Creates a URL protocol instance to handle the task.

### Registering and unregistering protocol classes

- [registerClass:](urlprotocol/registerclass%28__%29.md): Attempts to register a subclass of [NSURLProtocol](urlprotocol.md), making it visible to the URL loading system.
- [unregisterClass:](urlprotocol/unregisterclass%28__%29.md): Unregisters the specified subclass of [NSURLProtocol](urlprotocol.md).

### Determining If a subclass can handle a request

- [canInitWithRequest:](urlprotocol/caninit%28with_%29-76brg.md): Determines whether the protocol subclass can handle the specified request.
- [canInitWithTask:](urlprotocol/caninit%28with_%29-18gbo.md): Determines whether the protocol subclass can handle the specified task.

### Getting and setting request properties

- [propertyForKey:inRequest:](urlprotocol/property%28forkey_in_%29.md): Fetches the property associated with the specified key in the specified request.
- [setProperty:forKey:inRequest:](urlprotocol/setproperty%28__forkey_in_%29.md): Sets the property associated with the specified key in the specified request.
- [removePropertyForKey:inRequest:](urlprotocol/removeproperty%28forkey_in_%29.md): Removes the property associated with the specified key in the specified request.

### Providing a canonical version of a request

- [canonicalRequestForRequest:](urlprotocol/canonicalrequest%28for_%29.md): Returns a canonical version of the specified request.

### Determining if requests are cache equivalent

- [requestIsCacheEquivalent:toRequest:](urlprotocol/requestiscacheequivalent%28__to_%29.md): A Boolean value indicating whether two requests are equivalent for cache purposes.

### Starting and stopping downloads

- [startLoading](urlprotocol/startloading%28%29.md): Starts protocol-specific loading of the request.
- [stopLoading](urlprotocol/stoploading%28%29.md): Stops protocol-specific loading of the request.

### Getting protocol attributes

- [cachedResponse](urlprotocol/cachedresponse.md): The protocol’s cached response.
- [client](urlprotocol/client.md): The object the protocol uses to communicate with the URL loading system.
- [NSURLProtocolClient](urlprotocolclient.md): The interface used by [NSURLProtocol](urlprotocol.md) subclasses to communicate with the URL Loading System.
- [request](urlprotocol/request.md): The protocol’s request.
- [task](urlprotocol/task.md): The protocol’s task.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Supporting custom protocols

- [protocolClasses](urlsessionconfiguration/protocolclasses.md): An array of extra protocol subclasses that handle requests in a session.
