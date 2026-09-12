> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxyprovider/cancelproxywitherror(_:)](https://developer.apple.com/documentation/networkextension/neappproxyprovider/cancelproxywitherror(_:))

# cancelProxyWithError(\_:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Stop the network proxy from the App Proxy Provider.

## Declaration

```swift
func cancelProxyWithError(_ error: (any Error)?)
```

## Parameters

- `error`: An [NSError](../../foundation/nserror.md) object containing the error that caused the proxy to be stopped. The domain and code of this `NSError` object is defined by the caller.

<a id="Discussion"></a>

## Discussion

The App Proxy Provider should call this method when an unrecoverable error occurs that makes the proxy no longer viable.

## See Also

### Managing the app proxy life cycle

- [startProxy(options:completionHandler:)](startproxy%28options_completionhandler_%29.md): Start the network proxy.
- [stopProxy(with:completionHandler:)](stopproxy%28with_completionhandler_%29.md): Stop the network proxy.

# cancelProxyWithError: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Stop the network proxy from the App Proxy Provider.

## Declaration

```objectivec
- (void) cancelProxyWithError:(NSError *) error;
```

## Parameters

- `error`: An [NSError](../../foundation/nserror.md) object containing the error that caused the proxy to be stopped. The domain and code of this `NSError` object is defined by the caller.

<a id="Discussion"></a>

## Discussion

The App Proxy Provider should call this method when an unrecoverable error occurs that makes the proxy no longer viable.

## See Also

### Managing the app proxy life cycle

- [startProxyWithOptions:completionHandler:](startproxy%28options_completionhandler_%29.md): Start the network proxy.
- [stopProxyWithReason:completionHandler:](stopproxy%28with_completionhandler_%29.md): Stop the network proxy.
