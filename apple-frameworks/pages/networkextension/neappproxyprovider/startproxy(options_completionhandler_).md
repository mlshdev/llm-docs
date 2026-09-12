> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxyprovider/startproxy(options:completionhandler:)](https://developer.apple.com/documentation/networkextension/neappproxyprovider/startproxy(options:completionhandler:))

# startProxy(options:completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Start the network proxy.

## Declaration

```swift
func startProxy(options: [String : Any]? = nil, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func startProxy(options: [String : Any]? = nil) async throws
```

## Parameters

- `options`: A dictionary passed by the app that requested that the proxy be started. If the starting app did not specify a dictionary of options then this parameter will be nil. If the proxy was started via Connect On Demand, then this parameter will be nil.
- `completionHandler`: A block that must be executed when the proxy is fully established, or when the proxy cannot be started due to an error. If the proxy was successfully established, then the error parameter must be set to nil. If an error occurred, the error parameter passed to this block must be set to a non-nil [NSError](../../foundation/nserror.md) object.

<a id="Discussion"></a>

## Discussion

This method is called by the system to start the network proxy.

`NEAppProxyProvider` subclasses must override this method.

When the App Proxy Provider executes the `completionHandler` block with a nil error parameter, it signals to the system that it is ready to begin handling network data.

The domain and code of the `NSError` object passed to the `completionHandler` block are defined by the App Proxy Provider.

## See Also

### Managing the app proxy life cycle

- [stopProxy(with:completionHandler:)](stopproxy%28with_completionhandler_%29.md): Stop the network proxy.
- [cancelProxyWithError(\_:)](cancelproxywitherror%28__%29.md): Stop the network proxy from the App Proxy Provider.

# startProxyWithOptions:completionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Start the network proxy.

## Declaration

```objectivec
- (void) startProxyWithOptions:(NSDictionary<NSString *,id> *) options completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `options`: A dictionary passed by the app that requested that the proxy be started. If the starting app did not specify a dictionary of options then this parameter will be nil. If the proxy was started via Connect On Demand, then this parameter will be nil.
- `completionHandler`: A block that must be executed when the proxy is fully established, or when the proxy cannot be started due to an error. If the proxy was successfully established, then the error parameter must be set to nil. If an error occurred, the error parameter passed to this block must be set to a non-nil [NSError](../../foundation/nserror.md) object.

<a id="Discussion"></a>

## Discussion

This method is called by the system to start the network proxy.

`NEAppProxyProvider` subclasses must override this method.

When the App Proxy Provider executes the `completionHandler` block with a nil error parameter, it signals to the system that it is ready to begin handling network data.

The domain and code of the `NSError` object passed to the `completionHandler` block are defined by the App Proxy Provider.

## See Also

### Managing the app proxy life cycle

- [stopProxyWithReason:completionHandler:](stopproxy%28with_completionhandler_%29.md): Stop the network proxy.
- [cancelProxyWithError:](cancelproxywitherror%28__%29.md): Stop the network proxy from the App Proxy Provider.
