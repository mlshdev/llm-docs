> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsession/configuration](https://developer.apple.com/documentation/foundation/urlsession/configuration)

# configuration (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A copy of the configuration object for this session.

## Declaration

```swift
@NSCopying var configuration: URLSessionConfiguration { get }
```

## Mentioned In

- [Accessing cached data](../accessing-cached-data.md)

<a id="Discussion"></a>

## Discussion

Beginning in iOS 9 and OS X 10.11, [URLSession](../urlsession.md) objects store a copy of the [URLSessionConfiguration](../urlsessionconfiguration.md) object passed to their initializers, such that a session’s configuration is immutable after initialization. Any further changes to mutable properties on the configuration object passed to a session’s initializer or the value returned from a session’s configuration property do not affect the behavior of that session. However, you can create a new session with the modified configuration object.

> **Note**

>  On previous versions of iOS and macOS, a bug in the implementation causes [URLSession](../urlsession.md) objects to store a *reference* to configuration objects passed to their initializers rather than a copy. This allows the behavior of a session to be further configured after initialization by modifying the configuration object passed to a session’s initializer or the value returned from a session’s [configuration](configuration.md) property. You can ensure consistent behavior across different platform versions by explicitly calling [copy()](../../objectivec/nsobject-swift.class/copy%28%29.md) on configuration objects passed to a [URLSession](../urlsession.md) initializer or returned from the [configuration](configuration.md) property.

## See Also

### Creating a session

- [init(configuration:)](init%28configuration_%29.md): Creates a session with the specified session configuration.
- [init(configuration:delegate:delegateQueue:)](init%28configuration_delegate_delegatequeue_%29.md): Creates a session with the specified session configuration, delegate, and operation queue.
- [URLSessionConfiguration](../urlsessionconfiguration.md): A configuration object that defines behavior and policies for a URL session.

# configuration (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A copy of the configuration object for this session.

## Declaration

```objectivec
@property (copy, readonly) NSURLSessionConfiguration * configuration;
```

## Mentioned In

- [Accessing cached data](../accessing-cached-data.md)

<a id="Discussion"></a>

## Discussion

Beginning in iOS 9 and OS X 10.11, [NSURLSession](../urlsession.md) objects store a copy of the [NSURLSessionConfiguration](../urlsessionconfiguration.md) object passed to their initializers, such that a session’s configuration is immutable after initialization. Any further changes to mutable properties on the configuration object passed to a session’s initializer or the value returned from a session’s configuration property do not affect the behavior of that session. However, you can create a new session with the modified configuration object.

> **Note**

>  On previous versions of iOS and macOS, a bug in the implementation causes [NSURLSession](../urlsession.md) objects to store a *reference* to configuration objects passed to their initializers rather than a copy. This allows the behavior of a session to be further configured after initialization by modifying the configuration object passed to a session’s initializer or the value returned from a session’s [configuration](configuration.md) property. You can ensure consistent behavior across different platform versions by explicitly calling [copy](../../objectivec/nsobject-swift.class/copy%28%29.md) on configuration objects passed to a [NSURLSession](../urlsession.md) initializer or returned from the [configuration](configuration.md) property.

## See Also

### Creating a session

- [sessionWithConfiguration:](init%28configuration_%29.md): Creates a session with the specified session configuration.
- [sessionWithConfiguration:delegate:delegateQueue:](init%28configuration_delegate_delegatequeue_%29.md): Creates a session with the specified session configuration, delegate, and operation queue.
- [NSURLSessionConfiguration](../urlsessionconfiguration.md): A configuration object that defines behavior and policies for a URL session.
