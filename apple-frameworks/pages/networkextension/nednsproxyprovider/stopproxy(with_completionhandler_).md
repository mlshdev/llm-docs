> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednsproxyprovider/stopproxy(with:completionhandler:)](https://developer.apple.com/documentation/networkextension/nednsproxyprovider/stopproxy(with:completionhandler:))

# stopProxy(with:completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Stops the DNS proxy.

## Declaration

```swift
func stopProxy(with reason: NEProviderStopReason, completionHandler: @escaping @Sendable () -> Void)
```

```swift
func stopProxy(with reason: NEProviderStopReason) async
```

## Parameters

- `reason`: A code indicating why the proxy is being stopped.
- `completionHandler`: A block that must be called when the proxy is completely stopped.

<a id="Discussion"></a>

## Discussion

Subclasses of [NEDNSProxyProvider](../nednsproxyprovider.md) must override this method to perform whatever steps are necessary to stop the proxy.

The system calls this method to stop the proxy. You indicate that the proxy is fully stopped by calling the completion handler.

> **Important**

>  Don’t call this method to stop the proxy from within the proxy provider itself. Call [cancelProxyWithError(\_:)](cancelproxywitherror%28__%29.md) instead.

## See Also

### Managing the DNS proxy life cycle

- [startProxy(options:completionHandler:)](startproxy%28options_completionhandler_%29.md): Starts the DNS proxy.
- [cancelProxyWithError(\_:)](cancelproxywitherror%28__%29.md): Cancels the DNS proxy.

# stopProxyWithReason:completionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Stops the DNS proxy.

## Declaration

```objectivec
- (void) stopProxyWithReason:(NEProviderStopReason) reason completionHandler:(void (^)()) completionHandler;
```

## Parameters

- `reason`: A code indicating why the proxy is being stopped.
- `completionHandler`: A block that must be called when the proxy is completely stopped.

<a id="Discussion"></a>

## Discussion

Subclasses of [NEDNSProxyProvider](../nednsproxyprovider.md) must override this method to perform whatever steps are necessary to stop the proxy.

The system calls this method to stop the proxy. You indicate that the proxy is fully stopped by calling the completion handler.

> **Important**

>  Don’t call this method to stop the proxy from within the proxy provider itself. Call [cancelProxyWithError:](cancelproxywitherror%28__%29.md) instead.

## See Also

### Managing the DNS proxy life cycle

- [startProxyWithOptions:completionHandler:](startproxy%28options_completionhandler_%29.md): Starts the DNS proxy.
- [cancelProxyWithError:](cancelproxywitherror%28__%29.md): Cancels the DNS proxy.
