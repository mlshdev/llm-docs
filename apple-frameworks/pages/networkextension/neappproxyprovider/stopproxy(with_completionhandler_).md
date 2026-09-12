> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxyprovider/stopproxy(with:completionhandler:)](https://developer.apple.com/documentation/networkextension/neappproxyprovider/stopproxy(with:completionhandler:))

# stopProxy(with:completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Stop the network proxy.

## Declaration

```swift
func stopProxy(with reason: NEProviderStopReason, completionHandler: @escaping @Sendable () -> Void)
```

```swift
func stopProxy(with reason: NEProviderStopReason) async
```

## Parameters

- `reason`: A `NEProviderStopReason` code indicating why the proxy is being stopped. For a list of possible codes, see [NEProvider](../neprovider.md).
- `completionHandler`: A block that must be executed when the proxy is fully stopped.

<a id="Discussion"></a>

## Discussion

This method is called by the system to stop the network proxy.

`NEAppProxyProvider` subclasses must override this method.

Do not use this method to stop the proxy from the App Proxy Provider. Use `cancelProxyWithError:` instead.

## See Also

### Managing the app proxy life cycle

- [startProxy(options:completionHandler:)](startproxy%28options_completionhandler_%29.md): Start the network proxy.
- [cancelProxyWithError(\_:)](cancelproxywitherror%28__%29.md): Stop the network proxy from the App Proxy Provider.

# stopProxyWithReason:completionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Stop the network proxy.

## Declaration

```objectivec
- (void) stopProxyWithReason:(NEProviderStopReason) reason completionHandler:(void (^)()) completionHandler;
```

## Parameters

- `reason`: A `NEProviderStopReason` code indicating why the proxy is being stopped. For a list of possible codes, see [NEProvider](../neprovider.md).
- `completionHandler`: A block that must be executed when the proxy is fully stopped.

<a id="Discussion"></a>

## Discussion

This method is called by the system to stop the network proxy.

`NEAppProxyProvider` subclasses must override this method.

Do not use this method to stop the proxy from the App Proxy Provider. Use `cancelProxyWithError:` instead.

## See Also

### Managing the app proxy life cycle

- [startProxyWithOptions:completionHandler:](startproxy%28options_completionhandler_%29.md): Start the network proxy.
- [cancelProxyWithError:](cancelproxywitherror%28__%29.md): Stop the network proxy from the App Proxy Provider.
