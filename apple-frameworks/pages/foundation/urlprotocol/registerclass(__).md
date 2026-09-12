> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlprotocol/registerclass(_:)](https://developer.apple.com/documentation/foundation/urlprotocol/registerclass(_:))

# registerClass(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attempts to register a subclass of [URLProtocol](../urlprotocol.md), making it visible to the URL loading system.

## Declaration

```swift
class func registerClass(_ protocolClass: AnyClass) -> Bool
```

## Parameters

- `protocolClass`: The subclass to register.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the registration is successful, [false](https://developer.apple.com/documentation/swift/false) otherwise. The only failure condition is if `protocolClass` is not a subclass of [URLProtocol](../urlprotocol.md).

<a id="Discussion"></a>

## Discussion

Register any custom [URLProtocol](../urlprotocol.md) subclasses prior to making URL requests. When the URL loading system begins to load a request, it tries to initialize each registered protocol class with the specified request. The first [URLProtocol](../urlprotocol.md) subclass to return [true](https://developer.apple.com/documentation/swift/true) when sent a [canInit(with:)](caninit%28with_%29-76brg.md) message is used to load the request. There is no guarantee that all registered protocol classes will be consulted.

Classes are consulted in the reverse order of their registration. A similar design governs the process to create the canonical form of a request with [canonicalRequest(for:)](canonicalrequest%28for_%29.md).

## See Also

### Registering and unregistering protocol classes

- [unregisterClass(\_:)](unregisterclass%28__%29.md): Unregisters the specified subclass of [URLProtocol](../urlprotocol.md).

# registerClass: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Attempts to register a subclass of [NSURLProtocol](../urlprotocol.md), making it visible to the URL loading system.

## Declaration

```objectivec
+ (BOOL) registerClass:(Class) protocolClass;
```

## Parameters

- `protocolClass`: The subclass to register.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the registration is successful, [false](https://developer.apple.com/documentation/swift/false) otherwise. The only failure condition is if `protocolClass` is not a subclass of [NSURLProtocol](../urlprotocol.md).

<a id="Discussion"></a>

## Discussion

Register any custom [NSURLProtocol](../urlprotocol.md) subclasses prior to making URL requests. When the URL loading system begins to load a request, it tries to initialize each registered protocol class with the specified request. The first [NSURLProtocol](../urlprotocol.md) subclass to return [true](https://developer.apple.com/documentation/swift/true) when sent a [canInitWithRequest:](caninit%28with_%29-76brg.md) message is used to load the request. There is no guarantee that all registered protocol classes will be consulted.

Classes are consulted in the reverse order of their registration. A similar design governs the process to create the canonical form of a request with [canonicalRequestForRequest:](canonicalrequest%28for_%29.md).

## See Also

### Registering and unregistering protocol classes

- [unregisterClass:](unregisterclass%28__%29.md): Unregisters the specified subclass of [NSURLProtocol](../urlprotocol.md).
