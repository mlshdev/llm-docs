> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/protocolclasses](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/protocolclasses)

# protocolClasses (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of extra protocol subclasses that handle requests in a session.

## Declaration

```swift
var protocolClasses: [AnyClass]? { get set }
```

<a id="Discussion"></a>

## Discussion

The objects in this array are `Class` objects corresponding to custom [URLProtocol](../urlprotocol.md) subclasses that you define. URL session objects support a number of common networking protocols by default. Use this array to extend the default set of common networking protocols available for use by a session with one or more custom protocols that you define.

Prior to handling a request, the [URLSession](../urlsession.md) object searches the default protocols first and then checks your custom protocols until it finds one capable of handling the specified request. It uses the protocol whose [canInit(with:)](../urlprotocol/caninit%28with_%29-76brg.md) class method returns [true](https://developer.apple.com/documentation/swift/true), indicating that the class is capable of handling the specified request.

> **Note**

>  You cannot use custom [URLProtocol](../urlprotocol.md) subclasses in conjunction with background sessions.

The default value is an empty array.

## See Also

### Supporting custom protocols

- [URLProtocol](../urlprotocol.md): An abstract class that handles the loading of protocol-specific URL data.

# protocolClasses (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of extra protocol subclasses that handle requests in a session.

## Declaration

```objectivec
@property (copy, nullable) NSArray<Class> * protocolClasses;
```

<a id="Discussion"></a>

## Discussion

The objects in this array are `Class` objects corresponding to custom [NSURLProtocol](../urlprotocol.md) subclasses that you define. URL session objects support a number of common networking protocols by default. Use this array to extend the default set of common networking protocols available for use by a session with one or more custom protocols that you define.

Prior to handling a request, the [NSURLSession](../urlsession.md) object searches the default protocols first and then checks your custom protocols until it finds one capable of handling the specified request. It uses the protocol whose [canInitWithRequest:](../urlprotocol/caninit%28with_%29-76brg.md) class method returns [true](https://developer.apple.com/documentation/swift/true), indicating that the class is capable of handling the specified request.

> **Note**

>  You cannot use custom [NSURLProtocol](../urlprotocol.md) subclasses in conjunction with background sessions.

The default value is an empty array.

## See Also

### Supporting custom protocols

- [NSURLProtocol](../urlprotocol.md): An abstract class that handles the loading of protocol-specific URL data.
