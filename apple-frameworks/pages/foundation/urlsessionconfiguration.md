> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration](https://developer.apple.com/documentation/foundation/urlsessionconfiguration)

# URLSessionConfiguration (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A configuration object that defines behavior and policies for a URL session.

## Declaration

```swift
class URLSessionConfiguration
```

## Mentioned In

- [Accessing cached data](accessing-cached-data.md)
- [Downloading files in the background](downloading-files-in-the-background.md)
- [Fetching website data into memory](fetching-website-data-into-memory.md)
- [Improving network reliability using Multipath TCP](improving-network-reliability-using-multipath-tcp.md)
- [Uploading streams of data](uploading-streams-of-data.md)

<a id="overview"></a>

## Overview

An [URLSessionConfiguration](urlsessionconfiguration.md) object defines the behavior and policies to use when uploading and downloading data using an [URLSession](urlsession.md) object. When uploading or downloading data, creating a configuration object is always the first step you must take. You use this object to configure the timeout values, caching policies, connection requirements, and other types of information that you intend to use with your [URLSession](urlsession.md) object.

It is important to configure your [URLSessionConfiguration](urlsessionconfiguration.md) object appropriately before using it to initialize a session object. Session objects make a copy of the configuration settings you provide and use those settings to configure the session. Once configured, the session object ignores any changes you make to the [URLSessionConfiguration](urlsessionconfiguration.md) object. If you need to modify your transfer policies, you must update the session configuration object and use it to create a new [URLSession](urlsession.md) object.

> **Note**

>  In some cases, the policies defined in this configuration may be overridden by policies specified by an [NSURLRequest](nsurlrequest.md) object provided for a task. Any policy specified on the request object is respected unless the session’s policy is more restrictive. For example, if the session configuration specifies that cellular networking should not be allowed, the [NSURLRequest](nsurlrequest.md) object cannot request cellular networking.

For more information about using configuration objects to create sessions, see [URLSession](urlsession.md).

<a id="Types-of-session-configurations"></a>

### Types of session configurations

The behavior and capabilities of a URL session are largely determined by the kind of configuration used to create the session.

The singleton shared session (which has no configuration object) is for basic requests. It’s not as customizable as sessions that you create, but it serves as a good starting point if you have very limited requirements. You access this session by calling the shared class method. See that method’s discussion for more information about its limitations.

Default sessions behave much like the shared session (unless you customize them further), but let you obtain data incrementally using a delegate. You can create a default session configuration by calling the default method on the URLSessionConfiguration class.

Ephemeral sessions are similar to default sessions, but they don’t write caches, cookies, or credentials to disk. You can create an ephemeral session configuration by calling the ephemeral method on the URLSessionConfiguration class.

Background sessions let you perform uploads and downloads of content in the background while your app isn’t running. You can create a background session configuration by calling the backgroundSessionConfiguration(\_:) method on the URLSessionConfiguration class.

## Topics

### Creating a session configuration object

- [default](urlsessionconfiguration/default.md): A default session configuration object.
- [ephemeral](urlsessionconfiguration/ephemeral.md): A session configuration that uses no persistent storage for caches, cookies, or credentials.
- [background(withIdentifier:)](urlsessionconfiguration/background%28withidentifier_%29.md): Creates a session configuration object that allows HTTP and HTTPS uploads or downloads to be performed in the background.
- [init()](urlsessionconfiguration/init%28%29.md): Deprecated. Creates an empty session configuration.
- [new()](urlsessionconfiguration/new%28%29.md): Deprecated. Creates an empty session configuration.

### Setting general properties

- [identifier](urlsessionconfiguration/identifier.md): The background session identifier of the configuration object.
- [httpAdditionalHeaders](urlsessionconfiguration/httpadditionalheaders.md): A dictionary of additional headers to send with requests.
- [networkServiceType](urlsessionconfiguration/networkservicetype.md): The type of network service for all tasks within network sessions to enable Cellular Network Slicing.
- [allowsCellularAccess](urlsessionconfiguration/allowscellularaccess.md): A Boolean value that determines whether connections should be made over a cellular network.
- [timeoutIntervalForRequest](urlsessionconfiguration/timeoutintervalforrequest.md): The timeout interval to use when waiting for additional data.
- [timeoutIntervalForResource](urlsessionconfiguration/timeoutintervalforresource.md): The maximum amount of time that a resource request should be allowed to take.
- [sharedContainerIdentifier](urlsessionconfiguration/sharedcontaineridentifier.md): The identifier for the shared container into which files in background URL sessions should be downloaded.
- [waitsForConnectivity](urlsessionconfiguration/waitsforconnectivity.md): A Boolean value that indicates whether the session should wait for connectivity to become available, or fail immediately.
- [usesClassicLoadingMode](urlsessionconfiguration/usesclassicloadingmode.md)

### Setting cookie policies

- [httpCookieAcceptPolicy](urlsessionconfiguration/httpcookieacceptpolicy.md): A policy constant that determines when cookies should be accepted.
- [httpShouldSetCookies](urlsessionconfiguration/httpshouldsetcookies.md): A Boolean value that determines whether requests should contain cookies from the cookie store.
- [httpCookieStorage](urlsessionconfiguration/httpcookiestorage.md): The cookie store for storing cookies within this session.
- [HTTPCookie](httpcookie.md): A representation of an HTTP cookie.

### Setting security policies

- [tlsMinimumSupportedProtocolVersion](urlsessionconfiguration/tlsminimumsupportedprotocolversion.md): The minimum TLS protocol version that the client should accept when making connections in this session.
- [tlsMaximumSupportedProtocolVersion](urlsessionconfiguration/tlsmaximumsupportedprotocolversion.md): The maximum TLS protocol version that the client should request when making connections in this session.
- [urlCredentialStorage](urlsessionconfiguration/urlcredentialstorage.md): A credential store that provides credentials for authentication.
- [tlsMinimumSupportedProtocol](urlsessionconfiguration/tlsminimumsupportedprotocol.md): Deprecated. The minimum TLS protocol to accept during protocol negotiation.
- [tlsMaximumSupportedProtocol](urlsessionconfiguration/tlsmaximumsupportedprotocol.md): Deprecated. The maximum TLS protocol version that the client should request when making connections in this session.
- [requiresDNSSECValidation](urlsessionconfiguration/requiresdnssecvalidation.md)

### Setting caching policies

- [urlCache](urlsessionconfiguration/urlcache.md): The URL cache for providing cached responses to requests within the session.
- [requestCachePolicy](urlsessionconfiguration/requestcachepolicy.md): A predefined constant that determines when to return a response from the cache.

### Supporting background transfers

- [sessionSendsLaunchEvents](urlsessionconfiguration/sessionsendslaunchevents.md): A Boolean value that indicates whether the app should be resumed or launched in the background when transfers finish.
- [isDiscretionary](urlsessionconfiguration/isdiscretionary.md): A Boolean value that determines whether background tasks can be scheduled at the discretion of the system for optimal performance.
- [shouldUseExtendedBackgroundIdleMode](urlsessionconfiguration/shoulduseextendedbackgroundidlemode.md): Deprecated. A Boolean value that indicates whether TCP connections should be kept open when the app moves to the background.

### Supporting custom protocols

- [protocolClasses](urlsessionconfiguration/protocolclasses.md): An array of extra protocol subclasses that handle requests in a session.
- [URLProtocol](urlprotocol.md): An abstract class that handles the loading of protocol-specific URL data.

### Supporting Multipath TCP

- [Improving network reliability using Multipath TCP](improving-network-reliability-using-multipath-tcp.md): Use the available radios in iOS devices to improve your app’s network reliability and performance.
- [multipathServiceType](urlsessionconfiguration/multipathservicetype-swift.property.md): A service type that specifies the Multipath TCP connection policy for transmitting data over Wi-Fi and cellular interfaces.
- [URLSessionConfiguration.MultipathServiceType](urlsessionconfiguration/multipathservicetype-swift.enum.md): Constants that specify the type of service that Multipath TCP uses.
- [Multipath Entitlement](../bundleresources/entitlements/com.apple.developer.networking.multipath.md): A Boolean value indicating whether your app may use Multipath protocols to seamlessly transition between Wi-Fi and cellular networks.

### Setting HTTP policy and proxy properties

- [httpMaximumConnectionsPerHost](urlsessionconfiguration/httpmaximumconnectionsperhost.md): The maximum number of simultaneous HTTP/1.1 connections to make to a given host.
- [httpShouldUsePipelining](urlsessionconfiguration/httpshouldusepipelining.md): Deprecated. A Boolean value that determines whether the session should use HTTP pipelining.
- [proxyConfigurations](urlsessionconfiguration/proxyconfigurations.md): An array of proxy configuration objects containing information about the proxies to use within this session.
- [connectionProxyDictionary](urlsessionconfiguration/connectionproxydictionary.md): A dictionary containing information about the proxy to use within this session.

### Supporting connectivity changes

- [waitsForConnectivity](urlsessionconfiguration/waitsforconnectivity.md): A Boolean value that indicates whether the session should wait for connectivity to become available, or fail immediately.

### Supporting limited modes

- [allowsConstrainedNetworkAccess](urlsessionconfiguration/allowsconstrainednetworkaccess.md): A Boolean value that indicates whether connections may use the network when the user has specified Low Data Mode.
- [allowsExpensiveNetworkAccess](urlsessionconfiguration/allowsexpensivenetworkaccess.md): A Boolean value that indicates whether connections may use a network interface that the system considers expensive.

### Deprecated methods

- [backgroundSessionConfiguration(\_:)](urlsessionconfiguration/backgroundsessionconfiguration%28__%29.md): Deprecated. Returns a session configuration object that allows HTTP and HTTPS uploads or downloads to be performed in the background.

### Instance Properties

- [allowsUltraConstrainedNetworkAccess](urlsessionconfiguration/allowsultraconstrainednetworkaccess.md)
- [enablesEarlyData](urlsessionconfiguration/enablesearlydata.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a session

- [init(configuration:)](urlsession/init%28configuration_%29.md): Creates a session with the specified session configuration.
- [init(configuration:delegate:delegateQueue:)](urlsession/init%28configuration_delegate_delegatequeue_%29.md): Creates a session with the specified session configuration, delegate, and operation queue.
- [configuration](urlsession/configuration.md): A copy of the configuration object for this session.

# NSURLSessionConfiguration (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A configuration object that defines behavior and policies for a URL session.

## Declaration

```objectivec
@interface NSURLSessionConfiguration : NSObject
```

## Mentioned In

- [Accessing cached data](accessing-cached-data.md)
- [Downloading files in the background](downloading-files-in-the-background.md)
- [Fetching website data into memory](fetching-website-data-into-memory.md)
- [Improving network reliability using Multipath TCP](improving-network-reliability-using-multipath-tcp.md)
- [Uploading streams of data](uploading-streams-of-data.md)

<a id="overview"></a>

## Overview

An [NSURLSessionConfiguration](urlsessionconfiguration.md) object defines the behavior and policies to use when uploading and downloading data using an [NSURLSession](urlsession.md) object. When uploading or downloading data, creating a configuration object is always the first step you must take. You use this object to configure the timeout values, caching policies, connection requirements, and other types of information that you intend to use with your [NSURLSession](urlsession.md) object.

It is important to configure your [NSURLSessionConfiguration](urlsessionconfiguration.md) object appropriately before using it to initialize a session object. Session objects make a copy of the configuration settings you provide and use those settings to configure the session. Once configured, the session object ignores any changes you make to the [NSURLSessionConfiguration](urlsessionconfiguration.md) object. If you need to modify your transfer policies, you must update the session configuration object and use it to create a new [NSURLSession](urlsession.md) object.

> **Note**

>  In some cases, the policies defined in this configuration may be overridden by policies specified by an [NSURLRequest](nsurlrequest.md) object provided for a task. Any policy specified on the request object is respected unless the session’s policy is more restrictive. For example, if the session configuration specifies that cellular networking should not be allowed, the [NSURLRequest](nsurlrequest.md) object cannot request cellular networking.

For more information about using configuration objects to create sessions, see [NSURLSession](urlsession.md).

<a id="Types-of-session-configurations"></a>

### Types of session configurations

The behavior and capabilities of a URL session are largely determined by the kind of configuration used to create the session.

The singleton shared session (which has no configuration object) is for basic requests. It’s not as customizable as sessions that you create, but it serves as a good starting point if you have very limited requirements. You access this session by calling the shared class method. See that method’s discussion for more information about its limitations.

Default sessions behave much like the shared session (unless you customize them further), but let you obtain data incrementally using a delegate. You can create a default session configuration by calling the default method on the URLSessionConfiguration class.

Ephemeral sessions are similar to default sessions, but they don’t write caches, cookies, or credentials to disk. You can create an ephemeral session configuration by calling the ephemeral method on the URLSessionConfiguration class.

Background sessions let you perform uploads and downloads of content in the background while your app isn’t running. You can create a background session configuration by calling the backgroundSessionConfiguration(\_:) method on the URLSessionConfiguration class.

## Topics

### Creating a session configuration object

- [defaultSessionConfiguration](urlsessionconfiguration/default.md): A default session configuration object.
- [ephemeralSessionConfiguration](urlsessionconfiguration/ephemeral.md): A session configuration that uses no persistent storage for caches, cookies, or credentials.
- [backgroundSessionConfigurationWithIdentifier:](urlsessionconfiguration/background%28withidentifier_%29.md): Creates a session configuration object that allows HTTP and HTTPS uploads or downloads to be performed in the background.
- [init](urlsessionconfiguration/init%28%29.md): Deprecated. Creates an empty session configuration.
- [new](urlsessionconfiguration/new%28%29.md): Deprecated. Creates an empty session configuration.

### Setting general properties

- [identifier](urlsessionconfiguration/identifier.md): The background session identifier of the configuration object.
- [HTTPAdditionalHeaders](urlsessionconfiguration/httpadditionalheaders.md): A dictionary of additional headers to send with requests.
- [networkServiceType](urlsessionconfiguration/networkservicetype.md): The type of network service for all tasks within network sessions to enable Cellular Network Slicing.
- [allowsCellularAccess](urlsessionconfiguration/allowscellularaccess.md): A Boolean value that determines whether connections should be made over a cellular network.
- [timeoutIntervalForRequest](urlsessionconfiguration/timeoutintervalforrequest.md): The timeout interval to use when waiting for additional data.
- [timeoutIntervalForResource](urlsessionconfiguration/timeoutintervalforresource.md): The maximum amount of time that a resource request should be allowed to take.
- [sharedContainerIdentifier](urlsessionconfiguration/sharedcontaineridentifier.md): The identifier for the shared container into which files in background URL sessions should be downloaded.
- [waitsForConnectivity](urlsessionconfiguration/waitsforconnectivity.md): A Boolean value that indicates whether the session should wait for connectivity to become available, or fail immediately.
- [usesClassicLoadingMode](urlsessionconfiguration/usesclassicloadingmode.md)

### Setting cookie policies

- [HTTPCookieAcceptPolicy](urlsessionconfiguration/httpcookieacceptpolicy.md): A policy constant that determines when cookies should be accepted.
- [HTTPShouldSetCookies](urlsessionconfiguration/httpshouldsetcookies.md): A Boolean value that determines whether requests should contain cookies from the cookie store.
- [HTTPCookieStorage](urlsessionconfiguration/httpcookiestorage.md): The cookie store for storing cookies within this session.
- [NSHTTPCookie](httpcookie.md): A representation of an HTTP cookie.

### Setting security policies

- [TLSMinimumSupportedProtocolVersion](urlsessionconfiguration/tlsminimumsupportedprotocolversion.md): The minimum TLS protocol version that the client should accept when making connections in this session.
- [TLSMaximumSupportedProtocolVersion](urlsessionconfiguration/tlsmaximumsupportedprotocolversion.md): The maximum TLS protocol version that the client should request when making connections in this session.
- [URLCredentialStorage](urlsessionconfiguration/urlcredentialstorage.md): A credential store that provides credentials for authentication.
- [TLSMinimumSupportedProtocol](urlsessionconfiguration/tlsminimumsupportedprotocol.md): Deprecated. The minimum TLS protocol to accept during protocol negotiation.
- [TLSMaximumSupportedProtocol](urlsessionconfiguration/tlsmaximumsupportedprotocol.md): Deprecated. The maximum TLS protocol version that the client should request when making connections in this session.
- [requiresDNSSECValidation](urlsessionconfiguration/requiresdnssecvalidation.md)

### Setting caching policies

- [URLCache](urlsessionconfiguration/urlcache.md): The URL cache for providing cached responses to requests within the session.
- [requestCachePolicy](urlsessionconfiguration/requestcachepolicy.md): A predefined constant that determines when to return a response from the cache.

### Supporting background transfers

- [sessionSendsLaunchEvents](urlsessionconfiguration/sessionsendslaunchevents.md): A Boolean value that indicates whether the app should be resumed or launched in the background when transfers finish.
- [discretionary](urlsessionconfiguration/isdiscretionary.md): A Boolean value that determines whether background tasks can be scheduled at the discretion of the system for optimal performance.
- [shouldUseExtendedBackgroundIdleMode](urlsessionconfiguration/shoulduseextendedbackgroundidlemode.md): Deprecated. A Boolean value that indicates whether TCP connections should be kept open when the app moves to the background.

### Supporting custom protocols

- [protocolClasses](urlsessionconfiguration/protocolclasses.md): An array of extra protocol subclasses that handle requests in a session.
- [NSURLProtocol](urlprotocol.md): An abstract class that handles the loading of protocol-specific URL data.

### Supporting Multipath TCP

- [Improving network reliability using Multipath TCP](improving-network-reliability-using-multipath-tcp.md): Use the available radios in iOS devices to improve your app’s network reliability and performance.
- [multipathServiceType](urlsessionconfiguration/multipathservicetype-swift.property.md): A service type that specifies the Multipath TCP connection policy for transmitting data over Wi-Fi and cellular interfaces.
- [NSURLSessionMultipathServiceType](urlsessionconfiguration/multipathservicetype-swift.enum.md): Constants that specify the type of service that Multipath TCP uses.
- [Multipath Entitlement](../bundleresources/entitlements/com.apple.developer.networking.multipath.md): A Boolean value indicating whether your app may use Multipath protocols to seamlessly transition between Wi-Fi and cellular networks.

### Setting HTTP policy and proxy properties

- [HTTPMaximumConnectionsPerHost](urlsessionconfiguration/httpmaximumconnectionsperhost.md): The maximum number of simultaneous HTTP/1.1 connections to make to a given host.
- [HTTPShouldUsePipelining](urlsessionconfiguration/httpshouldusepipelining.md): Deprecated. A Boolean value that determines whether the session should use HTTP pipelining.
- [proxyConfigurations](nsurlsessionconfiguration/proxyconfigurations.md): An array of proxy configuration objects containing information about the proxies to use within this session.
- [connectionProxyDictionary](urlsessionconfiguration/connectionproxydictionary.md): A dictionary containing information about the proxy to use within this session.

### Supporting connectivity changes

- [waitsForConnectivity](urlsessionconfiguration/waitsforconnectivity.md): A Boolean value that indicates whether the session should wait for connectivity to become available, or fail immediately.

### Supporting limited modes

- [allowsConstrainedNetworkAccess](urlsessionconfiguration/allowsconstrainednetworkaccess.md): A Boolean value that indicates whether connections may use the network when the user has specified Low Data Mode.
- [allowsExpensiveNetworkAccess](urlsessionconfiguration/allowsexpensivenetworkaccess.md): A Boolean value that indicates whether connections may use a network interface that the system considers expensive.

### Deprecated methods

- [backgroundSessionConfiguration:](urlsessionconfiguration/backgroundsessionconfiguration%28__%29.md): Deprecated. Returns a session configuration object that allows HTTP and HTTPS uploads or downloads to be performed in the background.

### Instance Properties

- [allowsUltraConstrainedNetworkAccess](urlsessionconfiguration/allowsultraconstrainednetworkaccess.md)
- [enablesEarlyData](urlsessionconfiguration/enablesearlydata.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](nscopying.md)

## See Also

### Creating a session

- [sessionWithConfiguration:](urlsession/init%28configuration_%29.md): Creates a session with the specified session configuration.
- [sessionWithConfiguration:delegate:delegateQueue:](urlsession/init%28configuration_delegate_delegatequeue_%29.md): Creates a session with the specified session configuration, delegate, and operation queue.
- [configuration](urlsession/configuration.md): A copy of the configuration object for this session.
