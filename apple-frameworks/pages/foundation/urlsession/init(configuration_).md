> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/init(configuration:)](https://developer.apple.com/documentation/foundation/urlsession/init(configuration:))

# init(configuration:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a session with the specified session configuration.

## Declaration

```swift
init(configuration: URLSessionConfiguration)
```

## Parameters

- `configuration`: A configuration object that specifies certain behaviors, such as caching policies, timeouts, proxies, pipelining, TLS versions to support, cookie policies, credential storage, and so on.

  See [URLSessionConfiguration](../urlsessionconfiguration.md) for more information.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to calling [init(configuration:delegate:delegateQueue:)](init%28configuration_delegate_delegatequeue_%29.md) with a `nil` delegate and queue.

## See Also

### Creating a session

- [init(configuration:delegate:delegateQueue:)](init%28configuration_delegate_delegatequeue_%29.md): Creates a session with the specified session configuration, delegate, and operation queue.
- [URLSessionConfiguration](../urlsessionconfiguration.md): A configuration object that defines behavior and policies for a URL session.
- [configuration](configuration.md): A copy of the configuration object for this session.

# sessionWithConfiguration: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a session with the specified session configuration.

## Declaration

```objectivec
+ (NSURLSession *) sessionWithConfiguration:(NSURLSessionConfiguration *) configuration;
```

## Parameters

- `configuration`: A configuration object that specifies certain behaviors, such as caching policies, timeouts, proxies, pipelining, TLS versions to support, cookie policies, credential storage, and so on.

  See [NSURLSessionConfiguration](../urlsessionconfiguration.md) for more information.

<a id="Discussion"></a>

## Discussion

Calling this method is equivalent to calling [sessionWithConfiguration:delegate:delegateQueue:](init%28configuration_delegate_delegatequeue_%29.md) with a `nil` delegate and queue.

## See Also

### Creating a session

- [sessionWithConfiguration:delegate:delegateQueue:](init%28configuration_delegate_delegatequeue_%29.md): Creates a session with the specified session configuration, delegate, and operation queue.
- [NSURLSessionConfiguration](../urlsessionconfiguration.md): A configuration object that defines behavior and policies for a URL session.
- [configuration](configuration.md): A copy of the configuration object for this session.
